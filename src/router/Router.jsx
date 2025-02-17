import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";
import Addjob from "../pages/addjob/Addjob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'jobs/:id',
        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: 'myApplications',
        element: <PrivateRoute>
          <MyApplications></MyApplications>
        </PrivateRoute>
      },
      {
        path: 'addJob',
        element: <PrivateRoute>
          <Addjob></Addjob>
        </PrivateRoute>
      },
      {
        path: 'MyPostedJobs',
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>
      },
      {
        path: 'viewApplication/:job_id',
        element: <PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'jobApply/:id',
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      },
    ]
  },
]);

export default Router;