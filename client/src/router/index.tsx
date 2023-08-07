import * as React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
export interface IRoterProps {}
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
export default router;
