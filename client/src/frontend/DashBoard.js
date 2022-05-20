import SiteSideBar from "../components/siteSideBar";
import { useState, useEffect, useContext } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import DataContext from "../context/DataProvider";
import useUserData from "../hooks/useUserData";
import Card from "../context/context";
import "../styles/alldata.css";

const TRANSACTION_URL = "/transactions";


function DashBoard() {
  const { auth, setAuth, persist, setPersist } = useAuth();
  const { accountData, setAccountData } = useContext(DataContext);
  const {email, setEmail, userData, setUserData } = useUserData();

  const [transactions, setTransactions] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getTransactions = async () => {
      try {
        const response = await axiosPrivate.get(TRANSACTION_URL, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setTransactions(response.data);
      } catch (err) {
        console.error(err);
        // navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getTransactions();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getLoggedInUser = async () => {
      try {
        const response = await axiosPrivate.get( `/users/${auth.email}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUserData(response.data);
        console.log(response.data)
      } catch (err) {
        console.error(err);
        // navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getLoggedInUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  let accountActivity = transactions.map((transaction, index) => {
    return (
      <tr key={index}>
        <td className="fs-6 text-wrap">{transaction.amount}</td>
        <td className="fs-6 text-wrap">{transaction.transactionType}</td>
        <td className="fs-6 text-wrap">{transaction.transactionDate}</td>
      </tr>
    );
  });
console.log("🤡 "+ userData);
  return (
    <>
      <SiteSideBar />

      <div className="content">
        <h4
          className="header"
          style={{
            fontSize: "1.3rem",
            color: "white",
            padding: ".4rem",
            border: "solid black 1px",
            backgroundColor: "#0079d5",
            width: "100%",
          }}
        >
          Welcome: {userData.user}
        </h4>
        <h4
          className="header"
          style={{
            fontSize: "1.3rem",
            color: "white",
            padding: ".4rem",
            border: "solid black 1px",
            backgroundColor: "grey",
            width: "100%",
          }}
        >
          Account No. ending in: xxx-xxx-xxx-{userData.accountNumber}
        </h4>
        <h4
          className="header"
          style={{
            fontSize: "1.3rem",
            color: "white",
            padding: ".4rem",
            border: "solid black 1px",
            backgroundColor: "#0079d5",
            width: "100%",
          }}
        >
          Current Balance: ${userData.balance}
        </h4>
        <Card
          className=""
          body={
            <table className="table">
              <thead>
                <tr>
                  <th className="fs-6" scope="col">
                    Amount
                  </th>
                  <th className="fs-6" scope="col">
                    Transaction Type
                  </th>
                  <th className="fs-6" scope="col">
                    Transaction Date
                  </th>
                </tr>
              </thead>
              <tbody>{accountActivity}</tbody>
            </table>
          }
        />
      </div>
    </>
  );
}

export default DashBoard;
