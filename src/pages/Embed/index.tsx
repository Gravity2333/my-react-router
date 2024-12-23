import LoadingPage from "@/components/LoadingPage";
import React from "react";
import useRouter from "@/hooks/useRouter";
import MiniBrowser from "@/components/MiniBrowser";

function Embed() {
  console.log("embed");
  const [outlet, history] = useRouter({
    loadingPage: <LoadingPage />,
    routes: {
      path: "/",
      component: React.lazy(() => import("@/layouts/UseRouterLayout")),
      children: [
        {
          path: "/",
          redirect: "/home",
        },
        {
          path: "/home",
          component: React.lazy(() => import("@/pages/Home")),
        },
        {
          path: "/about",
          component: React.lazy(() => import("@/pages/About")),
        },
        {
          path: "/user",
          children: [
            {
              path: "/user",
              redirect: "/user/list",
            },
            {
              path: "/user/list",
              component: React.lazy(() => import("@/pages/User")),
            },
            {
              path: "/user/:id/info",
              component: React.lazy(
                () => import("@/pages/User/components/Info")
              ),
            },
          ],
        },
        {
          component: React.lazy(() => import("@/components/NotFoundPage")),
        },
      ],
    },
  });

  return <MiniBrowser history={history}>{outlet}</MiniBrowser>;
}

export default Embed;
