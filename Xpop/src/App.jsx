import { Routes, Route } from "react-router-dom";
import Landingpage from "./component/Landingpage.jsx";
import Login from "./component/Login.jsx";
import LoginForm from "./component/LoginForm.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/LoginForm" element={<LoginForm />} />
    </Routes>
  );
};
export default App;
