import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rout from "./routes/rout";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Data from "./routes/data";
import Settings from "./routes/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data",
        element: <Data />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>
);
