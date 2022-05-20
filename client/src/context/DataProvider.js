import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [accountData, setAccountData] = useState({});

    return (
        <DataContext.Provider value={{ accountData, setAccountData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;