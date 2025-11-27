import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminSideNav from "../components/Navigation/AdminSideNav";

const Register = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [isAssigned, setIsAssigned] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    managedBy: "",
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleAssign = () => {
    if (!selectedSkill) {
      alert("Please select a valid skill to assign.");
      return;
    }

    // ✅ Show success message
    setIsAssigned(true);

    // ✅ Store message in localStorage
    localStorage.setItem(
      "assignMessage",
      JSON.stringify({ status: "Assigned" })
    );
    // ✅ Navigate after 3 seconds
    setTimeout(() => {
      if (selectedSkill === "Mason") {
        navigate("/assignment2");
      } else if (selectedSkill === "Architect") {
        navigate("/admin");
      } else if (selectedSkill === "Electrical") {
        navigate("/admin");
      }
    }, 3000);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const skill = searchParams.get("skill");
    if (skill) {
      setSelectedSkill(skill);
    }
  }, [location.search]);

  const handleCheckboxChange = (index) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(index)
        ? prevSelectedRows.filter((row) => row !== index)
        : [...prevSelectedRows, index]
    );
  };

  const builders = [
    {
      id: 1,
      date: "2024-03-10",
      skill: "Mason",
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: 2,
      date: "2024-03-11",
      skill: "Architect",
      firstName: "Jane",
      lastName: "Smith",
    },
    {
      id: 3,
      date: "2024-03-12",
      skill: "Electrical",
      firstName: "Mike",
      lastName: "Brown",
    },
    {
      id: 4,
      date: "2024-03-12",
      skill: "Architect",
      firstName: "Alice",
      lastName: "Jones",
    },
    {
      id: 5,
      date: "2024-03-12",
      skill: "Electrical",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 6,
      date: "2024-03-12",
      skill: "Mason",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 7,
      date: "2024-03-12",
      skill: "Architect",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 8,
      date: "2024-03-12",
      skill: "Mason",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 9,
      date: "2024-03-12",
      skill: "Electrical",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 10,
      date: "2024-03-12",
      skill: "Architect",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 11,
      date: "2024-03-12",
      skill: "Architect",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 12,
      date: "2024-03-12",
      skill: "Electrical",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 13,
      date: "2024-03-12",
      skill: "Electrical",
      firstName: "Emma",
      lastName: "Wilson",
    },
  ];

  const filteredData = selectedSkill
    ? builders.filter((entry) => entry.skill === selectedSkill)
    : builders;

    const getBidPrefix = (skill) => {
  switch (skill?.toLowerCase().trim()) {
    case "mason":
      return "F";
    case "architect":
      return "P";
    case "electrical":
      return "C";
    default:
      return "X"; // fallback if skill is unknown
  }
};


  return (
    <div className="flex h-screen bg-white">
      <AdminSideNav />
      <div className="flex-1 flex flex-col transition-all duration-300 relative">
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

        {/* Success Message */}
        {isAssigned && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md border border-green-400">
            Assigned
          </div>
        )}
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm p-4 overflow-x-auto">
          {/* Register Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700">Register</h2>
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
          {/* Table Container */}
          <div className="overflow-x-auto ml-2">
            {" "}
            {/* Adjusted margin to reduce distance from sidebar */}
            <table className="w-full bg-white text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr className="border-b border-gray-100">
                  <th className="border-b border-gray-300 px-4 py-3">Select</th>
                  <th className="border-b border-gray-300 px-4 py-3">ID</th>
                  <th className="border-b border-gray-300 px-4 py-3">B-ID</th>
                  <th className="border-b border-gray-300 px-4 py-3">
                    CreationDate
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3">Skill</th>
                  <th className="border-b border-gray-300 px-4 py-3">
                    First Name
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3">
                    Last Name
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3">
                    National ID
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3">Phone</th>
                  <th className="border-b border-gray-300 px-4 py-3">Email</th>
                  <th className="border-b border-gray-300 px-4 py-3">County</th>
                  <th className="border-b border-gray-300 px-4 py-3">
                    Sub County
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3">
                    Job Time
                  </th>
                </tr>
              </thead>
            <tbody>
  {filteredData.length > 0 ? (
    filteredData.map((builder, index) => (
      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
        <td className="p-4 text-gray-800">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-500"
            checked={selectedRows.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
        </td>
        <td className="px-4 py-3">{builder.id}</td>
        <td className="px-4 py-3">
          {getBidPrefix(builder.skill)}-{String(builder.id).padStart(3, "0")}
        </td>
        <td className="px-4 py-3">{builder.date}</td>
        <td className="px-4 py-3">{builder.skill}</td>
        <td className="px-4 py-3">{builder.firstName}</td>
        <td className="px-4 py-3">{builder.lastName}</td>
        <td className="px-4 py-3">38018271</td>
        <td className="px-4 py-3">0740189463</td>
        <td className="px-4 py-3">micadevelops@gmail.com</td>
        <td className="px-4 py-3">Nairobi</td>
        <td className="px-4 py-3">Westlands</td>
        <td className="px-4 py-3">14:09PM</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="13" className="text-center py-4 text-gray-500">
        No results found
      </td>
    </tr>
  )}
</tbody>

            </table>
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
              </div>
            </div>
            {/* Filter Drawer */}
            {isFilterOpen && (
              <div className="absolute top-0 right-0 h-full w-64 bg-white border-l shadow-lg z-50 p-4">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
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
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => updateFilter("type", e.target.value)}
                    className="w-full border p-2 rounded"
                  >
                    <option value="">All</option>
                    {["Job", "Order"].map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
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
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(false)}
                  className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-full"
                >
                  Close Filters
                </button>
              </div>
            )}
            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
            
              <button
                type="button"
                onClick={handleAssign}
                className="bg-[rgb(0,0,122)] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
