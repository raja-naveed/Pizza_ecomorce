import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} exact />
            </Routes>
    </Router>
  );
}

export default App;
