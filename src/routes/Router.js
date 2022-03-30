import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Usertable from "../components/tables/usertable";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login = lazy(() => import("../components/Login/Login"));

/*****Routes******/

const ThemeRoutes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <FullLayout /> : <Navigate to="/login" />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/Usertable", exact: true, element: <Usertable /> },
      // { path: "/alerts", exact: true, element: <Alerts /> },
      // { path: "/badges", exact: true, element: <Badges /> },
      // { path: "/buttons", exact: true, element: <Buttons /> },
      // { path: "/cards", exact: true, element: <Cards /> },
      // { path: "/grid", exact: true, element: <Grid /> },
      // { path: "/table", exact: true, element: <Tables /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/", element: <Navigate to="/starter" /> },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <Login /> : <Navigate to="/starter" />,
    children: [
      { path: "login", element: <Login /> },
      { path: "/", element: <Navigate to="/login" /> },
    ],
  },
];

export default ThemeRoutes;
