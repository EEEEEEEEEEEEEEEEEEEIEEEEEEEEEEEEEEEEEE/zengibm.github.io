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
      },
      {
        path: "/web/article_detail/:id",
        component: LazyLoad(() => import("../web/index/article_detail"))
      }
    ]
  }
];

export { routes as default };
