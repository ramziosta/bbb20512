import react , {useState, useEffect } from 'react';
import axios from "axios";


export default function Data() {

    const [accounts, setAccounts] = useState([{
        _id:"",
        user:"",
        accountNumber:"",
        accountType:"",
        email:"",
        pwd:"",
    }])

    useEffect(()=>{
        fetch('/alldata')
        .then(res =>{
            if(res.ok) {
                return res.json();
            }
        })
        .then(jsonRes => setAccounts(jsonRes))
    })
    console.log(accounts)
return (
    <>
        {
          accounts.map((account,index) =>
    <table key={index}  className="table table-hover table-fixed">
    <tbody>
    <tr>
      <th>User Name</th>
      <td key={accounts.user}>{account.user}</td>
    </tr>
    <tr>
      <th>Email</th>

      
      <td key={accounts.email}>{account.email}</td>
    </tr>
    <tr>
      <th>Password</th>
      <td key={accounts.pwd} type="password">{
        account.pwd}</td>
    </tr>
    <tr>
      <th>Date Created</th>
      <td key={accounts.created}>{account.accountNumber}</td>
    </tr>
    <tr>
      <th>Account Type</th>
      <td key={accounts._id}>{account.accountType}</td>
    </tr>
    </tbody>
  </table>)}

    </>
)


      }