import { type ReactElement } from "react";
import {
  createBrowserRouter,
  Navigate,
} from "react-router";
import { Main } from "../../pages/Main/Main";
import { Auth } from "../../pages/Auth/Auth";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { useAuth } from "../hooks/useAuth";

const AuthRoute = (): ReactElement => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Auth />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "auth",
        element: <AuthRoute />
      },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Main />
          }
        ]
      }
    ]
  }
]);