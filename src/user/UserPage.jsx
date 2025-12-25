import UserFooter from "./userFooter/UserFooter";
import UserNavbar from "./userNavbar/UserNavbar";
import UserRoute from "./UserRoute";

function UserPage() {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <UserNavbar />
      <UserRoute />
      <UserFooter />
    </div>
  );
}

export default UserPage;
