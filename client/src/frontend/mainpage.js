import { useState, useContext } from "react";
import Card from "../components/context";
// import { UserContext } from "../components/context";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SiteSideBar from "../components/siteSideBar";
import "../styles/SignIn.css";
import Header from "../components/Header";
import Table2 from "../components/Table2";

export default function MainPage() {
  const [show, setShow] = useState(true);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [user, setUser] = useState({});


  async function handleLogin(e) {
    setShow(true);
  }

  function clearForm() {
    setEmail("");
    setPwd("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    <>
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
      </div>
    </>
  );
}
