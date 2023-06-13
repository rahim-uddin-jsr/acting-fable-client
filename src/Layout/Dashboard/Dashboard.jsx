import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../../shared/Navigation/DashboardNav";

const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/5 items-center bg-indigo-300 text-white">
        <DashboardNav />
      </div>
      <div className=" w-full  bg-sky-100 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
