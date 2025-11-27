
import { useState } from "react";
import AdminSideNav from "../../components/Navigation/AdminSideNav";


const navItems = [
  { name: "New", count: 12 },
  { name: "Draft", count: 8 },
  { name: "Quotations", count: 5 },
  { name: "Active", count: 20 },
  { name: "Past", count: 15 },
];

const tableData = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  req: `Req00${i + 1}`,
  date: `February ${12 + (i % 10)}, 2025 0800 hours`,
  category: ["Fundi", "Professional", "Electrician", "Painter"][i % 4],
  type: "JOBS",
  managedBy: ["JaGedo", "Self"][i % 2],
  county: ["Kisumu", "Nairobi", "Mombasa", "Kisii"][i % 4],
  subCounty: ["Nyalenda", "Westlands", "Nyali", "Bonchari"][i % 4],
  status: ["Active", "Pending", "Completed", "In Progress"][i % 4],
}));

export default function AdminPortal() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("New");
  
  
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
           <AdminSideNav/>
     
      {/* Main Section */}
      <div
        className="flex-1 flex flex-col transition-all duration-300"
      >
        {/* Navigation Bar */}
        <div className="bg-gray-300 p-4 flex justify-between shadow-md gap-4">
          {navItems.map((nav) => (
            <button
              key={nav.name}
              type="button"
              onClick={() => setActiveTab(nav.name)}
              className={`px-6 py-2 rounded-md font-bold w-full text-center transition-colors duration-200
        ${
          activeTab === nav.name
            ? "bg-[rgb(0,0,122)] text-white" // Active tab
            : "bg-blue-200 text black" // Inactive tab with sky blue background
        }`}
            >
              {nav.name} ({nav.count})
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="p-4 overflow-x-auto bg-white">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-300">
              <tr>
                {[
                  "#",
                  "req#",
                  "Creation Date",
                  "Category",
                  "Type",
                  "Managed by",
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
                <tr key={rowIndex} className="border-t border-gray-200">
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} className="p-3">
                      {value}
                    </td>
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
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border p-1"
              >
                {[5, 10, 20, 30].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
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
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
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
