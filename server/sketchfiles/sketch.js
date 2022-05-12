import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}
export default App;


( <>
      <div className="loggedin">
        <SiteSideBar />
        <Card
          className="dashboard-card"
          style={{ maxWidth: "60%", marginTop: "4rem", marginLeft: "10rem" }}
          bgcolor="dark"
            // status={status}
          body={
            <>
              <div className="">
                <LoginUser user={user} />
                <br />
                <Row className="text-center">
                  <Col>
                    <Link
                      to="/deposit"
                      className="btn btn-primary text-white Link"
                    >
                      Make a deposit
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to="/withdraw"
                      className="btn btn-primary text-white Link"
                    >
                      Make a withdraw
                    </Link>
                  </Col>

                  <div
                    style={{
                      backgroundColor: "lightgrey",
                      marginTop: "2rem",
                      padding: "2rem",
                    }}
                  >
                    <table className="table table-striped w-auto">
                      <Header />
                      <Table2 />
                    </table>
                  </div>
                </Row>
              </div>
            </>
            }
          />
                      {/* !------------- */}
                      </div>
</>)


()    


  //ctx.log = true;

    //setStatus("LogedIn");
   // ctx.sessionActivity.push({
     // activity: "Login",
    //  stamp: timeStamp,
   // });

  //############################################

  import { useState, useContext } from "react";
import Card from "../components/context";
import { UserContext } from "../components/context";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SiteSideBar from "../components/siteSideBar";
import "../styles/SignIn.css";
import Header from "../components/Header";
import Table2 from "../components/Table2";
import {signInWithGoogle} from "../firebase"
import {onAuthStateChanged, signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

export const LoginUser = ({ user }) => {
  return (
    <>
      <h3>
        Welcome <span className="text-danger">{user.user}</span>
      </h3>
    </>
  );
};
function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [user, setUser] = useState({});
  const timeStamp = new Date().toLocaleDateString();
  const ctx = useContext(UserContext);

 async function handleLogin(e) {

    const promise = auth.signInWithEmailAndPassword(
      email.value,
      pwd.value
    );
    promise.catch((e) => console.log(e.message));

    ctx.log = true;

    setStatus("LogedIn");
    ctx.sessionActivity.push({
      activity: "Login",
      stamp: timeStamp,
    });
  }


    
  
  function clearForm() {
    setEmail("");
    setPwd("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    <>
      {user?.email ? (
        <>
        <>
<SiteSideBar />
<Card
  className="dashboard-card"
  style={{ maxWidth: "60%", marginTop: "4rem", marginLeft: "10rem" }}
  bgcolor="dark"
  // status={status}
  body={
    <>
      <div className="">
        <LoginUser user={user} />
        <br />
        <Row className="text-center">
          <Col>
            <Link
              to="/deposit"
              className="btn btn-primary text-white Link"
            >
              Make a deposit
            </Link>
          </Col>
          <Col>
            <Link
              to="/withdraw"
              className="btn btn-primary text-white Link"
            >
              Make a withdraw
            </Link>
          </Col>

          <div
            style={{
              backgroundColor: "lightgrey",
              marginTop: "2rem",
              padding: "2rem",
            }}
          >
            <table className="table table-striped w-auto">
              <Header />
              <Table2 />
            </table>
          </div>
        </Row>
      </div>
    </>
  }
/>
{/* !------------- */}
</>
        </>
      ) : (
        <div style={{ background: "grey", height: "62vh" }}>
            <Card
              style={{
                maxWidth: "25rem",
                marginTop: "1rem",
                backgroundColor: "rgba(30,33,36)",
                width: "100%",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "1rem",
              }}
              className="loginCard bg-dark"
              status={status}
              body={
                <>
                  <h1
                    className="logocolor"
                    style={{
                      border: "solid 2px grey",
                      padding: ".4rem",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </h1>
                  <br />
                  <label htmlFor="email">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                  />
                  <br />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => {
                      setPwd(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                  />
                  <br />
                  <button
                    disabled={isDisabled ? true : false}
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>

                </>
              }
            />
          </div>
      )}
    </>
  );
}

export default Login;