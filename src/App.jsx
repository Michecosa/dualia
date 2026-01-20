import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import NotFound from './components/NotFound';
import ThankYou from "./pages/Thankyou";
import Contact from "./pages/Contact";
import PilatesTeam from "./pages/PilatesTeam";
import { CartProvider } from "./components/CartContext";




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/pilates-team" element={<PilatesTeam />}></Route>
            <Route path="/thank-you" element={<ThankYou />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
