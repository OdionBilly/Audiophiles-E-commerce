// import { useState } from "react-router-dom";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Headphone from "./Pages/Headphone";
import Speaker from "./Pages/Speaker";
import Earphone from "./Pages/Earphone";
import Nav from "./components/Nav";
import { ProductDetails } from "./Pages/ProductDetails";
import Speakerdetail from "./products/Speakerdetail";
import Earphonedetail from './products/Earphonedetail';

function App() {
  // const [cartItems, setCartItems] = useState ([]);

  // function to addproduct to cart
  // const addToCart = (product) => {
  //   setCartItems(prevItems => {
  //     const existingItem = prevItems.find(item => item.id === product.id);
  //     if (existingItem) {
  //       return prevItems.map(item =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + product.quantity }
  //           : item
  //       );
  //     } else {
  //       return [...prevItems, product];
  //     }
  //   });
  // };

  // const removeItem = (productId) => {
  //   setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  // };
  // const clearCart = () => {
  //   setCartItems([]);
  // };

  // const toggleQuantity = (productId, amount) => {
  //   setCartItems(prevItems =>
  //     prevItems.map(item =>
  //       item.id === productId
  //         ? { ...item, quantity: item.quantity + amount }
  //         : item
  //     ).filter(item => item.quantity > 0)
  //   );
  // };






  return (
    <div className="overflow-hidden">
      <BrowserRouter>
         <Nav 
          //  toggleQuantity={toggleQuantity}
          //  removeItem={removeItem}
          //  clearCart={clearCart}
          //  cartItems={cartItems} 
         
         /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones/" element={<Headphone />} />
          <Route path="/speakers/" element={<Speaker />} />
          <Route path="/earphones/" element={<Earphone />} />
          <Route path="/headphones/:headphoneId" element={<ProductDetails/>} />
          <Route path="/speakers/:speakerId" element={<Speakerdetail/>}/>
          <Route path="/earphones/:earphoneId" element={<Earphonedetail/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
