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
        path: "/docs",
        component: "../src/pages/Docs",
      },
      {
        component: "../src/components/NotFoundPage",
      },
    ],
  }
