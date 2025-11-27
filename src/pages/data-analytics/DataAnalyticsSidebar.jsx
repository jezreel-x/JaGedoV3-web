import React from "react";
import { FaHelmetSafety, FaMoneyBillWave } from "react-icons/fa6";
import { FaFileAlt, FaUserFriends, FaUserCheck } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";

const SidebarTabs = [
  { path: "/analytics-dashboard", icon: <FaFileAlt className="text-blue-500" />, label: "Summary" },
  { path: "/analytics-customer-dashboard", icon: <FaUserFriends className="text-purple-500" />, label: "Customers" },
  { path: "/analytics-builder-dashboard", icon: <FaHelmetSafety className="text-green-500" />, label: "Builders" },
  { path: "/requests", icon: <FaUserCheck className="text-amber-500" />, label: "Requests" },
  { path: "/web", icon: <CgWebsite className="text-red-500" />, label: "Web" },
  { path: "/analytics-sales-dashboard", icon: <FaMoneyBillWave className="text-indigo-500" />, label: "Sales" },
];

const DataAnalyticsSidebar = () => {
    const [activeTab, setActiveTab] = React.useState("Summary");
    const location = useLocation();

    // Set the active tab based on the current path
    React.useEffect(() => {
        const currentPath = location.pathname;
        const activeTab = SidebarTabs.find(tab => tab.path === currentPath);
        if (activeTab) {
            setActiveTab(activeTab.label);
        }
    }, [location.pathname]);
    return (
        <React.Fragment>
            {/* Sidebar */}
            <aside className="fixed top-20 left-0 h-screen text-gray-500 w-64 border-r border-gray-200 bg-white p-4 space-y-4">
                <h1 className="text-lg font-bold mb-4 text-white">Analytics</h1>
                <nav className="space-y-2">
                    {SidebarTabs.map(({path, icon, label}) => (
                    <Link 
                        // onClick={() => setActiveTab(label)}
                        // className={`flex items-center rounded-lg w-full text-left hover:cursor-pointer font-medium px-2 py-3
                        //     ${activeTab === label ? 'bg-gray-200 text-gray-900' : 'text-white'}`}
                        key={label} 
                        to={path}
                        onClick={() => setActiveTab(label)}
                    >
                        <ListItem
                            className={`flex font-bold items-center rounded-lg w-full text-left hover:cursor-pointer px-2 py-3 my-6
                            ${activeTab === label ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}`}
                        >
                            <ListItemPrefix>{icon}</ListItemPrefix>
                            <span>
                                {label}
                            </span>
                        </ListItem>
                    </Link>
                    ))}
                </nav>
            </aside>
        </React.Fragment>
    )
};

export default DataAnalyticsSidebar;
