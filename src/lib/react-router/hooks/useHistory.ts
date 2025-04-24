import { HistoryContext } from "../contexts";
import { useContext } from "react";

/** 获得History对象 */
export default function useHistory(){
    const histroy = useContext(HistoryContext)
    return histroy
}