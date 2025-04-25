import { Pathname } from "lib/history";
import { Match, RouteProps } from "../typings";
import { pathToRegexp } from "path-to-regexp";


/**
 * 用来匹配路径
 * @param pathname 路径
 * @param props route属性
 */
export function matchPath(pathname: Pathname, props: RouteProps): Match | null {
    /** 拿到属性信息 */
    const { path, exact = false, sensitive = false } = props;
   
    /** 获取当前路径对应的正则表达式 和 捕获对应的keys */
    const { regexp, keys } = pathToRegexp(path!, {
      end: exact,
      sensitive,
    });
   
    if (!regexp) return null;
    
    const captures = regexp.exec(pathname);
  
    /** 没有匹配到 */
    if (!captures) return null;
  
    const [url, ...params] = captures;
  
    return {
      url,
      path: path!,
      isExact: exact,
      params: keys.reduce((memo, { name }, index) => {
        return {
          ...memo,
          [name]: params[index],
        };
      }, {}),
    };
  }
  