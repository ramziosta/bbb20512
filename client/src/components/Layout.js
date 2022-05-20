import { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar.js";
import Footer from "./footer";
import DataContext from "../context/DataProvider";
import UserContext from "../context/UserProvider";
const Layout = () => {
  const {accountData, setAccountData} = useContext(DataContext);
  const {userData, setUserData} = useContext(UserContext);
  return (
    <main className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;

//this is used to set up routs and permissions inside certain layouts 