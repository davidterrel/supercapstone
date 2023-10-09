import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Shop from './Shop'
import Contact from './Contact';
import Cart from './components/Cart';
import Login from './components/Login';
import ShopContextProvider from './context/ShopContext';
import SignUp from './components/SignUp'
// import { AuthProvider } from './AuthContext';
import ProductContextProvider from './context/ProductContext';


function App() {

  return (
    <>
      <ProductContextProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </ProductContextProvider>
    </>
  )
}

export default App
