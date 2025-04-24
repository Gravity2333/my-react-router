import { useContext } from "react";
import { HistoryContext } from "../Router";

export default function useHistory(){
    const history = useContext(HistoryContext)
    return history
}