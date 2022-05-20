
import { Link } from "react-router-dom";

const Directory = () => {
  return (
    <section style={{ backgroundColor: "grey", margin: "0 auto" }}>
      <h5>Bank Account Navigation Page</h5>
      <p>Permission based accessible links</p>
      <br />
      <h6>All User can access these links </h6>
      <Link to="/directory">Directory</Link>
      <Link to="/">HomePage</Link>
      <Link to="/login">Login</Link>
      <Link to="/createaccount">Create Account</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">Withdraw</Link>
      <br />
      <h6>Permission Based Links</h6>
      <Link to="/editor">Account Editor</Link>
      <Link to="/admin">Bank Admin</Link>
    </section>
  );
};

export default Directory;
