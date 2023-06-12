import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import NavHome from "./components/NavHome";
import Home from "./pages/Home";
import Ex1 from "./pages/Ex1";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Container>
        <NavHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ex1" element={<Ex1 />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
