import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../styles/siteSideBar.css";
import useLogout from "../hooks/useLogout";

export default function SiteSideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar bg-dark">
        <NavLink to="/dashboard" className="a" style={{ color: "white" }}>
          Dashboard
        </NavLink>
        <NavLink to="/deposit" className="a" style={{ color: "white" }}>
          Deposit
        </NavLink>
        <NavLink to="/withdraw" className="a" style={{ color: "white" }}>
          Withdraw
        </NavLink>
        <NavLink to="/alldata" className="a" style={{ color: "white" }}>
          Users
        </NavLink>
        <NavLink
          to="/login"
          onClick={signOut}
          className="a"
          style={{ color: "white" }}
        >
          Logout
        </NavLink>
      </div>
    </>
  );
}
