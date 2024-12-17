export default {
    path: "/",
    component: "@/layouts/GlobalLayout",
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        component: "@/pages/Home",
      },
      {
        path: "/about",
        component: "@/pages/About",
      },
      {
        path: "/user",
        component: "@/pages/User",
        children: [
          {
            path: "/user",
            redirect: "/user/list",
          },
          {
            path: "/user/list",
            component: "@/pages/UserList",
          },
          {
            path: "/user/list",
            component: "@/pages/UserList",
          },
          {
            component: "@/component/NotFoundPage",
          },
        ],
      },
      {
        component: "@/component/NotFoundPage",
      },
    ],
  }
