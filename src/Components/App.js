import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import '../Styles/App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Home" element={<Home />} />
      </Routes>

    </>
  )
}

export default App;
