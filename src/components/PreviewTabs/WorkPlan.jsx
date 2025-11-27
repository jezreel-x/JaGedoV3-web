
import {  Suspense} from "react";
import { useNavigate } from "react-router-dom";
// import QuoteNavBar from "./QuoteNavBar";

import NavigationBar from "../../components/Navigation/NavigationBar";



const ProBillSummary = () => {
  const navigate = useNavigate();

  const rows = [
    {
      id: "B001",
      name: "Briefing",
      startDate: "15-05-2025",
      endDate: "15-06-2025",
      duration: "2",
    },
    {
      id: "B002",
      name: "Mobilization",
      startDate: "15-05-2025",
      endDate: "15-06-2025",
      duration: "2",
    },
  ];

  // const [saveMessage, setSaveMessage] = useState("");

 

  return (
    <section className="container mx-auto mt-32 px-4">

      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      {/* <QuoteNavBar /> */}

      {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Work Plan</h2> */}

      <div className="bg-white rounded-lg p-4 shadow transition-all my-5">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-700 font-medium">ID</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Bill name</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Expected Start Date</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Expected End Date</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-800">{row.id}</td>
                  <td className="px-4 py-2 text-gray-800">{row.name}</td>
                  <td className="px-4 py-2 text-gray-800">{row.startDate}</td>
                  <td className="px-4 py-2 text-gray-800">{row.endDate}</td>
                  <td className="px-4 py-2 text-gray-800">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 space-x-4">
        <button
          onClick={() => navigate("/professional-portal/jobSpecification2")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

     

        <button
          onClick={() => navigate("/professional-quote-creation2")}
          style={{ backgroundColor: "rgb(0, 0, 122)" }}
          className="hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProBillSummary;
