import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import AdminSideNav from "../components/Navigation/AdminSideNav";

const builders = [
  {
    Bid: "B-ID",
    // date: " date",
    skill: "Skill level",
    Grade: "Master",
    FirstName: "First name",
    LastName: "Last name",
    // nationalID: "National ID",
    Phone: "Phone No",
    Email: "Email",
    Status: "Unopened",
    // subcounty: "Subcounty",
  },
  {
    id: "F-001",
    // date: "Feb 1",
    kill: "Mason",
    Grade: "Master",
    firstName: "Edwin",
    lastName: "Sifuna",
    // nationalID: "30604460",
    phone: "072122000",
    email: "edwin@gmail.com",
    Status: "OPened",
    // subcounty: "Westlands",
  },
  {
    id: "F-002",
    // date: "Feb 14",
    skill: "Mason",
    Grade: "Master",
    firstName: "Marvin",
    lastName: "Kimeu",
    // nationalID: "50804900",
    phone: "071819120",
    email: "marvin@gmail.com",
    Status: "Submitted",
    // subcounty: "Westlands",
  },
  {
    id: "F-003",
    // date: "Jan 23",
    skill: "Plumber",
    Grade: "Master",
    firstName: "John",
    lastName: "Kamau",
    // nationalID: "40908712",
    phone: "0733123456",
    email: "john@gmail.com",
    Status: "Unopened",
    // subcounty: "Ruiru",
  },
  {
    id: "F-004",
    // date: "Feb 10",
    skill: "Electrician",
    Grade: "Master",
    firstName: "Dennis",
    lastName: "Omondi",
    // nationalID: "27845900",
    phone: "0748123499",
    email: "dennis@gmail.com",
    Status: "Kisumu",
    // subcounty: "Nyando",
  },
  {
    id: "F-005",
    // date: "Jan 5",
    skill: "Carpenter",
    Grade: "Master",
    firstName: "Samson",
    lastName: "Mutua",
    // nationalID: "30987654",
    phone: "0700112233",
    email: "samson@gmail.com",
    Status: "Submitted",
    // subcounty: "Mwala",
  },
  {
    id: "F-006",
    // date: "Mar 2",
    skill: "Painter",
    Grade: "Master",
    firstName: "Brian",
    lastName: "Otieno",
    // nationalID: "50123876",
    phone: "0722334455",
    email: "brian@gmail.com",
    Status: "Opened",
    // subcounty: "Likoni",
  },
  {
    id: "F-007",
    // date: "Mar 5",
    skill: "Welder",
    Grade: "Master",
    firstName: "Kelvin",
    lastName: "Mwangi",
    // nationalID: "40902233",
    phone: "0711002233",
    email: "kelvin@gmail.com",
    Status: "Unopened",
    // subcounty: "Naivasha",
  },
  {
    id: "F-001",
    // date: "April 1",
    skill: "Mason",
    Grade: "Master",
    firstName: "Stephen",
    lastName: "Ojiambo",
    // nationalID: "30604460",
    phone: "072122000",
    email: "ojiambo@gmail.com",
    Status: "Submitted",
    // subcounty: "Westlands",
  },
];

const AssignmentScreen = () => {
  const [ setIsFilterOpen] = useState(false);
const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState();

  const jobSkill = "Mason";

  const filteredBuilders = builders
    .slice(1)
    .filter((builder) => builder.skill === jobSkill);

  // const handleClick = () => {
  //   navigate("/admin-view-assigned-job");
  // };

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
  <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm p-4 overflow-x-auto">
 {/* Register Section */}
 <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700">Bids Invitation Register</h2>
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
      {/* Job Details */}
      {/* <div className="p-5 rounded-lg mb-4 bg-gray-50 shadow-md border border-gray-300">
        <div
          role="button"
          tabIndex={0}
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShowJobDetails(!showJobDetails)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowJobDetails(!showJobDetails);
            }
          }}
        >
          <h2 className="text-lg font-bold text-gray-800">Job Details</h2>
          <span className="text-gray-600 text-xl">
            {showJobDetails ? "▲" : "▼"}
          </span>
        </div>

        {showJobDetails && (
          <div className="mt-3 text-gray-700 font-medium grid grid-cols-2 gap-2">
            <span>
              <strong>Location:</strong> Githurai
            </span>
            <span>
              <strong>No of Builders:</strong> 3
            </span>
            <span>
              <strong>Skill:</strong> {jobSkill}
            </span>
            <span>
              <strong>Level:</strong> {jobSkill}
            </span>
            <span>
              <strong>Closing Date:</strong> 20/5/2025
            </span>
          </div>
        )}
      </div> */}

      {/* Recall Button */}
      {/* <button
        type="button"
        className="mb-4 bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900"
      >
        Recall
      </button> */}

      {/* Register Section */}
      {/* <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">Register</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-lg shadow-sm w-56"
        />
      </div> */}

      {/* Table */}
      <div className="overflow-x-auto ml-10"> {/* Adjusted margin to reduce distance from sidebar */}
  <table className="w-full bg-white text-md">
  <thead className="bg-gray-100 text-gray-600">
  <tr className="border-b border-gray-100">
              {Object.keys(builders[0]).map((header, index) => (
                <th
                  key={index}
                 className="p-4 text-left font-semibold whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredBuilders.map((builder, index) => (
              <tr key={index}>
              {Object.values(builder).map((value, i) => (
                <td key={i} className="p-8 text-gray-800">
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
                className="border rounded px-2 py-1"
              >
                {[5, 10, 20, 30].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>{/* Recall Button */}
      <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mb-4 bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 inline-flex items-center space-x-2"
      >
        <span>Recall</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1 text-sm text-gray-700">
            <button
              onClick={() => {
                setOpen(false);
                console.log("Extend clicked");
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Extend
            </button>
            {/* <button
              onClick={() => {
                setOpen(false);
                console.log("Recall clicked");
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Recall
            </button> */}
          </div>
        </div>
      )}
    </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
              <span>Page 1{rowsPerPage} of {filteredBuilders.length}</span>
            </div>
          </div>

      {/* Complete Button */}
      {/* <button
        type="button"
        onClick={handleClick}
        className="mt-6 bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900"
      >
        Complete
      </button> */}
       
    </div>
    </div>
    </div>
    
  );
};

export default AssignmentScreen;
