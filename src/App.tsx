import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import { useState } from "react";
import Home from "./scenes/home";
import { SelectedPage } from "./shared/types";
import ProjectContainer from "./scenes/projects/ProjectContainer";

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
        <Route path="/projects/:projectId" element={<ProjectContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
