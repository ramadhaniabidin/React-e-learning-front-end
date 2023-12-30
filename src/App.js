import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import Activation from "./components/Activation";
import LatisLogin from "./components/LatisLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage}></Route>
        <Route path="/Register" Component={Register}></Route>
        <Route path="/Activation" Component={Activation}></Route>
        <Route path="/LatisLogin" Component={LatisLogin}></Route>
      </Routes>
    </Router>
  );
}

export default App;
