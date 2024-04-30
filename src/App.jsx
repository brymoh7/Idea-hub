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
import GroupsDetails from "./pages/employee/GroupDetails";
import ModeratorPosts from './pages/moderator/Posts'
import ITSupportTeam from './pages/itSupportTeam/LandingPage'
import ITSupportPost from './pages/itSupportTeam/Posts'
import ManagementPost from './pages/management/Posts'
import ManagementPostDetails from './pages/management/PostDetails'
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/groups" element={<GroupsDetails />} />

        <Route path="/moderator" element={<Moderator />} />
        <Route path="/moderator/posts" element={<ModeratorPosts />} />

        <Route path='it-support-team' element={<ITSupportTeam />} />
        <Route path='it-support-team/posts' element={<ITSupportPost />} />



        {/* <Route path="/details/:id" element={<Details />} /> */}
        <Route path="/details" element={<Details />} />
        <Route path="/myCampaigns" element={<MyCampaigns />} />
        <Route path="/management" element={<Management />} />
        <Route path="/management/posts" element={<ManagementPost />} />
        <Route path="/management/posts/:id" element={<ManagementPostDetails />} />


        <Route path="/employee-leaderboard" element={<EmployeeLeaderboard />} />
      </Routes>
    </>
  );
}

export default App;
