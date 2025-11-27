import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  ShoppingCart,
  LayoutGrid,
  Users,
  BarChart,
  UserCog,
  ChevronDown,
} from "lucide-react";

const sidebarItems = [
  { name: "Home", icon: <Home className="w-5 h-5 text-blue-500" />, path: "/admin" },
  { name: "Jobs", icon: <Briefcase className="w-5 h-5 text-purple-500" />, path: "/jobs" },
  { name: "Orders", icon: <ShoppingCart className="w-5 h-5 text-green-500" />, path: "/orders" },
  { name: "Shopapp", icon: <LayoutGrid className="w-5 h-5 text-yellow-500" />, path: "/admin-products" },
  {
    name: "Registers (400)",
    icon: <Users className="w-5 h-5 text-pink-500 mr-2" />,
    children: [
      {
        name: "Customers (150)",
        path: "/individual",
        
      },
      {
        name: "Builders (250)",
        path: "/fundi-register",
      },
    ],
  },
  { name: "User Management", icon: <UserCog className="w-5 h-5 text-red-500" />, path: "/comingsoon" },
  { name: "Analytics", icon: <BarChart className="w-5 h-5 text-indigo-500" />, path: "/analytics-dashboard" },
];

export default function AdminSideNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState(new Set());
  const location = useLocation();

  const toggleDropdown = (name) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      newSet.has(name) ? newSet.delete(name) : newSet.add(name);
      return newSet;
    });
  };

  const renderMenuItems = (items, level = 0) =>
    items.map((item, index) => {
      const hasChildren = Array.isArray(item.children);
      const isActive = !hasChildren && item.path
        ? location.pathname.startsWith(item.path)
        : false;
      const isDropdownOpen = openDropdowns.has(item.name);

      return (
        <div key={`${item.name}-${index}`} className={`w-full ${level > 0 ? "ml-4" : ""}`}>
          {hasChildren ? (
            <>
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  toggleDropdown(item.name);
                  setIsSticky(true);
                }}
                onKeyDown={(e) => {
                  if (["Enter", " "].includes(e.key)) {
                    toggleDropdown(item.name);
                    setIsSticky(true);
                  }
                }}
                className="flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-lg transition-all font-semibold text-black"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {(isExpanded || isSticky) && <span className="whitespace-nowrap">{item.name}</span>}
                </div>
                {(isExpanded || isSticky) && (
                  <ChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                )}
              </div>
              {isDropdownOpen && (isExpanded || isSticky) && (
                <div className="mt-1 flex flex-col gap-1 ml-4">
                  {renderMenuItems(item.children, level + 1)}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.path}
              onClick={() => setIsSticky(true)}
              className={`flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all font-semibold w-full text-black ${
                isActive ? "bg-gray-200" : ""
              }`}
            >
              {item.icon}
              {(isExpanded || isSticky) && <span className="whitespace-nowrap">{item.name}</span>}
            </Link>
          )}
        </div>
      );
    });

  return (
    <div
      className={`bg-white text-black shadow-md z-10 ${
        isExpanded || isSticky ? "w-56" : "w-20"
      } transition-all duration-300 p-4 flex flex-col items-center h-screen sticky top-0`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => !isSticky && setIsExpanded(false)}
    >
      {/* Optional Logo */}
      {/* <div className="mb-6">
        <img src="/Jagedo logo-1.png" alt="Logo" className="w-12 h-12 object-contain" />
      </div> */}

      {/* Sidebar Navigation with top padding */}
      <nav className="flex flex-col gap-4 w-full pt-20">
        {renderMenuItems(sidebarItems)}
      </nav>
    </div>
  );
}
