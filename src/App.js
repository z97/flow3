import "./App.css";
/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/
import { Router, Route, Link, Switch } from "react-router-dom";
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
const App = () => (
  <div className="App">
    <Router>
      <div>
        <Link to="/" component={Home} />
        <Link to="/signUpPage" component={SignUpPage} />
        <Link to="/noPage" component={NoPage} />
        <Link to="/layout" component={Layout} />
        <Link to="/payPallButton" component={PayPallButton} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signUpPage">
            <SignUpPage />
          </Route>
          <Route path="/noPage">
            <NoPage />
          </Route>
          <Route path="/layout">
            <Layout />
          </Route>
          <Route path="/payPallButton">
            <PayPallButton />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
