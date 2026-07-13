import { useNavigate } from "react-router-dom";
import "../App.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmitform = () => {
    navigate("/ProfileAccount");
  };
  return (
    <div className="container">
      <div className="login-card">
        <h3>Create your Popx Account</h3>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Marry Doe" required />
        </div>
        <div className="input-group">
          <label>Phone number</label>
          <input type="number" placeholder="Marry Doe" required />
        </div>
        <div className="input-group">
          <label>Email Address</label>
          <input type="text" placeholder="Marry Doe" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="text" placeholder="Marry Doe" required />
        </div>
        <div className="input-group">
          <label>Company Name</label>
          <input type="text" placeholder="Marry Doe" required />
        </div>
        <div className="RadioButton">
          <p>Are you an Agency?</p>
          <label>
            <input type="radio" name="agency" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="agency" value="no" />
            No
          </label>
        </div>
        <button className="btn-primary" onClick={handleSubmitform}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
