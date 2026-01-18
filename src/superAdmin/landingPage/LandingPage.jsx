import SuperAdminRoutin from "../SuperAdminRoutin";
import Header from "../../admin/header/Header";
import Navbar from "../navbar/Navbar";

function LandingPage() {
  return (
    <div className="grid grid-cols-[auto_1fr]   h-screen relative">
      <div className="bg-[yellow] relative h-full">
        <Navbar />
      </div>
      <div className="bg-[white] flex flex-col">
        <Header />
        <SuperAdminRoutin />
      </div>
    </div>
  );
}

export default LandingPage;
