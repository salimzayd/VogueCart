import Banner from "./components/Banner";
import Kids from "./components/Kids";
import Mens from "./components/Mens";
import Navbar from "./components/Navbar";
import Women from "./components/Womens";
import { Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./components/Product";


function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Banner/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/men" element={<Mens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/products" element={<Product />} />
        <Route path="/footer" element={<Footer />} />


      </Routes>

    </div>
  );
}

export default App;
