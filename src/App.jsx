import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import Headphone from "./Pages/Headphone";
import Speaker from "./Pages/Speaker";
import Earphone from "./Pages/Earphone";
import Nav from "./components/Nav";
import { Details_headphones } from "./components/Details-headphones";
import { Details_speakers } from "./components/Details-speakers";
import { Details_earphones } from "./components/Details-earphones-1";
import { Details_headphones_1 } from './components/Details-headphone-1';

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
          <Route
            path="headphones/Details-headphones"
            element={<Details_headphones />} />

            <Route path="headphones/Details-headphones-1"
            element={<Details_headphones_1/>}/>
        
          <Route
            path="speakers/Details-speakers"
            element={<Details_speakers />}
          />
          <Route
            path="earphones/Details-earphones"
            element={<Details_earphones />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
