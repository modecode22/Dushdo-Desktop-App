import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Rout from "./routes/rout";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Data from "./routes/data";
import Settings from "./routes/settings";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import {setupDatabase} from './lib/db'
import Whow from "./routes/who";
import Why from "./routes/why";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout />,
    errorElement: <ErrorPage />,
    loader: setupDatabase,
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
      {
        path: "/who",
        element: <Whow />,
      },
      {
        path: "/why",
        element: <Why />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>
);
