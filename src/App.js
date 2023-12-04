import "./App.css";
import WebsiteNavbar from "./WebsiteNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "./CardComponent";
import BannerComponent from "./BannerComponent";
import ImagesComponent from "./ImagesComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <>
      <WebsiteNavbar></WebsiteNavbar>
      <Footer></Footer>
    </>
  );
}

export default App;
