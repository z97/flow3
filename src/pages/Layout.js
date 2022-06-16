import { Outlet, Link } from "react-router-dom";
import './nav/Navbar.css';
const Layout = () => {
  return (
    <>
      <nav>
        <div
          className="m-6 pb-5 pt-3 row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <ul>
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
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
