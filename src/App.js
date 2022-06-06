import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
