import { Outlet, Link } from "react-router-dom";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <nav>
        <Header/>
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px"
          }}>
            <li>
              <Link to="/jewels/type/necklaces">Necklaces</Link>
            </li>
            <li>
              <Link to="/jewels/type/pendats">Pendats</Link>
            </li>
            <li>
              <Link to="/jewels/type/chains">Chains</Link>
            </li>
            <li>
              <Link to="/jewels/type/goldRings">Gold Rings</Link>
            </li>
            <li>
              <Link to="/jewels/type/mansRings">Mans`s Rings</Link>
            </li>
            <li>
              <Link to="/jewels/type/kidsJewellery">Kid`s Jewellery</Link>
            </li>
            <li>
              <Link to="/jewels/type/fashionRings">Fashion Rings</Link>
            </li>
          </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
