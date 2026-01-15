import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import DashBoard from "./dashboard/DashBoard";
import AgencyManagement from "./agencyManagement/AgencyManagement";
import AgencyLandingPage from "./agencyManagement/AgencyLandingPage";
import AddOwner from "./agencyManagement/owner/AddOwner";
import AddAgency from "./agencyManagement/agencypart/AddAgency";

function SuperAdminRoutin() {
  return (
    <div className="p-[32px]">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/agency" element={<AgencyManagement />}>
          <Route index element={<AgencyLandingPage />} />
          <Route path="landing" element={<AgencyLandingPage />} />
          <Route path="owner" element={<AddOwner />} />
          <Route path="agencyProfile" element={<AddAgency />} />
        </Route>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default SuperAdminRoutin;
