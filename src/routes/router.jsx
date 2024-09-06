import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LOGIN, ROOT } from "./routeConstants";
import Home from "@/pages/Home";
const Login = React.lazy(() => import("@pages/Login"));

const router = createBrowserRouter([
  { path: ROOT, element: <Home /> },
  {
    path: LOGIN,
    element: <Login />,
  },
  { path: "*", element: <div>Not found</div> },
]);
export default router;
