import { useContext } from "react";
import { GlobalStateContext } from "@context";

// Create a custom hook to use the state and dispatch actions
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error(
            "useGlobalState must be used within a GlobalStateProvider"
        );
    }
    return context;
};
