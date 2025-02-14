import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";

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
          path:'jobs/:id',
          element: <JobDetails></JobDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path: 'signIn',
          element: <SignIn></SignIn>
        },
      ]
    },
  ]);

export default Router;