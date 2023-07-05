import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import { useState } from "react";
import Home from "./scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const isTopOfPage = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
