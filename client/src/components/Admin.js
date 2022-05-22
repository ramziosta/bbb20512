import  {useState, useEffect, useContext } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import DataContext from "../context/DataProvider";
import UserContext from "../context/UserProvider";
import Card from "../context/context";
import "../styles/alldata.css";
import SiteSideBar from "../components/siteSideBar";

const DATA_URL = "/users";

export default function Admin() {

  const axiosPrivate = useAxiosPrivate();
  const {accountData, setAccountData} = useContext(DataContext);
    const {userData, setUserData} = useContext(UserContext);

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
    
    useEffect(() => {
      let isMounted = true;
      const controller = new AbortController();
  
      const getAllUsers = async () => {
        try {
          const response = await axiosPrivate.get(DATA_URL, {
            signal: controller.signal,
          });
        
          isMounted && setUsers(response.data);
        } catch (err) {
          console.error(err);
          navigate("/login", { state: { from: location }, replace: true });
        }
      };
  
      getAllUsers();
  
      return () => {
        isMounted = false;
        controller.abort();
      };
    }, []);
  
    
    let usersList = users.map((user, index) => {
      return (
        <tr key={index}>
          <td className="fs-6 text-wrap">{user.user}</td>
          <td className="fs-6 text-wrap" >{user.email}</td>
          <td className="fs-6 text-wrap">{user.accountType}</td>
          <td className="fs-6 text-wrap">{user.accountNumber}</td>
        </tr>
      );
    });
  
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
        BadBank Clients
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
        Current Registered Users:
      </h4>
        <Card
          className=""
    
          body={
            <table className="table">
              <thead>
                <tr>
                  <th className="fs-6" scope="col">
                   User Name
                  </th>
                  <th className="fs-6" scope="col">
                    Email
                  </th>
                  <th className="fs-6" scope="col">
                    Account Type
                  </th>
                  <th className="fs-6" scope="col">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>{usersList}</tbody>
            </table>
          }
        />
        </div>
      </>
    );
  };