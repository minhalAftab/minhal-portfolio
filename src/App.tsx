import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import { useState } from "react";
import Home from "./scenes/home";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const isTopOfPage = true;
  return (
    <Router>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Routes>
        <Route path="/" element={<Home setSelectedPage={setSelectedPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
