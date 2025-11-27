import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Register = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedCustomerType, setSelectedCustomerType] = useState(""); // NEW: Added state for customer type
  const [registerType, setRegisterType] = useState("Builders"); // NEW: "Customers" or "Builders"

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const skill = searchParams.get("skill");
    if (skill) setSelectedSkill(skill);
  }, [location.search]);

  const handleCheckboxChange = (index) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(index)
        ? prevSelectedRows.filter((row) => row !== index)
        : [...prevSelectedRows, index]
    );
  };

  // Sample Data
  const builders = [
    {
      id: 1,
      date: "2024-03-10",
      skill: "Fundi",
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: 2,
      date: "2024-03-11",
      skill: "Professional",
      firstName: "Jane",
      lastName: "Smith",
    },
    {
      id: 3,
      date: "2025-03-12",
      skill: "Contractor",
      firstName: "Mike",
      lastName: "Brown",
    },
    {
      id: 4,
      date: "2025-03-12",
      skill: "Hardware",
      firstName: "Alice",
      lastName: "Jones",
    },
    {
      id: 5,
      date: "2025-03-12",
      skill: "Fundi",
      firstName: "Emma",
      lastName: "Wilson",
    },
    {
      id: 6,
      date: "2025-03-12",
      skill: "Contractor",
      firstName: "Sarah",
      lastName: "Taylor",
    },
    {
      id: 7,
      date: "2025-03-12",
      skill: "Professional",
      firstName: "James",
      lastName: "Williams",
    },
  ];

  const customers = [
    {
      id: 1,
      creationDate: "2024-03-10",
      customerType: "Individual", // NEW: Added customerType field
      firstName: "John",
      lastName: "Doe",
      nationalId: "38018271",
      phone: "0740189463",
      email: "john.doe@example.com",
      county: "Nairobi",
      subCounty: "Westlands",
    },
    {
      id: 2,
      creationDate: "2024-03-11",
      customerType: "Organization", // NEW: Added customerType field
      firstName: "Jane",
      lastName: "Smith",
      nationalId: "38018272",
      phone: "0740189464",
      email: "jane.smith@example.com",
      county: "Kiambu",
      subCounty: "Thika",
    },
    {
      id: 3,
      creationDate: "2024-03-12",
      customerType: "Individual", // NEW: Added customerType field
      firstName: "Mike",
      lastName: "Brown",
      nationalId: "38018273",
      phone: "0740189465",
      email: "mike.brown@example.com",
      county: "Mombasa",
      subCounty: "Nyali",
    },
    {
      id: 4,
      creationDate: "2024-03-13",
      customerType: "Organization", // NEW: Added customerType field
      firstName: "Alice",
      lastName: "Jones",
      nationalId: "38018274",
      phone: "0740189466",
      email: "alice.jones@example.com",
      county: "Kisumu",
      subCounty: "Kisumu Central",
    },
    {
      id: 5,
      creationDate: "2024-03-14",
      customerType: "Individual", // NEW: Added customerType field
      firstName: "Emma",
      lastName: "Wilson",
      nationalId: "38018275",
      phone: "0740189467",
      email: "emma.wilson@example.com",
      county: "Nakuru",
      subCounty: "Nakuru East",
    },
  ];

  const filteredBuilders = selectedSkill
    ? builders.filter((entry) => entry.skill === selectedSkill)
    : builders;

  const filteredCustomers = selectedCustomerType
    ? customers.filter((customer) => customer.customerType === selectedCustomerType)
    : customers;

  return (
    <div className="max-w-10xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Register Page
      </h2>

      {/* Dropdown for Type */}
      <div className="mb-4 flex items-center gap-4">
        <label className="font-semibold text-gray-700">Select Register:</label>
        <select
          value={registerType}
          onChange={(e) => setRegisterType(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="Builders">Builders</option>
          <option value="Customers">Customers</option>
        </select>
      </div>

      {/* Skill Filter Only for Builders */}
      {registerType === "Builders" && (
        <div className="mb-4">
          <label className="mr-2 text-gray-700 font-semibold">
            Filter by Skill:
          </label>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">All</option>
            <option value="Fundi">Fundi</option>
            <option value="Professional">Professional</option>
            <option value="Contractor">Contractor</option>
            <option value="Hardware">Hardware</option>
          </select>
        </div>
      )}

      {/* Customer Type Filter Only for Customers */}
      {registerType === "Customers" && (
        <div className="mb-4">
          <label className="mr-2 text-gray-700 font-semibold">
            Filter by Customer Type:
          </label>
          <select
            value={selectedCustomerType}
            onChange={(e) => setSelectedCustomerType(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">All</option>
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm bg-white rounded-lg shadow-md">
          <thead>
            {registerType === "Builders" ? (
              <tr className="bg-gray-100 text-gray-700">
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
                  Profile Status
                </th>
              </tr>
            ) : (
              <tr className="bg-gray-100 text-gray-700">
                <th className="border-b border-gray-300 px-4 py-3">Select</th>
                <th className="border-b border-gray-300 px-4 py-3">ID</th>
                <th className="border-b border-gray-300 px-4 py-3">C-ID</th>
                <th className="border-b border-gray-300 px-4 py-3">
                  CreationDate
                </th>
                <th className="border-b border-gray-300 px-4 py-3">
                  Customer Type
                </th>
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
              </tr>
            )}
          </thead>
          <tbody>
  {registerType === "Builders" && (
    filteredBuilders.length > 0 ? (
      filteredBuilders.map((builder, index) => (
        <tr
          key={builder.id}
          className="border-b border-gray-200 hover:bg-gray-50 transition"
        >
          <td className="px-4 py-3 text-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-500"
              checked={selectedRows.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
          </td>
          <td className="px-4 py-3">{builder.id}</td>
          <td className="px-4 py-3">{builder.skill}</td>
          <td className="px-4 py-3">{builder.firstName}</td>
          <td className="px-4 py-3">{builder.lastName}</td>
          <td className="px-4 py-3">1234567890</td>
          <td className="px-4 py-3">0740189463</td>
          <td className="px-4 py-3">example@gmail.com</td>
          <td className="px-4 py-3">Nairobi</td>
          <td className="px-4 py-3">Westlands</td>
          <td className="px-4 py-3">Active</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="12" className="text-center py-4 text-gray-500">
          No builders found.
        </td>
      </tr>
    )
  )}

  {registerType === "Customers" && (
    filteredCustomers.length > 0 ? (
      filteredCustomers.map((customer, index) => (
        <tr
          key={customer.id}
          className="border-b border-gray-200 hover:bg-gray-50 transition"
        >
          <td className="px-4 py-3 text-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-500"
              checked={selectedRows.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
          </td>
          <td className="px-4 py-3">{customer.id}</td>
          <td className="px-4 py-3">
            C-{String(customer.id).padStart(3, "0")}
          </td>
          <td className="px-4 py-3">{customer.creationDate}</td>
          <td className="px-4 py-3">{customer.customerType}</td>
          <td className="px-4 py-3">{customer.firstName}</td>
          <td className="px-4 py-3">{customer.lastName}</td>
          <td className="px-4 py-3">{customer.nationalId}</td>
          <td className="px-4 py-3">{customer.phone}</td>
          <td className="px-4 py-3">{customer.email}</td>
          <td className="px-4 py-3">{customer.county}</td>
          <td className="px-4 py-3">{customer.subCounty}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="12" className="text-center py-4 text-gray-500">
          No customers found.
        </td>
      </tr>
    )
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Register;
