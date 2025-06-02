import {
  createBrowserRouter,
} from "react-router";
import { Main } from "../../pages/Main/Main";
import { Auth } from "../../pages/Auth/Auth";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "auth", element: <Auth /> },
      {
        element: <ProtectedRoute />,
        children: [
          { element: <Main /> },

        ]
      }
    ]
  }
]);