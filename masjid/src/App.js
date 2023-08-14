import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WaysToDonate from "./pages/waysToDonate";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import Lessons from "./pages/lessons";
import Navbar from "./components/navbar";
import Appeal from "./pages/appeal";
import Id365 from "./components/id365";
import Revamp from "./assets/revamp";

function App() {
  return (
    <div className="App">
      <Router>
        {/*
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="appeal" element={<Appeal />} />
          <Route path="waysToDonate" element={<WaysToDonate />} />
          <Route path="about" element={<About />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="lessons" element={<Lessons />} />
        </Routes>
        <Id365 />
        */}
        <Revamp />
      </Router>
    </div>
  );
}

export default App;
