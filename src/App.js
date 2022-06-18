import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/artem/body/Body";
import Header from "./components/artem/header/Header";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import StartPage from "./body/startPage/StartPage";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
