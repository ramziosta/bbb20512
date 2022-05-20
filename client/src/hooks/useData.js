import { useContext } from "react";
import DataContext from "../context/DataProvider";

const useData = () => {

    const {amount, transactionType, transactionDate } =useContext(DataContext)
    return useContext(DataContext);
}

export default useData;