export default {
    path: "/",
    component: "../src/layouts/GlobalLayout",
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        component: "../src/pages/Home",
      },
      {
        path: "/about",
        component: "../src/pages/About",
      },
      {
        path: "/user",
        component: "../src/pages/User",
        children: [
          {
            path: "/user",
            redirect: "/user/list",
          },
          {
            path: "/user/list",
            component: "../src/pages/UserList",
          },
          {
            path: "/user/list",
            component: "../src/pages/UserList",
          },
          {
            component: "../src/components/NotFoundPage",
          },
        ],
      },
      {
        component: "../src/components/NotFoundPage",
      },
    ],
  }
