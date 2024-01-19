import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import UserProfile from "./UserProfile";
import Table from "./Table";
import {
  fetchLineChartData,
  fetchPieChartData,
  fetchTableData,
} from "../api/dashboardApi";
import PieChartComponent from "./PieChart";
import Pagination from "./Pagination";

const Dashboard = () => {
  //below are the api calls from the given data in the backend
  useEffect(() => {
    fetchTableData();
    fetchLineChartData();
    fetchPieChartData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    console.log(`Fetching data for page ${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 md:mt-0">
      <div className="sm:col-span-1 sm:col-start-1 sm:col-end-2">
        <LineChart />
      </div>
      <div className="sm:col-span-1 sm:col-start-2 sm:col-end-3">
        <PieChartComponent />
      </div>

      <div className="sm:col-span-1 sm:col-start-1 sm:col-end-2">
        <Table />
        <Pagination totalPages={10} onPageChange={handlePageChange} />
      </div>
      <div className="sm:col-span-1 sm:col-start-2 sm:col-end-3">
        <UserProfile />
      </div>

    </div>
  );
};

export default Dashboard;
