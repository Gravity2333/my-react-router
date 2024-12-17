import Outlet from "@/libs/router/Outlet"

export default function User(props: any){
    console.log(props)
    return <><header>User Info</header>
    <Outlet/>
    </>
}