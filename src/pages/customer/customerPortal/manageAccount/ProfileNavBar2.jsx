import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBoxes,
  FaHome,
  FaUser,
} from "react-icons/fa";

function ProfileNavBar() {
  const location = useLocation();

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <Card className="fixed top-0 left-0 h-screen w-full max-w-[20rem] p-4 shadow-xl rounded-r-xl bg-white border-r border-gray-200">
      <div className="mb-6 p-4 text-center border-b border-gray-300">
        <Typography variant="h5" color="blue-gray" className="font-bold">
          Profile Management
        </Typography>
        <Typography variant="small" color="gray" className="mt-1">
          Manage your account settings and preferences
        </Typography>
      </div>

      <List className="space-y-2">
        <Link to="/customer/manage-account2">
          <ListItem
            className={`hover:bg-blue-50 transition-all duration-200 ${
              isActiveRoute("/customer/manage-account2")
                ? "underline underline-offset-4 font-semibold bg-blue-50"
                : ""
            }`}
          >
            <ListItemPrefix>
              <FaUser className="h-5 w-5 text-blue-600" />
            </ListItemPrefix>
            Account Info
          </ListItem>
        </Link>

        <Link to="/customer/address2">
          <ListItem
            className={`hover:bg-blue-50 transition-all duration-200 ${
              isActiveRoute("/customer/address2")
                ? "underline underline-offset-4 font-semibold bg-blue-50"
                : ""
            }`}
          >
            <ListItemPrefix>
              <FaHome className="h-5 w-5 text-green-600" />
            </ListItemPrefix>
            Address
          </ListItem>
        </Link>

        <Link to="/customer/upload2">
          <ListItem
            className={`hover:bg-blue-50 transition-all duration-200 ${
              isActiveRoute("/customer/upload2")
                ? "underline underline-offset-4 font-semibold bg-blue-50"
                : ""
            }`}
          >
            <ListItemPrefix>
              <FaBoxes className="h-5 w-5 text-purple-600" />
            </ListItemPrefix>
            Account Uploads
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default ProfileNavBar;
