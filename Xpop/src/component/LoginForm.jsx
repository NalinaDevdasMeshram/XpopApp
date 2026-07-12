import "../App.css";
const LoginForm = () => {
  return (
    <form>
      <h2>Create your Popx Account</h2>
      <label>Full Name</label>
      <input type="text" placeholder="Marry Doe" required />
      <label>Phone number</label>
      <input type="number" placeholder="Marry Doe" required />
      <label>Email Address</label>
      <input type="text" placeholder="Marry Doe" required />
      <label>Password</label>
      <input type="text" placeholder="Marry Doe" required />
      <label>Company Name</label>
      <input type="text" placeholder="Marry Doe" required />
      <p>Are you an Agency?</p>
      <label>
        <input type="radio" name="agency" value="yes" />
        Yes
      </label>

      <label>
        <input type="radio" name="agency" value="no" />
        No
      </label>
      <button>Create Account</button>
    </form>
  );
};

export default LoginForm;
