import { pathToRegexp } from "path-to-regexp";
import { Match } from "../Router";

/**
 * 生成match对象
 * @param pathname 
 * @param props 
 * @returns 
 */
export default function matchPath(pathname: string, props: Record<string, any>): Match | null {
    const { path, exact = false, sensitive = false } = props

    if (path) {
        /** 生成正则 */
        const { regexp, keys } = pathToRegexp(path, {
            end: exact,
            sensitive,
        })

        const caputres = pathname.match(regexp)
        if (!caputres) {
            return null
        }

        const [url, ...paramValues] = caputres
        // 返回match
        return {
            path,
            url,
            isExact: exact,
            params: paramValues.reduce((memo, paramValue, i) => {
                return {
                    ...memo,
                    [keys[i].name]: paramValue
                }
            }, {})
        }
    }
    return null
} 