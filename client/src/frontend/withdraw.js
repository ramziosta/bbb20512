import { useRef, useEffect, useState , useContext} from "react";
import Card from "../context/context";
import SiteSideBar from "../components/siteSideBar";
import axios from "../api/axios";
import DataContext from "../context/DataProvider";
import UserContext from "../context/UserProvider";

const ACCTRANSACTION_URL = "/transactions";
const timeStamp = new Date().toLocaleDateString();

function Withdraw() {
  const {accountData, setAccountData} = useContext(DataContext);
  const {userData, setUserData} = useContext(UserContext);

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("peter@gmail.com");
  const [balance, setBalance] = useState(5555555);
  const [transactionType, setTransactionType] = useState("Withdraw");
  const [transactionDate, setTransactionDate] = useState(timeStamp);
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
    if (Number(field) > balance) {
      alert("Insufficient funds, we cannot process your transaction.");
      clearForm();
      return false;
    }
    return true;
  }

  const prevBalance = useRef("");

  useEffect(() => {
    prevBalance.current = balance;
  }, [balance]);

  async function handleWithdraw(e) {
    console.log("💵 " + amount);
    if (!validate(amount, "amount")) return;

    setBalance(Number(balance) + Number(amount));
    setShow(false);

    try {
      const response = await axios.post(
        ACCTRANSACTION_URL,
        JSON.stringify({
          transactions: [
            {
              email: email,
              amount: amount,
              balance: balance,
              transactionDate: transactionDate,
              transactionType: transactionType,
            },
          ],
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
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
              header="Make a Withdraw"
              status={status}
              body={
                <>
                  <h3>Balance: ${balance}</h3>
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
                  {/* <label htmlFor="confirm_pwd">Account Type: ▶️</label>
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
                      </select>*/}
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
                  <h5>Withdraw Amount: ${amount}</h5>
                  <div>Current Balance: ${balance} </div>
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
  );
}

export default Withdraw;
