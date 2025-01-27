import { FaUserCog } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      {/* <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" /> */}
      <MenuItem icon={FaUserCog} label="Users" address="users" />
      <MenuItem
        icon={SiGoogleclassroom}
        label="All Classes"
        address="all-classes"
      />
    </>
  );
};

export default AdminMenu;
