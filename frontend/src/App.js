import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import EditProduct from "./components/EditProduct";
import { host } from "./constants";

axios.defaults.baseURL = host + "/api/products";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Products />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact path="/edit-product/:id">
            <EditProduct />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
