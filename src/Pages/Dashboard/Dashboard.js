import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div className="drawer-content ">
          
        
        {/*mobile view tey ekta burget Icon show hobey normal time a Icon ta hide thakbey */}
          <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost bg-teal-900 text-white lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        <h2 className="text-3xl font-bold text-teal-600 text-center mt-12">    
              Welcome to Your Dashboard
        </h2>
          {/* <!-- Page content show korbey nested route ar --> */}
        <div style={{padding:'20px'}}>
            <Outlet/>
        </div>

        </div>
        <div className="drawer-side ">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-teal-700 text-base-content ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link style={{color:'white',fontWeight:'bold'}} to='/dashboard'>Appointments</Link>
            </li>
            <li>
              <Link style={{color:'white',fontWeight:'bold'}}  to='/dashboard/review'>Reviews</Link>
            </li>
            <li>
              <Link style={{color:'white',fontWeight:'bold'}}  to='/dashboard/history'>My History</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;