import "../App.css";
import { useNavigate } from "react-router-dom";
const Landingpage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/LoginForm");
  };
  const handleAlreadyAccount = () => {
    navigate("/Login");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="top-section"></div>
        <div className="content">
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
          <button className="btn-primary" onClick={handleCreateAccount}>
            Create Account
          </button>
          <button className="btn-secondary" onClick={handleAlreadyAccount}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Landingpage;
