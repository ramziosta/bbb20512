export default function Header() {
  // const ctx = useContext(UserContext);

  return (
    <div>
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
        Account No. ending in: xxx-xxx-xxx-
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
        Current Balance:
      </h4>
      <table className="table table-hover table-fixed">
        <tr style={{ width: "100%" }}>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Transaction Date </th>
        </tr>
      </table>
    </div>
  );
}
