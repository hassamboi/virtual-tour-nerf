import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import LocationDetails from "./components/LocationDetails";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<LocationDetails />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
