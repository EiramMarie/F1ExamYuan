import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DriverPage from "./pages/DriverPage";
import TeamPage from "./pages/TeamPage";
import RacePage from "./pages/RacePage";
import SignupPage from "./pages/SignupPage";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* style in App.css */}
        <nav className="navbar">
          <ul className="navbar__menu">
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/driver">Driver Page</Link></li>
            <li><Link to="/team">Team Page</Link></li>
            <li><Link to="/race">Race Page</Link></li>
            <li><Link to="/signup">Signup Form Page</Link></li>
          </ul>
        </nav>

        <Routes>
          //"Home", change later if we want another home page
          <Route path="/" element={<DriverPage/>}></Route>
          <Route path="/driver" element={<DriverPage/>}></Route>
          <Route path="/team" element={<TeamPage/>}></Route>
          <Route path="/race"element={<RacePage/>}></Route>
          <Route path="/signup" element={<SignupPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
