import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Orders, ShowProduct } from "./pages";
import "./index.css";
import { Products } from "./components";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h2>page not found</h2>,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "/:id",
          element: <ShowProduct />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
};
export default App;
