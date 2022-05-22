import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Card from "../context/context";
import axios from "../api/axios";
import "../styles/SignIn.css";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const { userData, setUserData } = useUserData(); 
   const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [balance, setBalance] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, balance]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json", },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ email, pwd, roles, accessToken });
      setEmail(email);
      navigate(from, { replace: true });
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  // const togglePersist = () => {
  //   setPersist((prev) => !prev);
  // };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <>
      <main>
        <div style={{ background: "grey", height: "65vh" }}>
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
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                    value={email}
                    required
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    onChange={(e) => {
                      setPwd(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                    value={pwd}
                    required
                  />
                  <br />
                  <button
                    disabled={isDisabled ? true : false}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Sign In
                  </button>
                  {/* <div className="persistCheck">
                    <input
                      type="checkbox"
                      id="persist"
                      onChange={togglePersist}
                      checked={persist}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                  </div> */}
                </form>
                <p>
                  Need an Account?
                  <br />
                  <span className="line">
                    <Link to="/createaccount" style={{ color: "black" }}>
                      <button className="btn btn-primary">Register</button>
                    </Link>
                  </span>
                </p>
              </>
            }
          />
        </div>
      </main>
    </>
  );
};

export default Login;
