import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import './index.css'

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <h2>page not found</h2>,
      children: [
        {
          index: true,
          element: <h1>salom</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
};
export default App;
