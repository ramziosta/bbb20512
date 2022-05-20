import { Outlet } from "react-router-dom";
import NavBar from "./navbar.js";
import Footer from "./footer";

const Layout = () => {
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