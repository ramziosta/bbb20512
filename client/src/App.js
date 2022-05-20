import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import AllData from "./frontend/alldata.js";
import CreateAccount from "./frontend/createaccount.js";
import DashBoard from "./frontend/DashBoard";
import Directory from "./components/Directory";
import Deposit from "./frontend/deposit.js";
import Editor from "./components/Editor";
import Home from "./frontend/home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Management from "./components/Management";
import Four04 from "./components/404";
//import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Unauthorized from "./components/Unauthorized";
import Withdraw from "./frontend/withdraw.js";
import ROLES from "./config/roles_list";
import "./styles/Home.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" exact element={<Login />} />
          <Route path="directory" element={<Directory />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/dashboard/" exact element={<DashBoard />} />
              <Route path="/deposit/" exact element={<Deposit />} />
              <Route path="/withdraw/" exact element={<Withdraw />} />
              {/* <Route path="/userdata/" exact element={<UserData />} />  */}
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
              <Route path="editor" element={<Editor />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="admin" element={<Admin />} />
              <Route path="/alldata/" exact element={<AllData />} />
            </Route>

            <Route
              element={
                <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
              }
            >
              <Route path="lounge" element={<Management />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<Four04/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
