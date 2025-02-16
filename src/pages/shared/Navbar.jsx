import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";
import { useContext } from "react";
import logo from '../../assets/icons8-job-application-100.png'

const Navbar = () => {
  const { user, signOutUser, } = useContext(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('signed out')
      })
      .catch(err => {
        console.log('failed', err.message)
      })
  }
  const links =
    <>
      <li><NavLink>Home </NavLink></li>
      <li><NavLink to={'/myApplications'}>My applications </NavLink></li>
      <li><NavLink to={'/addjob'}>Add a job </NavLink></li>
      <li><NavLink to={'/MyPostedJobs'}>My posted jobs </NavLink></li>
    </>

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-16" src={logo} alt="logo" />
          <h3 className="text-3xl">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div>
          {user?.email}
        </div>
        {
          user ?
            <>
              <button onClick={handleSignOut} className="btn">Sign-Out</button>
            </>
            :
            <>
              <Link to={'/register'}><button className="btn">Register</button></Link>
              <Link to={'/SignIn'}>
                <button className="btn">Sign-In</button>
              </Link>
            </>
        }
      </div>
    </div>
  );
};

export default Navbar;