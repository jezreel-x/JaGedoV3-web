import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaCubes,
  FaBoxes, 
  FaCity,
  FaHome, 
  FaUser, 
} from "react-icons/fa";

const navItems = [
  {
    label: "Account Info",
    icon: FaUser,
    path: "/professional/professional-verification",
    color: "text-blue-600",
  },
  {
    label: "Address",
    icon: FaHome,
    path: "/professional/professional-verification/professional-address",
    color: "text-green-600",
  },
  {
    label: "Account Uploads",
    icon: FaBoxes,
    path: "/professional/professional-upload",
    color: "text-purple-600",
  },
  {
    label: "Experience",
    icon: FaCubes,
    path: "/professional/professional-experiences",
    color: "text-yellow-600",
  },
  {
    label: "Products",
    icon: FaCity,
    path: "/professional/professional-product",
    color: "text-indigo-600",
  },
];

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
           {navItems.map(({ label, icon: Icon, path, color }) => (
             <Link key={path} to={path}>
               <ListItem
                 className={`hover:bg-blue-50 transition-all duration-200 ${
                   isActiveRoute(path)
                     ? "bg-blue-50 border-b-2 border-blue-600 font-semibold"
                     : ""
                 }`}
               >
                 <ListItemPrefix>
                   <Icon className={`h-5 w-5 ${color}`} />
                 </ListItemPrefix>
                 {label}
               </ListItem>
             </Link>
           ))}
         </List>
       </Card>
  );
}

export default ProfileNavBar;
