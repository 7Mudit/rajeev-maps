import "./App.css";
import Cards from "./Cards";
import HomePage from "./HomePage";
import Maps from "./Maps";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map/:lat/:long" element={<Maps />} />
        <Route path="/location-card" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
