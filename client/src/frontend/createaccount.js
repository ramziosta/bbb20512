import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../firebase";
import Card from "../context/context";
import {
  USER_REGEX,
  PWD_REGEX,
  EMAIL_REGEX,
} from "../helpers/FormFieldValidation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/SignIn.css";
import axios from "../api/axios";
const REGISTER_URL = "/register";
const timeStamp = new Date().toLocaleDateString();

function CreateAccount() {
  const userRef = useRef();
  const errRef = useRef();

  // sets and validates the username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // sets and validates the email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // sets and validates the paassword
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // sets and validates the confirm password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  //creates an account number last 4 digits Only
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  // sets the error messages or success messages ==> need to be used/assigned a function
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //> sets warnings and errors
  const [warn, setWarn] = useState("");
  // shows and hids part of the screen
  const [show, setShow] = useState(true);
  const [created, setCreated] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
    console.log("👽" + user);
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    console.log("📨" + email);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log("🤔" + result);
    console.log("🤫 " + pwd);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd, accountType]);

  function emptyFieldValidation(field, label, option) {
    if (!field || option) {
      setErrMsg(alert(label + " cant be blank"));
      setTimeout(() => setWarn(""), 3000);
      return false;
    }
    return true;
  }

  const timeStamp = new Date().toLocaleDateString();

  async function AccountRegistration(e) {
    e.preventDefault();

    if (!emptyFieldValidation(user, "name")) return;
    if (!emptyFieldValidation(email, "email")) return;
    if (!emptyFieldValidation(pwd, "password")) return;
    if (!accountType)
      if (
        !validName ||
        !validEmail ||
        !validPwd ||
        !validMatch ||
        !accountType
      ) {
        return;
      }

  
    setCreated(timeStamp);
    //creates a random last 4 digit account number
    let accountNumber = Math.floor(Math.random() * 10000);
    setAccountNumber(accountNumber);
    console.log("🏦 " + accountNumber);
    // function transform(account){
    //   accountNumber = account.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
    //   return accountNumber;
    // }

    //################# Firebase################
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pwd);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    //################ server ######################
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          user,
          email,
          pwd,
          matchPwd,
          accountType,
          accountNumber,
          created: new Date().toLocaleDateString(),
          balance: 0,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      console.log("🏦 " + accountNumber);
      setSuccess(true);
      setShow(false);
    } catch (err) {
      if (!err?.response) {
        setErrMsg(alert("No Server Response"));
      } else if (err.response?.status === 409) {
        setErrMsg(alert("Username Taken"));
      } else {
        setErrMsg(alert("Registration Failed"));
      }
      errRef.current.focus();
      clearForm();
      setShow(false);
    }
  }
  const handleModeSelect = (event) => {
    let userSelection = event.target.value;
    console.log(userSelection);
    setAccountType(userSelection);
  };

  function clearForm() {
    setUser("");
    setEmail("");
    setPwd("");
    setMatchPwd("");
  }

  return (
    <>
      {show ? (
        <>
          <div className="creataccountform">
            <div className="bg-img">
              {success ? (
                <section className="bg-dark">
                  <h1>Success!</h1>
                  <p>
                    <a href="#SignIn">Sign In</a>
                  </p>
                </section>
              ) : (
                <main>
                  <div style={{ background: "grey", height: "89vh" }}>
                    <Card
                      body={
                        <section className="registrationForm bg-dark">
                          <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive"
                          >
                            {errMsg}
                          </p>
                          <h4 className="formId">
                            Register A New BadBank Account
                          </h4>
                          <form className="form" onSubmit={AccountRegistration}>
                            <label htmlFor="username">
                              Username:
                              <span className={validName ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                              <span
                                className={
                                  validName || !user ? "hide" : "invalid"
                                }
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </span>
                            </label>
                            <input
                              type="text"
                              id="username"
                              value={user}
                              ref={userRef}
                              autoComplete="off"
                              onChange={(e) => setUser(e.target.value)}
                              required
                              aria-invalid={validName ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setUserFocus(true)}
                              onBlur={() => setUserFocus(false)}
                            />
                            <p
                              id="uidnote"
                              className={
                                userFocus && user && !validName
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              8 to 24 characters.
                              <br />
                              Must begin with a letter.
                              <br />
                              Letters, numbers, underscores, hyphens allowed.
                            </p>
                            {/* //<############################## */}
                            <label htmlFor="email">
                              Email:
                              <span className={validEmail ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                              <span
                                className={
                                  validEmail || !email ? "hide" : "invalid"
                                }
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </span>
                            </label>
                            <input
                              type="text"
                              id="email"
                              value={email}
                              ref={userRef}
                              autoComplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              aria-invalid={validEmail ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                            />
                            <p
                              id="uidnote"
                              className={
                                emailFocus && email && !validEmail
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              Invalid email format.
                              <br />
                              Please enter a valid email address.
                              <br />
                              ex. example@email.com
                              <br />
                            </p>
                            {/* //<############################## */}
                            <label htmlFor="password">
                              Password:
                              <span className={validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                              <span
                                className={
                                  validPwd || !pwd ? "hide" : "invalid"
                                }
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </span>
                            </label>
                            <input
                              type="password"
                              id="password"
                              value={pwd}
                              onChange={(e) => setPwd(e.target.value)}
                              required
                              aria-invalid={validPwd ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setPwdFocus(true)}
                              onBlur={() => setPwdFocus(false)}
                            />
                            <p
                              id="pwdnote"
                              className={
                                pwdFocus && !validPwd
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              8 to 24 characters.
                              <br />
                              Must include uppercase and lowercase letters, a
                              number and a special character.
                              <br />
                              Allowed special characters:{" "}
                              <span aria-label="exclamation mark">!</span>{" "}
                              <span aria-label="at symbol">@</span>{" "}
                              <span aria-label="hashtag">#</span>{" "}
                              <span aria-label="dollar sign">$</span>{" "}
                              <span aria-label="percent">%</span>
                            </p>
                            {/* //<############################## */}
                            <label htmlFor="confirm_pwd">
                              Confirm Password:
                              <span
                                className={
                                  validMatch && matchPwd ? "valid" : "hide"
                                }
                              >
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                              <span
                                className={
                                  validMatch || !matchPwd ? "hide" : "invalid"
                                }
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </span>
                            </label>
                            <input
                              type="password"
                              id="confirm_pwd"
                              value={matchPwd}
                              onChange={(e) => setMatchPwd(e.target.value)}
                              required
                              aria-invalid={validMatch ? "false" : "true"}
                              aria-describedby="confirmnote"
                              onFocus={() => setMatchFocus(true)}
                              onBlur={() => setMatchFocus(false)}
                            />
                            <p
                              id="confirmnote"
                              className={
                                matchFocus && !validMatch
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              Must match the first password input field.
                            </p>

                            {/* //<############### account type ############### */}
                            <label htmlFor="confirm_pwd">Account Type:</label>
                            <select
                              onChange={(event) => handleModeSelect(event)}
                              name="mode"
                              id="mode-select"
                            >
                              <option id="no-selection" value="">
                                Choose Account Type
                              </option>
                              <option id="checking" value="Checking">
                                Checking
                              </option>
                              <option id="savings" value="Savings">
                                Savings
                              </option>
                            </select>

                            <button
                              className="signup"
                              disabled={
                                !validName ||
                                !validEmail ||
                                !validPwd ||
                                !validMatch
                                  ? true
                                  : false
                              }
                            >
                              Sign Up
                            </button>
                          </form>
                          <p style={{ color: "white" }}>
                            Already Registered?
                            <br />
                            <Link to="/login" className="formLogin">
                              Login To Your Account
                            </Link>
                          </p>
                        </section>
                      }
                    />
                  </div>
                </main>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* //<############################## */}
          <div className="fs-1 mt-4 text-center">
            <h4>
              Your account has been created successfully.
              <br />
              Please Login to access your account.
            </h4>
          </div>
          <div style={{ background: "grey", height: "50vh" }}>
            <Card
              style={{
                maxWidth: "25rem",
                marginTop: "3rem",
                backgroundColor: "rgb( 30, 33, 36 )",
                width: "100%",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "1rem",
              }}
              header="Create Account"
              // status={status}
              body={
                <>
                  <h5 className="fs-2">Success</h5>
                  <Link
                    to="/login"
                    className="btn btn-primary fs-4 Link"
                    style={{ borderRadius: "0px", marginTop: "1rem" }}
                  >
                    LogIn
                  </Link>
                  <br />
                  <h5 style={{ marginTop: "1rem" }}>Open New Account</h5>
                  <Link
                    to="/logout"
                    className="btn btn-primary fs-2 Link "
                    style={{ borderRadius: "0px", marginTop: "1rem" }}
                  >
                    Create an Account
                  </Link>
                </>
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default CreateAccount;
