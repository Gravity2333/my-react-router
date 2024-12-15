import { pathToRegexp } from "path-to-regexp"
import { Match, RouterContext } from "../Router";
import { Location } from "@/libs/history";
import React from "react";
import matchPath from "../utils/matchPath";

export default function Route(props: {
    path?: string,
    render?: (...props: any) => React.ReactNode,
    component?: React.ComponentType,
    exact?: boolean,
    sensitive?: boolean;
    children?: React.ReactNode
}) {
    
    return <RouterContext.Consumer>
        {context => {
            /** 获得传递下来的location */
            const location = context.location
            /** 计算match
             *   如果没有传递path参数，直接算是匹配上上层match
             *   传递了，直接调用matchPath计算是否匹配
             */
            const match = props.path ? matchPath(location.pathname, props) : context.match
            /** 匹配上了渲染，并且重新下发新的match 嵌套router*/
            return <RouterContext.Provider value={{
                ...context,
                match: match,
            }}>
                {/* 渲染内容 */}
                {match ? <RouteCore location={location} match={match} render={props.render} component={props.component} children={props.children} /> : null}
            </RouterContext.Provider>
        }}
    </RouterContext.Consumer>
}

function RouteCore({
    location,
    match,
    render,
    component,
    children
}: {
    location: Location,
    match: Match,
    render?: Function,
    component?: React.ComponentType,
    children?: any
}) {
    const props = {
        location,
        match,
    }
    /** 原版的渲染使用三元运算 不直观，这里改成if */
    /** 如果route有children 直接渲染 */
    if (children) {
        /** <Route>()=>JSX</Route>的情况 */
        if (typeof children === 'function') {
            return children(props)
        } else {
            /** <Route>JSX</Route>的情况
             * 此时路由信息需要通过withRouter获得
             */
            return children
        }
    }

    if (component) {
        /** 由于是JSX.ELEMENT 需要借助compoent */
        return React.createElement(component, props as any)
    }

    if (render) {
        return render(props)
    }
}