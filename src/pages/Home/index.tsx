import { useOutletContext } from "@/libs/router/hooks/useOutlet";
import React from "react";

function Home(){
    const context = useOutletContext()
    console.log(context)
    return <h1> Home</h1>
}

export default Home