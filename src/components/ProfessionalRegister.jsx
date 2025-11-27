import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideNav from "../components/Navigation/AdminSideNav";
import AdminNavigationBar from "./Navigation/AdminNav";
import Chatbot from "../pages/customer/customerPortal/ChatBot";
const navItems = [
  { name: "Fundi", count: 20 },
  { name: "Professional", count: 50 },
  { name: "Contractor", count: 40 },
  { name: "Hardware", count: 30 },
];

const tableData = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  BID: `P-AA${i + 1}`,
  date: `May ${5 + (i % 10)}, 2025 3:48 PM`,
  category: [
    "Project Manager",
    "Architect",
    "Structural Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Geologist",
  ][i % 6],
  level: ["Senior", "Professional", "Graduate", "Student"][i % 4],
  firstName: "Jay",
  lastName: "Lee",
  nationalID: 38018271,
  phoneNo: "0114212111",
  Email: "jay@gmail.com",
  county: ["Kisumu", "Nairobi", "Mombasa", "Kisii"][i % 4],
  subCounty: ["Nyalenda", "Westlands", "Nyali", "Bonchari"][i % 4],
  profileStatus: ["Active", "Pending", "Completed", "In Progress"][i % 4],
}));

export default function AdminPortal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [activeNav, setActiveNav] = useState("Professional"); // Active nav state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [search] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    managedBy: "",
  });

  // const filteredData = tableData.filter(
  //   (row) =>
  //     row.tab === activeNav &&
  //     statusMap[activeNav]?.includes(row.status) &&
  //     row.req.toLowerCase().includes(search.toLowerCase()) &&
  //     (!filters.category || row.category === filters.category) &&
  //     (!filters.type || row.type === filters.type) &&
  //     (!filters.managedBy || row.managedBy === filters.managedBy)
  // );

  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const paginatedData = tableData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <AdminSideNav />

      <AdminNavigationBar/>
      {/* Main Section */}
      <div className="flex-1 flex flex-col transition-all duration-300 relative pt-20 ml-20">
        <Chatbot/>
        {/* Navigation Bar */}
        <div className="p-4 flex justify-between shadow-md gap-4">
          {navItems.map((nav, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActiveNav(nav.name);
                if (nav.name === "Fundi") navigate("/fundi-register");
                else if (nav.name === "Contractor") navigate("/contractor-register");
                else if (nav.name === "Professional") navigate("/professional-register");
                else if (nav.name === "Hardware") navigate("/hardware-register");
              }}
              className={`px-6 py-2 rounded-md font-bold w-full text-center transition-colors duration-200
              
                ${
                  activeNav === nav.name
                    ? "bg-[rgb(0,0,122)] text-white"
                    : "bg-blue-200 text-black hover:bg-blue-300"
                }
              `}>
              {nav.name} ({nav.count})
            </button>
          ))}
        </div>

        {/* Search + Filters */}
        <div className="p-4 flex justify-end">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            Filters
          </button>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm p-4 overflow-x-auto">
            {/* Search User Details Button */}
            <div className="flex justify-end mb-3">
              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 text-sm px-3 py-1.5 rounded hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
                Search User Details
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-white text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr className="border-b border-gray-100">
                    {[
                      "#",
                      "BID",
                      "Creation Date",
                      "Category",
                      "level",
                      "First Name",
                      "Last Name",
                      "National ID",
                      "Phone Number",
                      "Email",
                      "County",
                      "Subcounty",
                      "Status",
                    ].map((header, index) => (
                      <th key={index} className="p-3 text-left font-bold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-t border-gray-200 cursor-pointer hover:bg-gray-100 transition"
                      onClick={() => navigate("/professional/professional-verification")}>
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex} className="p-3">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span>Rows per page:</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border rounded px-2 py-1">
                  {[5, 10, 20, 30].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded disabled:opacity-50">
                  {/* Left Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span>1</span>
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded disabled:opacity-50">
                  {/* Right Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Drawer */}
        {isFilterOpen && (
          <div className="absolute top-0 right-0 h-full w-64 bg-white border-l shadow-lg z-50 p-4">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Category</label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter("category", e.target.value)}
                className="w-full border p-2 rounded">
                <option value="">All</option>
                {[
                  "Fundi",
                  "Machinery",
                  "Contractor",
                  "Custom Product",
                  "Professional",
                  "Design",
                  "Electrician",
                  "Hardware",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Type</label>
              <select
                value={filters.type}
                onChange={(e) => updateFilter("type", e.target.value)}
                className="w-full border p-2 rounded">
                <option value="">All</option>
                {["Job", "Order"].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Managed By</label>
              <select
                value={filters.managedBy}
                onChange={(e) => updateFilter("managedBy", e.target.value)}
                className="w-full border p-2 rounded">
                <option value="">All</option>
                {["Self", "JaGedo"].map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => setIsFilterOpen(false)}
              className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-full">
              Close Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
