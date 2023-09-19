import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { ShopContextProvider } from "./shop-context";

export default function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
