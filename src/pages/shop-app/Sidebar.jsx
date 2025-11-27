import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  // FaBox,
  FaUsers,
  // FaPlus,
  FaTags,
  FaCogs,
} from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import AdminSideNav from "../../components/Navigation/AdminSideNav";



const Sidebar = () => {
   
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex">
            <AdminSideNav />

            {/* Secondary Sidebar */}
            <aside
                className={`w-56 bg-white text-gray-500 px-1 py-3 shadow-lg sticky top-0 h-screen transition-all duration-300 flex-shrink-0
                }`}
                // onMouseEnter={() => setExpanded(true)}
                // onMouseLeave={() => setExpanded(false)}
            >
                <nav className="space-y-8 mt-20">
                {[
                    { 
                        icon: <FaHome size={24} className="text-blue-500" />, 
                        label: "Products", 
                        path: "/admin-products",
                    },
                    // { icon: <FaBox size={24} />, label: "Products" },
                    { 
                        icon: <FaUsers size={24} className="text-purple-500" />, 
                        label: "Customer View",
                        path: "/customer/hardware_shop",
                    },
                    // { icon: <FaPlus size={24} />, label: "New Product" },
                    { 
                        icon: <FaTags size={24} className="text-green-500" />, 
                        label: "Categories",
                        path: "/category-table",
                    },
                    { 
                        icon: <FaCogs size={24} className="text-amber-500" />, 
                        label: "Attributes",
                        path: "/create-attributes/preview"
                    },
                    { 
                        icon: <FaMapLocationDot size={24} className="text-red-500" />, 
                        label: "Regions",
                        path: "/create-regions/preview"
                    },
                    {
                        icon: <FaMoneyCheckDollar size={24} className="text-indigo-500" />, 
                        label: "Prices",
                        path: "/prices"
                    },
                ].map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            type="button"
                            key={index}
                            onClick={() => navigate(item.path)}
                            href="#"
                            className={`flex items-center font-bold text-gray-900 space-x-4 px-3 py-2 rounded-lg transition duration-300 w-full cursor-pointer
                                ${isActive ? "bg-gray-200" : "bg-white hover:bg-gray-100"}`}
                            >
                            {item.icon} <span className="">{item.label}</span>
                        </button>
                    )
                })}
                </nav>
            </aside>
        </div>
    )};

export default Sidebar;