import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Usertable from "../components/tables/usertable";
import Alerts from "../views/ui/Alerts"

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Login = lazy(() => import("../components/Login/Login"));
const ForgotPassword = lazy(() =>
  import("../components/forgotpass/ForgotPassword")
);
const Signup = lazy(() => import("../components/signup/Signup"));
const Batch = lazy(() => import("../views/Batch"));
const EditProfile = lazy(() => import("../components/EditProfile/EditProfile"));

/*****Routes******/

const ThemeRoutes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <FullLayout /> : <Navigate to="/login" />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/batch", exact: true, element: <Batch /> },
      { path: "/Usertable", exact: true, element: <Usertable /> },
      { path: "/editprofile", exact: true, element: <EditProfile /> },
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <Login /> : <Navigate to="/starter" />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", exact: true, element: <Signup /> },
      { path: "/forgot-password", exact: true, element: <ForgotPassword /> },
    ],
  },
];

export default ThemeRoutes;
