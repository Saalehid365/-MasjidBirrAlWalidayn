import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/homepage/homes";
import Footer from "./components/footer";
import { ChakraProvider } from "@chakra-ui/react";
import CartProvider from "./context/shopContext";
import MasjidProject from "./pages/projectpages/masjidProject";
import CongoPage from "./pages/projectpages/congoPage";
import RamadaPage from "./pages/projectpages/ramadaPage";

function App() {
  return (
    <div className="App pt-12">
      <CartProvider>
        <ChakraProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route>
                <Route index element={<Home />} />
                <Route path="masjidProject" element={<MasjidProject />} />
                <Route path="congoProject" element={<CongoPage />} />
                <Route path="ramadhaanProject" element={<RamadaPage />} />
              </Route>
            </Routes>
            <Footer />
          </Router>
        </ChakraProvider>
      </CartProvider>
    </div>
  );
}

export default App;
