import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import RegPage from "./Pages/RegPage/RegPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/reg" element={<RegPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;