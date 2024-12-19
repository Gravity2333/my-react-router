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
        path: "/embed",
        component: "../src/pages/Embed",
      },
      {
        component: "../src/components/NotFoundPage",
      },
    ],
  }
