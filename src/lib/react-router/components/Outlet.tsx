import useOutlet from "../hooks/useOutlet"

export default function Outlet(){
    /** 通过 useOutlet获取outlet并且渲染 */
    const outlet = useOutlet()
    return outlet
}