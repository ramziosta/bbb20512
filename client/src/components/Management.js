import { Link } from "react-router-dom"
import { useContext } from "react";
import DataContext from "../context/DataProvider";
import UserContext from "../context/UserProvider";

const Lounge = () => {
    const {accountData, setAccountData} = useContext(DataContext);
    const {userData, setUserData} = useContext(UserContext);
    return (
        <section>
            <h1>Management for</h1>
            <br />
            <p>management can access this section.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Lounge
