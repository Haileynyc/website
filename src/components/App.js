import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import CustomNavbar from "./CustomNavbar";
import ProjectPage from "./ProjectPage";
import Home from "./Home";
import NoPage from "./NoPage";
import ScrollToElementOnLoad from "./ScrollToElementOnLoad";
function App() {
  return (
    <Router>
      <ScrollToElementOnLoad />
      <CustomNavbar />
      <Logo />
      <Routes>
        <Route path="projects/:projectId" element={<ProjectPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
