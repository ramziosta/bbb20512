import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import DataContext from "../context/DataProvider";
import UserContext from "../context/UserProvider";
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Card from "../context/context";
import useAuth from "../hooks/useAuth";
import SiteSideBar from "../components/siteSideBar";
import Header from "../components/Header";
import Table2 from "../components/Table2";
import "../styles/SignIn.css";

const provider = new GoogleAuthProvider();
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const { setData } = useContext(DataContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [warn, setWarn] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [show, setShow] = useState(true);

  function validate(field, label) {
    if (!field) {
      setWarn(alert(label.toUpperCase() + " IS A REQUIRED FIELD"));
      setTimeout(() => setWarn(""), 3000);
      return false;
    }
    return true;
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  // firebase log in

  const auth = getAuth();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuth({ email, pwd });
        setUser(user);
        navigate(from, { replace: true });
      })
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function handleLogin(e) {
    e.preventDefault();
    if (!validate(email, "email")) return;
    if (!validate(pwd, "pwd")) return;

    // firebase log in
    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setAuth({ email, pwd });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // auth route from mongo db setup JWT tokens and refresh cookies
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      //console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const data = response?.data;

      setAuth({ user, email, pwd, roles, accessToken });
      setData({ balance: data.balance, transactions: data.transactions });
      setUser({
        user,
        email,
        roles,
        accountNumber: data.accountNumber,
        accountType: data.accountType,
        created: data.created,
      });

      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg(alert("No Server Response"));
      } else if (err.response?.status === 400) {
        setErrMsg(
          alert(
            "Please check! Email or Password are missing or entered incorrectly"
          )
        );
      } else if (err.response?.status === 401) {
        setErrMsg(alert("User Email Unauthorized"));
      } else {
        setErrMsg(alert("Login Failed"));
      }
      errRef.current.focus();
      setEmail("");
      setPwd("");
    }
  }
  return (
    <>
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

              {/* //!############ Email ############## */}
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref={userRef}
                autoComplete="off"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  setIsdisabled(false);
                  if (!e.currentTarget.value) setIsdisabled(true);
                }}
              />
              <br />
              {/* //!############ Password ############## */}
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
              <button
                class="login-with-google-btn"
                style={{ marginLeft: "20px" }}
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </button>
              <br />
              <button type="submit" className="btn btn-primary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/CreateAccount"
                >
                  Create an Account
                </Link>{" "}
              </button>

              <br />
            </>
          }
        />
      </div>
    </>
  );
};

export default Login;

{
  /*


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
          {/* !------------- */
}
