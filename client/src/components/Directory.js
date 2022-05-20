import { Link } from "react-router-dom";

const Directory = () => {
  return (
    <section style={{ margin: "5rem auto", backgroundColor: "grey" }}>
      <main
        style={{
          height: "80vh",
          backgroundColor: "lightgrey",
          padding: "20px",
          border: "solid #ed2424 5px",
          borderRdius: "10px",
          marginTop: ".4em",
        }}
      >
        <h5 style={{ textAlign: "center", color: "#0079d5" }}>
          BadBank Navigation Page
        </h5>
        <br />
        <p>Permission based accessible links</p>
        <br />
        <h6>All Users links </h6>
        <ul>
          <li>
            <Link to="/directory">Directory</Link>
          </li>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/createaccount">Create Account</Link>
          </li>
        </ul>
        <br />
        <h6>Registered User links </h6>
        <p><small>please create an account to access these links</small></p>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/deposit">Deposit</Link>
          </li>
          <li>
            <Link to="/withdraw">Withdraw</Link>
          </li>
        </ul>
        <br />
        <h6>Management Links</h6>
        <ul>
          <li>
            <Link to="/editor">Account Editor</Link>
          </li>
          <li>
            <Link to="/admin">Bank Admin</Link>
          </li>
        </ul>
        <p><small>please contact <a href="mailto:ramziosta@gmail.com">ramziosta@gmail.com</a> to access these private links</small></p>
      </main>
    </section>
  );
};

export default Directory;
