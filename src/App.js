import "./App.css";
/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/
import { Router, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SignUpPage from "./pages/SignUpPage";
import PayPallButton from "./body/payMent/PayPallButton";


/*function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/signUp" element={<SignUpPage/>} />
          </Route>
        </Routes>
    </div>
  );
}*/
const App = () => <div className="App">
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signUpPage" component={SignUpPage}/>
            <Route exact path="/noPage" component={NoPage}/>
            <Route exact path="/layout" component={Layout}/>
            <Route exact path="/payPallButton" component={PayPallButton}/>




        </div>
    </Router>
</div>

export default App;
