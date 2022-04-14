import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Usertable from "../components/tables/usertable";
// import BatchTable from "../components/tables/batchtable";
import DetailedParticipantTable from "../components/tables/DetailedParticipantTable"
import ParticipantDetailsView from "../components/Participants/ParticipantDetailsView"

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
const Usertable = lazy(() => import("../components/tables/usertable"));
const BatchTable = lazy(() => import("../components/tables/batchtable"));
const BatchDetails = lazy(() =>
  import("../components/BatchDetails/BatchDetails")
);
const UserDetails = lazy(() => import("../components/UserDetails/UserDetails"));

/*****Routes******/

const ThemeRoutes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <FullLayout /> : <Navigate to="/login" />,
    children: [
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/batch", exact: true, element: <BatchTable /> },
      { path: "/Usertable", exact: true, element: <Usertable /> },
      { path: "/editprofile", exact: true, element: <EditProfile /> },
      { path: "/participants", exact: true, element: <DetailedParticipantTable /> },
      { path: "/participantdetail", exact: true, element: <ParticipantDetailsView /> },
      { path: "/batch-details", exact: true, element: <BatchDetails /> },
      {
        path: "/user-details",
        exact: true,
        element: <UserDetails />,
      },
      { path: "/", element: <Navigate to="/starter" /> },
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
