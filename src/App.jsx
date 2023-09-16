import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/layout/home/00-1-pag/Home";
import { Cart } from "./components/layout/home/02-0-shop/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
