
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Register = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");

  const location = useLocation();

  // ✅ Extract query param on initial render
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
    { id: 1, date: "2024-03-10", skill: "Mason", firstName: "John", lastName: "Doe" },
    { id: 2, date: "2024-03-11", skill: "Plumber", firstName: "Jane", lastName: "Smith" },
    { id: 3, date: "2024-03-12", skill: "Electrician", firstName: "Mike", lastName: "Brown" },
    { id: 4, date: "2024-03-12", skill: "Electrician", firstName: "Alice", lastName: "Jones" },
    { id: 5, date: "2024-03-12", skill: "Carpenter", firstName: "Emma", lastName: "Wilson" },
    { id: 6, date: "2024-03-12", skill: "Mason", firstName: "Emma", lastName: "Wilson" },
    { id: 7, date: "2024-03-12", skill: "Carpenter", firstName: "Emma", lastName: "Wilson" },
    { id: 8, date: "2024-03-12", skill: "Mason", firstName: "Emma", lastName: "Wilson" },
    { id: 9, date: "2024-03-12", skill: "Carpenter", firstName: "Emma", lastName: "Wilson" },
    { id: 10, date: "2024-03-12", skill: "Carpenter", firstName: "Emma", lastName: "Wilson" },
    { id: 11, date: "2024-03-12", skill: "Mason", firstName: "Emma", lastName: "Wilson" },
  ];

  const filteredData = selectedSkill
    ? builders.filter((entry) => entry.skill === selectedSkill)
    : builders;

  return (
    <div className="max-w-10xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Register Page</h2>

      {/* Skill Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 text-gray-700 font-semibold">Filter by Skill:</label>
        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">All</option>
          <option value="Mason">Mason</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Carpenter">Carpenter</option>
        </select>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border-b border-gray-300 px-4 py-3">Select</th>
              <th className="border-b border-gray-300 px-4 py-3">ID</th>
              <th className="border-b border-gray-300 px-4 py-3">B-ID</th>
              <th className="border-b border-gray-300 px-4 py-3">CreationDate</th>
              <th className="border-b border-gray-300 px-4 py-3">Skill</th>
              <th className="border-b border-gray-300 px-4 py-3">First Name</th>
              <th className="border-b border-gray-300 px-4 py-3">Last Name</th>
              <th className="border-b border-gray-300 px-4 py-3">National ID</th>
              <th className="border-b border-gray-300 px-4 py-3">Phone</th>
              <th className="border-b border-gray-300 px-4 py-3">Email</th>
              <th className="border-b border-gray-300 px-4 py-3">County</th>
              <th className="border-b border-gray-300 px-4 py-3">Sub County</th>
              <th className="border-b border-gray-300 px-4 py-3">Job Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((builder, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3 text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-500"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="px-4 py-3">{builder.id}</td>
                  <td className="px-4 py-3">F-{String(builder.id).padStart(3, "0")}</td>
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

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
  <button type="button" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
    Save
  </button>
  <button type="button" className="bg-[rgb(0,0,122)] hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
    Assign
  </button>
</div>
      </div>
    </div>
  );
};

export default Register;
