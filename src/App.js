import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import Activation from "./components/Activation";
import LatisLogin from "./components/LatisLogin";
import CallAPI from "./components/CallAPI";
import Hourglass from "./testing/OneElementHourglass";
import SpinningWheel from "./components/SpinningAnimation";
import LoadingToast from "./components/LoadingToast";
import SuccessToast from "./components/SuccessToast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage}></Route>
        <Route path="/Register" Component={Register}></Route>
        <Route path="/Activation" Component={Activation}></Route>
        <Route path="/LatisLogin" Component={LatisLogin}></Route>
        <Route path="/CallAPI" Component={CallAPI}></Route>
        <Route path="/Hourglass" Component={Hourglass}></Route>
        <Route path="/SpinningLoader" Component={SpinningWheel}></Route>
        {/* <Route path="/LoadingToast" Component={LoadingToast}></Route> */}
        <Route path="/SuccessToast" Component={SuccessToast}></Route>
      </Routes>
    </Router>
  );
}

export default App;
