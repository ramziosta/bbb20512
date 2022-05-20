try {
  const response = await axios.post(
    TRANSACTION_URL,
    JSON.stringify({
      amount,
      balance,
      transactionDate,
      transactionType,
    }),
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  console.log(response?.data);
  console.log(response?.accessToken);
  console.log(JSON.stringify(response));
} catch(err){
    if (!err?.response) {
        setErrMsg(alert("No Server Response"));
      } else if (err.response?.status === 409) {
        setErrMsg(alert("transaction Conflict"));
      } else {
        setErrMsg(alert("TransactionFailed Failed"));
      }
      errRef.current.focus();
   }


   const response = await fetch("http://localhost:4000/transaction", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount,
      balance,
      transactionDate: timeStamp,
      transactionType,
    }),
  });
  const transactionData = await response.json();
  console.log(transactionData);
  
// const handleModeSelect = (event) => {
//   let userSelection = event.target.value;
//   console.log(userSelection);
//   setAccountType(userSelection);
// };