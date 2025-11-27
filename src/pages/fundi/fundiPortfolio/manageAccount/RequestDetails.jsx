import { useNavigate } from "react-router-dom";

function RequestDetails() {
  const navigate = useNavigate();
  // const { id } = useParams(); Not used

  const request = {
    requestDate: "01-02-2025",
    startDate: "12-02-2025",
    endDate: "24-02-2025",
    status: "Assigned",
    manager: "jagedo",
    location: "Utawala, Nairobi",
  };

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold text-[rgb(0,0,122)] mb-4">View Details</h2>
      <div className="bg-white shadow-lg p-6 rounded-lg space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <p><strong>Req date:</strong> {request.requestDate}</p>
            <p><strong>Start date:</strong> {request.startDate}</p>
            <p><strong>Managed by:</strong> {request.manager}</p>
            <p><strong>Location:</strong> {request.location}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p><strong>Status:</strong> {request.status}</p>
            <p><strong>End date:</strong> {request.endDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">Customer Attachments</div>
          <div className="p-4 border rounded-lg">Admin Attachments</div>
          <div className="p-4 border rounded-lg">Notes</div>
        </div>

        <div className="flex justify-center space-x-4">
          <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Accept Job
          </button>
          <button type="button" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Decline Job
          </button>
          <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestDetails;
