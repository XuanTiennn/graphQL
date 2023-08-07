import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export interface IProtectedRouteProps {}

export function ProtectedRoute(props: IProtectedRouteProps) {
  const navigate = useNavigate();
  if (!localStorage.getItem("accessToken")) {
    navigate("/login");
    return;
  }
  return <Outlet />;
}
