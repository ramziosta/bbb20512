import { useState, useContext } from "react";
import Card from "../components/context";
import { UserContext } from "../components/context";
import LoginLogoutButton from "../components/LoginLogoutButton";
import SiteSideBar from "../components/siteSideBar";
import { NavLink, Link } from "react-router-dom";

function Withdraw() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [accountType, setAccountType] = useState("");
  const [transactionType, setTransactioinType] = useState("withdraw");
  const timeStamp = new Date().toLocaleDateString();
  const ctx = useContext(UserContext);

  function validate(field) {
    if (!Number(field)) {
      alert("Input not valid. Please enter a number");
      clearForm();
      return false;
    }
    if (Number(field) <= 0) {
      alert("Please enter a positive value");
      clearForm();
      return false;
    }
    if (Number(field) > ctx.users[0].balance) {
      alert("Insufficient funds, we cannot process your transaction.");
      clearForm();
      return false;
    }
    return true;
  }

  async function handleWithdraw(e) {
    console.log("💸 " + amount);
    if (!validate(amount, "amount")) return;

    setBalance(Number(balance) - Number(amount));
    ctx.users[0].balance -= Number(amount);

    ctx.transactions.push({
      transactionType: "Withdrawal",
      amount,
      balance,
      transactionDate: timeStamp,
      stamp: timeStamp,
    });

    setStatus("withdraw");
    setShow(false);

    const response = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        balance,
        transactionType,
        transactionDate: timeStamp,
        accountType,
      }),
    });
    const transactionData = await response.json();
    console.log(transactionData);
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
    //> shows the log in button and create an account if user not found/ not created/ not logged in
    <>
      {ctx.users[0].user == "" ? (
        <>
          <Link to="/login" className="fa fa-user"></Link>
          <div style={{ background: "grey", height: "50vh" }}>
            <div className="text-center fs-3" style={{ padding: "3rem" }}>
              Please <LoginLogoutButton />
              <br />
              or{" "}
              <NavLink
                to="/createaccount/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create An Account.
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        //> otherwise if logged in show the logout button and deposit page
        //< first withdraw card is shown #####
        <>
          {/* //> tennary operator to show and hide the card depending on the handleWithdraw */}
          {show ? (
            <>
              <SiteSideBar />
              <div style={{ background: "grey", height: "50vh" }}>
                <Card
                  style={{ maxWidth: "25rem", marginTop: "1rem" }}
                  bgcolor="dark"
                  header="Make a Withdraw"
                  status={status}
                  body={
                    <>
                      <h3>Balance: ${ctx.users[0].balance}</h3>
                      <br />
                      Withdraw Amount
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
                        disabled={isDisabled ? true : false}
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleWithdraw}
                      >
                        Withdraw
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
                  style={{
                    maxWidth: "25rem",
                    marginTop: "1rem",
                    marginBottom: "40rem",
                  }}
                  bgcolor="dark"
                  header="Withdraw"
                  // status={status}
                  body={
                    <>
                      <h5 className="fs-2 text-success">Success</h5>
                      <br />
                      <h5>Withdraw Amount: ${amount} </h5>
                      <div>Current Balance ${ctx.users[0].balance} </div>
                      <br />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={clearForm}
                      >
                        New Withdraw Transaction
                      </button>
                    </>
                  }
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Withdraw;
