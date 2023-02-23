import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} /> 
            </Routes>
    </Router>
  );
}

export default App;
