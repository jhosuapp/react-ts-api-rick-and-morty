import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

// Custom hook for use global context
const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext debe ser utilizado dentro de un GlobalProvider");
    }
    return context;
}

export { useGlobalContext }
