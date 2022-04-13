import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDescription from "./Pages/ProductDescription/ProductDescription";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
