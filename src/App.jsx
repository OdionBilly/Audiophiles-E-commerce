import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Headphone from "./Pages/Headphone";
import Speaker from "./Pages/Speaker";
import Earphone from "./Pages/Earphone";
import Nav from "./components/Nav";

function App() {

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphone />} />
          <Route path="/speakers" element={<Speaker />} />
          <Route path="/earphones" element={<Earphone />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
