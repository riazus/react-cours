import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";

function App() {
  return (
    <Router>
      <NavBar />
      <AddBooks />
      <Footer />
    </Router>
  );
}

export default App;
