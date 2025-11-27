import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

function RequestsTable() {
  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      requestDate: "01-02-2025",
      startDate: "12-02-2025",
      endDate: "24-02-2025",
      status: "Assigned",
      manager: "jagedo",
      location: "Utawala, Nairobi",
    },
    {
      id: 2,
      requestDate: "05-02-2025",
      startDate: "15-02-2025",
      endDate: "28-02-2025",
      status: "Pending",
      manager: "John Doe",
      location: "Westlands, Nairobi",
    },
  ];

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold text-[rgb(0,0,122)] mb-4">Job Requests</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-[rgb(0,0,122)] text-white">
            <tr>
              <th className="p-3 text-left">Req Date</th>
              <th className="p-3 text-left">Start Date</th>
              <th className="p-3 text-left">End Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Manager</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-100 transition">
                <td className="p-3">{request.requestDate}</td>
                <td className="p-3">{request.startDate}</td>
                <td className="p-3">{request.endDate}</td>
                <td className="p-3">
                  <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                    {request.status}
                  </span>
                </td>
                <td className="p-3">{request.manager}</td>
                <td className="p-3">{request.location}</td>
                <td className="p-3 text-center">
                  <button type="button"
                    onClick={() => navigate(`/request-details/${request.id}`)}
                    className="flex items-center px-3 py-1 text-white bg-[rgb(0,0,122)] rounded-md hover:bg-opacity-80 transition"
                  >
                    View Details 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestsTable;
