import axios from "axios";
import reduxStore from "../store/reduxStore";
import {
  getLineChartData,
  getPieChartData,
  getTableData,
} from "../store/slices/dashboardSlice";

const api = axios.create({
  baseURL: "http://localhost:3001", // set your ip here
});

export const fetchTableData = async () => {
  try {
    const response = await api.get("/api/table");
    console.log(response.data);
    reduxStore.dispatch(getTableData(response.data));
  } catch (error) {
    console.error("Error fetching table data:", error);
  }
};

//chart - line
export const fetchLineChartData = async () => {
  try {
    const response = await api.get("/api/graph");
    //   if (response.status == 200) {
    console.log(response.data);
    reduxStore.dispatch(getLineChartData(response.data));

    //   }
  } catch (error) {
    console.error("Error fetching table data:", error);
  }
};
//chart - pie
export const fetchPieChartData = async () => {
  try {
    const response = await api.get("/api/pie-chart");
    //   if (response.status == 200) {
    console.log(response.data);
    reduxStore.dispatch(getPieChartData(response.data));

    //   }
  } catch (error) {
    console.error("Error fetching table data:", error);
  }
};
