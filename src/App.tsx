import HashRouter from "../src/libs/router/HashRouter";
import LoadingPage from "./components/LoadingPage";
import useRoutes from "./libs/router/hooks/useRoutes";
import routes from "../config/router.js";
import BrowserRouter from "./libs/router/BrowserRouter";
import Embed from "./pages/Embed";

function App() {
  return (
    <BrowserRouter loadingPage={<LoadingPage />}>{useRoutes(routes)}</BrowserRouter>
  );

  // return (
  //   <HashRouter loadingPage={<LoadingPage />}>
  //     {useRoutes({
  //       path: "/",
  //       component: GlobalLayout,
  //       children: [
  //         {
  //           path: "/",
  //           redirect: "/home",
  //         },
  //         {
  //           path: "/home",
  //           component: Home,
  //         },
  //         {
  //           path: "/about",
  //           component: About,
  //         },
  //         {
  //           path: "/user",
  //           component: User,
  //           children: [
  //             {
  //               path: "/user",
  //               redirect: "/user/list",
  //             },
  //             {
  //               path: "/user/list",
  //               component: UserList,
  //             },
  //             {
  //               path: "/user/list",
  //               component: UserList,
  //             },
  //             {
  //               component: NotFoundPage,
  //             },
  //           ],
  //         },
  //         {
  //           component: NotFoundPage,
  //         },
  //       ],
  //     })}
  //   </HashRouter>
  // );

  // return (
  //   <>
  //     <HashRouter loadingPage={<LoadingPage />}>
  //       <Route path="/" component={GlobalLayout}>
  //         <Switch>
  //           <Redirect from="/" to="/home" />
  //           <Route
  //             path="/home"
  //             component={React.lazy(() => import("./pages/Home"))}
  //           />
  //           <Route
  //             path="/about"
  //             component={React.lazy(() => import("./pages/About"))}
  //           />
  //           <Route
  //             path="/user"
  //             component={React.lazy(() => import("./pages/User"))}
  //           >
  //             <Switch>
  //               <Redirect from="/user" to="/user/list" />
  //               <Route
  //                 path="/user/list"
  //                 component={React.lazy(() => import("./pages/User"))}
  //               />
  //               <Route
  //                 path="/user/:id/info"
  //                 component={React.lazy(() => import("./pages/UserList"))}
  //               />
  //               <Route
  //                 path="/user/:id/info"
  //                 component={React.lazy(() => import("./pages/UserList"))}
  //               />
  //               <Route component={NotFoundPage} />
  //             </Switch>
  //           </Route>
  //           <Route path="/about" component={About} />
  //           <Route component={NotFoundPage} />
  //         </Switch>
  //       </Route>
  //     </HashRouter>
  //   </>
  // );
}

export default App;
