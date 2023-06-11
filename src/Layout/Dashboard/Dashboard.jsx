import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../../shared/Navigation/DashboardNav";

const Dashboard = () => {
  return (
    <div className="">
      <DashboardNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
