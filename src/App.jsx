import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
