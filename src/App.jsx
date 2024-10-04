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
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones/" element={<Headphone />} />
          <Route path="/speakers/" element={<Speaker />} />
          <Route path="/earphones/" element={<Earphone />} />
          <Route path="/headphones/:headphoneId" element={<ProductDetails />} />
          <Route path="/speakers/:speakerId" element={<Speakerdetail/>}/>
          <Route path="/earphones/:earphoneId" element={<Earphonedetail/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
