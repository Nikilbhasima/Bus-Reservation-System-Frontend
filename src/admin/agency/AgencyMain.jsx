import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import AdminRoute from "../AdminRoute";

function AgencyMain() {
  return (
    <div className="grid grid-cols-[auto_1fr]   h-screen relative">
      <div className="bg-[yellow] relative h-full">
        <Navbar />
      </div>
      <div className="bg-[white] flex flex-col">
        <Header />
        <AdminRoute />
      </div>
    </div>
  );
}

export default AgencyMain;
