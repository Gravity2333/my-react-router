import { To } from "@/libs/history";
import { useEffect, useRef } from "react";
import useHistory from "../hooks/useHistory";

export default function Redirect({
    to
}: {
    from?: string,
    to: To,
}) {
    const history = useHistory()
    const previouseVal = useRef<To>()
    useEffect(() => {
        if (typeof previouseVal.current !== typeof to) {
            previouseVal.current = to
            return history.push(to)
        }

        if (typeof previouseVal.current == 'string' && typeof to === 'string') {
            if (previouseVal.current !== to) {
                previouseVal.current = to
                return history.push(to)
            }
        }

        if (typeof previouseVal.current == 'object' && typeof to === 'object') {
            if (previouseVal.current?.pathname != to.pathname || previouseVal.current?.search !== to.search || previouseVal.current.hash !== to.hash) {
                previouseVal.current = to
                return history.push(to)
            }
        }
    }, [to])

    return <></>
}