import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import AdminSideNav from "../../components/Navigation/AdminSideNav";
import AdminNavigationBar from "../../components/Navigation/AdminNav";
import ChatBot from "../../pages/customer/customerPortal/ChatBot";
const navItems = [
  { name: "New", count: 10 },
  { name: "Drafts", count: 20 },
  { name: "Bids", count: 15 },
  { name: "Active", count: 30 },
  { name: "Past", count: 10 },
];

const statusMap = {
  New: ["Unreviewed", "Underreview"],
  Drafts: ["Draft"],
  Past: ["Completed", "Reviewed"],
  Bids: [
    "Bid Invited",
    "Under Evaluation",
    "Bid Submitted",
    "Bid Invited",

    "Awarded",
    
  ],
  Active: ["Mobilization", "Started", "Ongoing"],
};

const generateData = () => {
  const result = [];

  Object.entries(statusMap).forEach(([tabName, statuses]) => {
    if (statuses && statuses.length > 0) {
      for (let i = 0; i < 6; i++) {
        const status = statuses[i % statuses.length];
        result.push({
          tab: tabName,
          id: i + 1,
          req: `Req00${i + 1}`,
          date: `February ${12 + (i % 10)}, 2025 3:48 PM`,
          category: ["Fundi","Contractor" ,"Professional" ][i % 3],
          type: "Job",
          managedBy: ["Self", "JaGedo"][i % 2],
          county: ["Kisumu", "Nairobi", "Mombasa", "Kisii"][i % 4],
          subCounty: ["Nyalenda", "Westlands", "Nyali", "Bonchari"][i % 4],
          status,
        });
      }
    }
  });
  return result;
};

const tableData = generateData();

export default function AdminPortal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("New");
  const [storedStatus, setStoredStatus] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    managedBy: "",
  });

  const filteredData = tableData.filter(
    (row) =>
      row.tab === activeTab &&
      statusMap[activeTab]?.includes(row.status) &&
      row.req.toLowerCase().includes(search.toLowerCase()) &&
      (!filters.category || row.category === filters.category) &&
      // (!filters.type || row.type === filters.type) &&
      (!filters.managedBy || row.managedBy === filters.managedBy) &&
      (!filters.county || row.county === filters.county) &&
      (!filters.date ||
        new Date(row.date).toISOString().split("T")[0] === filters.date)
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const storedStatusValue = localStorage.getItem("assignMessage");
    if (storedStatusValue) {
      setStoredStatus(JSON.parse(storedStatusValue));
    }
  }, []);

  const unreviewedStatus = statusMap.New[0];
  const retrievedStatus = storedStatus?.status;
  const result = unreviewedStatus.replace(unreviewedStatus, retrievedStatus);

  // console.log(retrievedStatus);
  console.log(result);

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <AdminSideNav />

      <AdminNavigationBar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col transition-all duration-300 relative pt-20 ml-20">
        <ChatBot />

        {/* Tabs */}
        <div className="p-4 flex justify-between shadow-md gap-4">
          {navItems.map((nav) => (
            <button
              key={nav.name}
              type="button"
              onClick={() => {
                setActiveTab(nav.name);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-md font-bold w-full text-center transition-colors duration-200 ${
                activeTab === nav.name
                  ? "bg-[rgb(0,0,122)] text-white"
                  : "bg-blue-200 text-black"
              }`}
            >
              {nav.name} ({nav.count})
            </button>
          ))}
        </div>

        {/* Search + Filters */}
        <div className="p-4 flex justify-end">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
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
                  stroke="currentColor"
                >
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
                      "Requests",
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
  {paginatedData.length > 0 ? (
    paginatedData.map((row, rowIndex) => {
      const handleReqClick = () => {
        if (activeTab === "New") {
          switch (row.req) {
            case "Req001":
              navigate("/admin-fundi-competitive");
              break;
            case "Req002":
              navigate("/competitive/contractor");
              break;
            case "Req003":
              navigate("/admin/competitive/professional");
              break;
            case "Req004":
              navigate("/competitive");
              break;
            case "Req005":
              navigate("/admin/competitive/contractor");
              break;
            case "Req006":
              navigate("/competitive/professional");
              break;
            default:
              break;
          }
        } else if (activeTab === "Bids") {
          switch (row.req) {
            case "Req001":
              navigate("/admin-view-assigned-job");
              break;
            // case "Req002":
            //   navigate("/admin-view-assigned-job");
            //   break;
            case "Req002":
              navigate("/admin-view-assigned-cont-job2");
              break;
            case "Req003":
              navigate("/admin-view-assigned-prof-job");
              break;
            case "Req004":
              navigate("/admin-view-assigned-job2");
              break;
            case "Req005":
              navigate("/admin-view-assigned-cont-job");
              break;
            case "Req006":
              navigate("/admin-view-assigned-prof-job2");
              break;
            default:
              break;
          }
        }
      };

      const isClickableReq =
        (activeTab === "New" &&
          ["Req001", "Req002", "Req003", "Req004", "Req005", "Req006"].includes(
            row.req
          )) ||
        (activeTab === "Bids" &&
          ["Req001", "Req002", "Req003", "Req004", "Req005", "Req006"].includes(
            row.req
          ));

      return (
        <tr key={rowIndex} className="border-t border-gray-200">
          <td className="p-3">{row.id}</td>
          <td className="p-3">
            {isClickableReq ? (
              <button
                type="button"
                onClick={handleReqClick}
                className="text-blue-600  cursor-pointer bg-transparent border-none p-0"
              >
                {row.req}
              </button>
            ) : (
              row.req
            )}
          </td>
          <td className="p-3">{row.date}</td>
          <td className="p-3">{row.category}</td>
          <td className="p-3">{row.type}</td>
          <td className="p-3">{row.managedBy}</td>
          <td className="p-3">{row.county}</td>
          <td className="p-3">{row.subCounty}</td>
          <td className="p-3">{row.status}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan={9} className="p-4 text-center text-gray-500">
        No records found.
      </td>
    </tr>
  )}
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
                  className="border rounded px-2 py-1"
                >
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded disabled:opacity-50"
                >
                  {/* Left Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded disabled:opacity-50"
                >
                  {/* Right Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
          <div className="absolute top-0 right-0 h-full w-64 bg-white border-l shadow-lg z-50 p-4 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            {/* Date */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Date</label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => updateFilter("date", e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter("category", e.target.value)}
                className="w-full border p-2 rounded"
              >
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

            {/* Managed By */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Managed By
              </label>
              <select
                value={filters.managedBy}
                onChange={(e) => updateFilter("managedBy", e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">All</option>
                {["Self", "JaGedo"].map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>

            {/* County */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">County</label>
              <select
                value={filters.county}
                onChange={(e) => updateFilter("county", e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">All</option>
                {[
                  "Nairobi",
                  "Mombasa",
                  "Kisumu",
                  "Nakuru",
                  "Kiambu",
                  "Uasin Gishu",
                  "Machakos",
                  "Kakamega",
                  "Meru",
                  "Eldoret",
                ].map((county) => (
                  <option key={county} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsFilterOpen(false)}
              className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-full"
            >
              Close Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
