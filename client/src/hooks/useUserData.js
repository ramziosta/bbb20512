import { useContext } from "react";
import UserContext from "../context/UserProvider";

const useUserData = () => {

    // const { _id, user, setUser, email, setEmail, pwd, setPwd, balance, setBalance, accountType, setAccounttype, accountNumber, setAccountNumber, created, setCreated, roles, setRoles } = useContext(UserContext);

    const { userData, setUserData } = useContext(UserContext);

    return useContext(UserContext);
}

export default useUserData;