import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CustomNavbar from './CustomNavbar';
import ProjectPage from './ProjectPage';
import Home from './Home';
function App() {
  return (
    <Router>

      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/projects/:projectId" element={ProjectPage} />
      </Routes>
    </Router>
  );
}

export default App;
