import { LandingPage } from "./pages/LandingPage";
import { Wallet } from "./pages/Wallet";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/my-wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
