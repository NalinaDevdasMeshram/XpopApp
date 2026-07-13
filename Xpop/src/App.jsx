import { Routes, Route } from "react-router-dom";
import Landingpage from "./component/Landingpage.jsx";
import Login from "./component/Login.jsx";
import LoginForm from "./component/LoginForm.jsx";
import ProfileAccount from "./component/profileAccount.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/ProfileAccount" element={<ProfileAccount />} />
    </Routes>
  );
};
export default App;
