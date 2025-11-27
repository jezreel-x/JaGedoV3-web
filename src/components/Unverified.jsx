import { useState, useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  ShoppingCart,
  LayoutGrid,
  Folder,
  Users,
  BarChart,
  UserCog,
  ChevronDown,
} from "lucide-react";

const sidebarItems = [
  { name: "Home", icon: <Home className="w-8 h-8" />, path: "/admin" },
  { name: "Jobs", icon: <Briefcase className="w-8 h-8" />, path: "/jobs" },
  {
    name: "Orders",
    icon: <ShoppingCart className="w-8 h-8" />,
    path: "/orders",
  },
  {
    name: "Shopapp",
    icon: <LayoutGrid className="w-8 h-8" />,
    path: "/shopapp",
  },
  { name: "Workspace", icon: <Folder className="w-8 h-8" />, path: "/orders2" },
  {
    name: "Projects",
    icon: <Folder className="w-8 h-8" />,
    path: "/quotations",
  },
  {
    name: "Registers",
    icon: <Users className="w-6 h-6 mr-2" />,
    children: [
      {
        name: "Customer Register",
        path: "/register2?type=Customers",
        children: [
          {
            name: "Individual",
            path: "/individual",
          },
          {
            name: "Organization",
            path: "/organization",
          },
        ],
      },
      {
        name: "Builder Register",
        path: "/register2?type=Builders",
        children: [
          {
            name: "Fundi",
            path: "/fundi",
          },
          {
            name: "Professional",
            path: "/professional",
          },
          {
            name: "Contractor",
            path: "/contractor",
          },
          {
            name: "Hardware",
            path: "/hardware",
          },
        ],
      },
    ],
  },

  {
    name: "User Management",
    icon: <UserCog className="w-8 h-8" />,
    path: "/register",
  },
  {
    name: "Analytics",
    icon: <BarChart className="w-8 h-8" />,
    path: "/payment",
  },
];

export default function Individual() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [setSelectedSkill] = useState("");

  const [setRegisterType] = useState("Builders"); // NEW: "Customers" or "Builders"

  const location = useLocation();

  const [open, setOpen] = useState(null); // Top-level open
  const [openChild, setOpenChild] = useState(null); // Second-level open

  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const skill = searchParams.get("skill");
    const type = searchParams.get("type");

    if (skill) setSelectedSkill(skill);
    if (type) setRegisterType(type); // set type to "Customers" or "Builders"

    // Navigate based on type
    //  const lowerType = type.toLowerCase();
    //  if (lowerType === "fundi") {
    //    navigate("/fundi/fundi-verification");
    //  } else if (lowerType === "professional") {
    //    navigate("/professional/professional-verification");
    //  } else if (lowerType === "contractor") {
    //    navigate("/contractor/contractor-verification");
    //  } else if (lowerType === "hardware") {
    //    navigate("/hardware/hardware-verification");
    //  }
  }, [location.search, setRegisterType, setSelectedSkill]);
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`bg-gray-500 text-white ${isExpanded || isSticky ? "w-56" : "w-20"} transition-all duration-300 p-4 flex flex-col items-center h-full`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => !isSticky && setIsExpanded(false)}
      >
        <nav className="flex flex-col gap-4 w-full">
          {sidebarItems.map((item, index) => {
            const hasChildren = !!item.children;
            const isActive = location.pathname.startsWith(item.path || "");

            return (
              <div key={index} className="w-full">
                <div
                  role="button"
                  tabIndex={0}
                  className={`flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-400 p-2 rounded-lg transition-all font-bold ${
                    isActive ? "bg-gray-400" : ""
                  }`}
                  onClick={() => {
                    if (hasChildren) {
                      setOpen((prevOpen) =>
                        prevOpen === item.name ? null : item.name
                      );
                      setIsSticky(true);
                    } else {
                      setIsSticky(true);
                      navigate(item.path); // 👈 Navigate to the item's path
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      if (hasChildren) {
                        setOpen((prevOpen) =>
                          prevOpen === item.name ? null : item.name
                        );
                        setIsSticky(true);
                      } else {
                        setIsSticky(true);
                        navigate(item.path); // 👈 Navigate on keyboard interaction too
                      }
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    {(isExpanded || isSticky) && (
                      <span className="whitespace-nowrap">{item.name}</span>
                    )}
                  </div>
                  {hasChildren && (isExpanded || isSticky) && (
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        open === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown for children */}
                {hasChildren &&
                  open === item.name &&
                  (isExpanded || isSticky) && (
                    <div className="ml-6 mt-1 flex flex-col gap-1">
                      {item.children.map((child, idx) => {
                        const hasGrandChildren = !!child.children;
                        const isChildOpen = openChild === child.name;

                        return (
                          <div key={idx}>
                            <div
                              role="button"
                              tabIndex={0}
                              className="text-sm text-white hover:bg-gray-300 hover:text-black p-2 rounded-md transition cursor-pointer flex justify-between items-center"
                              onClick={() => {
                                if (hasGrandChildren) {
                                  setOpenChild((prev) =>
                                    prev === child.name ? null : child.name
                                  );
                                } else {
                                  navigate(child.path);
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  if (hasGrandChildren) {
                                    setOpenChild((prev) =>
                                      prev === child.name ? null : child.name
                                    );
                                  } else {
                                    navigate(child.path);
                                  }
                                }
                              }}
                            >
                              <span>{child.name}</span>
                              {hasGrandChildren && (
                                <ChevronDown
                                  className={`ml-2 transition-transform duration-200 ${
                                    isChildOpen ? "rotate-180" : ""
                                  }`}
                                />
                              )}
                            </div>

                            {/* Grandchildren dropdown */}
                            {hasGrandChildren && isChildOpen && (
                              <div className="ml-6 mt-1 flex flex-col gap-1">
                                {child.children.map((grandChild, gIdx) => (
                                  <Link
                                    key={gIdx}
                                    to={grandChild.path}
                                    className="text-sm text-white hover:bg-gray-300 hover:text-black p-2 rounded-md transition"
                                  >
                                    {grandChild.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            );
          })}
        </nav>
      </div>
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <section className="w-full max-w-3xl p-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center shadow">
            <h1 className="text-2xl font-semibold text-yellow-900 mb-4">
              Profile Not Approved
            </h1>
            <p className="text-gray-700">
              It seems like your profile is not created. Please{" "}
              <Link
                to="/create-profile"
                className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
                complete your profile
              </Link>{" "}
              to access full dashboard features.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
