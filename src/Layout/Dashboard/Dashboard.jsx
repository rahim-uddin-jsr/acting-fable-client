import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../../shared/Navigation/DashboardNav";

const Dashboard = () => {
  return (
    <div className="max-w-[1024px]">
      <DashboardNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
