
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


const paypalScriptOptions = {
    "client-id":
        "AaUpVv8WDVM5uezwsQo79K6YBKmqm3EeLSOx5TFTX4RM2_ephwW68aJ4_ASXYPjbI8OyuXchwgkQ7bRl",
    currency: "USD"
};
function Button() {
    /**
     * usePayPalScriptReducer use within PayPalScriptProvider
     * isPending: not finished loading(default state)
     * isResolved: successfully loaded
     * isRejected: failed to load
     */
    const [{ isPending }] = usePayPalScriptReducer();
    const paypalbuttonTransactionProps = {
        style: { layout: "vertical" },
        createOrder(data, actions) {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: "0.01"
                        }
                    }
                ]
            });
        },
        onApprove(data, actions) {
            /**
             * data: {
             *   orderID: string;
             *   payerID: string;
             *   paymentID: string | null;
             *   billingToken: string | null;
             *   facilitatorAccesstoken: string;
             * }
             */
            return actions.order.capture({}).then((details) => {
                alert(
                    "Transaction completed by" +
                    (details?.payer.name.given_name ?? "No details")
                );

                alert("Data details: " + JSON.stringify(data, null, 2));
            });
        }
    };
    return (
        <>
            {isPending ? <h2>Load Smart Payment Button...</h2> : null}
            <PayPalButtons {...paypalbuttonTransactionProps} />
        </>
    );
}
export default function App() {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', color: 'blue'}} className="App">

            {/*<h1>Choose payment<br/> method below</h1>*/}


            <PayPalScriptProvider options={paypalScriptOptions}>

                <Button />
            </PayPalScriptProvider>
        </div>
    );
}


