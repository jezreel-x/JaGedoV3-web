import { Card, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { FaCubes, FaBoxes, FaCity, FaHome, FaUser } from "react-icons/fa";

function ProfileNavBar() {
  const location = useLocation();

  const navItems = [
    {
      path: "/professionalPortal/account-info",
      label: "Account Info",
      icon: <FaUser className="h-5 w-5 text-blue-600" />,
    },
    {
      path: "/professional/professional-address",
      label: "Address",
      icon: <FaHome className="h-5 w-5 text-green-600" />,
    },
    {
      path: "/professional/professional-uploads",
      label: "Account Uploads",
      icon: <FaBoxes className="h-5 w-5 text-purple-600" />,
    },
    {
      path: "/professional/professional-experience",
      label: "Experience",
      icon: <FaCubes className="h-5 w-5 text-yellow-600" />,
    },
    {
      path: "/professional/professional-products",
      label: "Products",
      icon: <FaCity className="h-5 w-5 text-indigo-600" />,
    },
  ];

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
        {navItems.map(({ path, label, icon }) => {
          const isActive = location.pathname === path;

          return (
            <Link to={path} key={label}>
              <ListItem
                className={`hover:bg-blue-50 transition-all duration-200 ${
                  isActive ? "bg-blue-50 font-semibold underline" : ""
                }`}>
                <ListItemPrefix>{icon}</ListItemPrefix>
                {label}
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Card>
  );
}

export default ProfileNavBar;
