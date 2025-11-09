import UserFooter from "./userFooter/UserFooter";
import UserNavbar from "./userNavbar/UserNavbar";
import UserRoute from "./UserRoute";

function UserPage() {
  return (
    <>
      <UserNavbar />
      <UserRoute />
      <UserFooter />
    </>
  );
}

export default UserPage;
