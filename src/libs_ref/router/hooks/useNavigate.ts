import { useContext } from "react";
import { HistoryContext } from "../Router";

// 注意 useNavifate
export default function useHistory(){
    const history = useContext(HistoryContext)
    return history
}