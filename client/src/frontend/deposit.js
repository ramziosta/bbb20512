import { useRef, useEffect, useState, useContext } from "react";
import Card from "../context/context";
import SiteSideBar from "../components/siteSideBar";
import useAuth from '../hooks/useAuth'
import DataContext from "../context/DataProvider";
import useUserData from "../hooks/useUserData";
// const ACCTRANSACTION_URL = "/transactions";

const timeStamp = new Date().toLocaleDateString();

function Deposit() {
  
  const { userData, setUserdata } = DataContext;
  const { email, accessToken} = useAuth
  const [balance, setBalance] = useState("");
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("Deposit");
  const [transactionDate, setTransactionDate] = useState(timeStamp);
  const [accountType, setAccountType] = useState("")
  const [isDisabled, setIsdisabled] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  function validate(field) {
    if (!Number(field)) {
      alert("Input type not valid. Please enter a number");
      clearForm();
      return false;
    }
    if (Number(field) <= 0) {
      alert("Please enter a positive value");
      clearForm();
      return false;
    }
    return true;
  }

  const prevBalance = useRef("");

  useEffect(() => {
    prevBalance.current = balance;
  }, [balance]);

  async function handleDeposit(e) {
    console.log("💵 " + amount);
    if (!validate(amount, "amount")) return;

    setBalance(Number(balance) + Number(amount));
    setShow(false);

    try {

      const response = await fetch("http://localhost:4000/transactions", {
      method: "POST",
      headers: {
        authorization: 'Bearer ' + accessToken,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount,
        balance,
        transactionType,
        transactionDate,
        accountType,
      }),
    });
    const transactionData = await response.json();
    console.log(transactionData);
    
    } catch (err) {
      if (!err?.response) {
        setErrMsg(alert("No Server Response"));
      } else if (err.response?.status === 409) {
        setErrMsg(alert("transaction Conflict"));
      } else {
        setErrMsg(alert("TransactionFailed Failed"));
      }
    }
  }

  const handleModeSelect = (event) => {
    let userSelection = event.target.value;
    console.log(userSelection);
    setAccountType(userSelection);
  };
  
  function clearForm() {
    setAmount("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    <>
      {show ? (
        <>
          <SiteSideBar />
          <div style={{ background: "grey", height: "50vh" }}>
            <Card
              style={{ maxWidth: "25rem", marginTop: "1rem" }}
              bgcolor="dark"
              header="Make a deposit"
              status={status}
              body={
                <>
                  <h3>Balance: ${balance} </h3>
                  <br />
                  Deposit Amount:
                  <br />
                  <input
                    type="input"
                    className="form-control"
                    id="amount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                  />
                  <br />
                  <label htmlFor="confirm_pwd">Account Type: ▶️</label>
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
                    disabled={isDisabled ? true : false}
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleDeposit}
                  >
                    Deposit
                  </button>
                </>
              }
            />
          </div>
        </>
      ) : (
        <>
          <SiteSideBar />
          <div style={{ background: "grey", height: "50vh" }}>
            <Card
              style={{ maxWidth: "25rem", marginTop: "1rem" }}
              bgcolor="dark"
              header="Deposit"
              // status={status}
              body={
                <>
                  <h5 className="fs-2 text-success">Success</h5>
                  <br />
                  <h5>Deposit Amount: ${amount} </h5>
                  <hr />
                  <div>Current balance: ${balance} </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={clearForm}
                  >
                    New Deposit Transaction
                  </button>
                </>
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default Deposit;
