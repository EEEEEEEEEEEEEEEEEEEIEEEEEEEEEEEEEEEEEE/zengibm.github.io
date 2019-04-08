import LazyLoad from "./LazyLoad";

const routes = [
  {
    path: "/pc",
    component: LazyLoad(() => import("../pc/index"))
  },
  {
    path: "/web",
    component: LazyLoad(() => import("../web/index/index")),
    routes: [
      {
        path: "/web/home",
        component: LazyLoad(() => import("../web/index/home")),
        auth: true
      }
    ]
  }
];

export { routes as default };
