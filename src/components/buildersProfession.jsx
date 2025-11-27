import { useState } from "react";
import { Bell, Home, Briefcase, ShoppingCart, LayoutGrid, Folder, Users, BarChart, Settings, UserCog } from "lucide-react";

const sidebarItems = [
  { name: "Home", icon: <Home className="w-8 h-8" /> },
  { name: "Jobs", icon: <Briefcase className="w-8 h-8" /> },
  { name: "Orders", icon: <ShoppingCart className="w-8 h-8" /> },
  { name: "Shopapp", icon: <LayoutGrid className="w-8 h-8" /> },
  { name: "Workspace", icon: <Folder className="w-8 h-8" /> },
  { name: "Projects", icon: <Folder className="w-8 h-8" /> },
  { name: "Registers", icon: <Users className="w-8 h-8" /> },
  { name: "User Management", icon: <UserCog className="w-8 h-8" /> },
  { name: "Analytics", icon: <BarChart className="w-8 h-8" /> },
  { name: "Settings", icon: <Settings className="w-8 h-8" /> },
];

const navItems = [
  { name: "Fundi", count: 12 },
  { name: "Professional", count: 8 },
  { name: "Contractor", count: 5 },
  { name: "Hardware", count: 20 },
];

const tableData = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  BID: `P00${i + 1}`,
  date: `February ${12 + (i % 10)}, 2025 0800 hours`,
  skill: ["Mason", "Plumber", "Electrician", "Welder"][i % 4],
  level: ["Master", "Skilled"][i % 4],
  firstName: "Edwin",
  lastName: "Sifuna",
  nationalID: 38018271,
  phoneNo: '0114212111',
  Email: 'micawins@gmail.com',
  county: ["Kisumu", "Nairobi", "Mombasa", "Kisii"][i % 4],
  subCounty: ["Nyalenda", "Westlands", "Nyali", "Bonchari"][i % 4],
  profileStatus: ["Active", "Pending", "Completed", "In Progress"][i % 4],
}));

export default function AdminPortal() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const paginatedData = tableData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div 
        className={`bg-gray-500 text-white ${isExpanded || isSticky ? 'w-56' : 'w-20'} transition-all duration-300 p-4 flex flex-col items-center h-full`} 
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => !isSticky && setIsExpanded(false)}
      >
        <img
          src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
          alt="Logo"
          className="w-30 h-30 object-contain mb-6 cursor-pointer"
        />

        <nav className="flex flex-col gap-4 w-full">
          {sidebarItems.map((item, index) => (
           <div
           key={index}
           role="button"
           tabIndex="0"
           className="flex items-center gap-4 cursor-pointer hover:bg-gray-400 p-2 rounded-lg transition-all font-bold"
           onClick={() => setIsSticky(true)}
           onKeyDown={(e) => {
             if (e.key === "Enter" || e.key === " ") setIsSticky(true);
           }}
         >
         
              {item.icon}
              {(isExpanded || isSticky) && <span className="whitespace-nowrap">{item.name}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Section */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ml-${isExpanded || isSticky ? '56' : '20'}`}>
        {/* Top Bar */}
        <div className="bg-gray-200 text-black flex justify-between items-center p-4 shadow-md pr-12">
          <div className="text-lg font-bold"/>
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell className="w-6 h-6 text-black" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
            </div>
            <button type="button" className="bg-blue-800 text-white px-6 py-2 rounded-md font-bold">Sales</button>
            <button type="button" className="bg-blue-800 text-white px-6 py-2 rounded-md font-bold">Help</button>
            <button type="button" className="bg-blue-800 text-white px-6 py-2 rounded-md font-bold">Profile</button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-gray-300 p-4 flex justify-between shadow-md gap-4">
          {navItems.map((nav, index) => (
            <button type="button" key={index} className="px-6 py-2 bg-[rgb(0,0,122)] text-white rounded-md font-bold w-full text-center">
              {nav.name} ({nav.count})
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="p-4 overflow-x-auto bg-white">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-300">
              <tr>
              {["#", "B-ID#", "Creation Date", "Skill", "level", "First Name","Last Name","National ID", "Phone Number", "Email","County", "Subcounty", "profileStatus"].map((header, index) => (
                  <th key={index} className="p-3 text-left font-bold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-gray-200">
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} className="p-3">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <div>
              <span>Rows per page: </span>
              <select
                value={rowsPerPage}
                onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="border p-1"
              >
                {[5, 10, 20, 30].map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div>
              <button
              type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded mr-2"
              >
                Prev
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
              type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded ml-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
