import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './Cart/Cart.jsx';
import { CartProvider } from "../context/CartContext.jsx";
import Checkout from './Checkout/Checkout.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId*" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;