import Card from "../components/context";
import react, { useState } from "react";
import "../styles/SignIn.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (event) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pwd);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pwd,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert("Please check your username and password");
    }
  };

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
                onClick={login}
              >
                Login
              </button>
            </>
          }
        />
      </div>
    </>
  );
}
