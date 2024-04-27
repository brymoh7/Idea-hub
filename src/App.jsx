/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyCampaigns from "./pages/employee/userCampaigns";
import Employee from "./pages/employee/landingPage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Management from "./pages/management/landingPage";
import Details from "./pages/moderator/details";
import Moderator from "./pages/moderator/landingPage";
//import EmployeeLeaderboard from "./pages/employee/leaderboard"; // Import EmployeeLeaderboard component
import EmployeeLeaderboard from "./pages/employee/EmployeeLeaderboard";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/moderator" element={<Moderator />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
        <Route path="/details" element={<Details />} />
        <Route path="/myCampaigns" element={<MyCampaigns />} />
        <Route path="/management" element={<Management />} />
        <Route path="/employee-leaderboard" element={<EmployeeLeaderboard />} />
      </Routes>
    </>
  );
}

export default App;
