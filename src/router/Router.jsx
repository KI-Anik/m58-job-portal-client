import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
      ]
    },
  ]);

export default Router;