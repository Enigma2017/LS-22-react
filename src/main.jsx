import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ApiProvider } from "./ApiProvider";
import { Cart } from "./pages/Cart/Cart";
import { Favorites } from "./pages/Favorites/Favorites";
import { Notification } from "./pages/Notification/Notification";
import { ProductPage } from "./pages/Home/ProductPage/ProductPage";
import { NotFound } from "./shared/components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "*",
        element: <NotFound/>,
      },
    ],
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
