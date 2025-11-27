import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
// import QuoteNavBar from "./QuoteNavBar";
import NavigationBar from "../../components/Navigation/NavigationBar";


function JobRequestDetails() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const handleSaveDraft = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000); // Hide after 3 seconds
  };

  const handleNext = () => {
    navigate("/professional-workplan");
  };

  return (
    <>
    <NavigationBar/>
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
      
      {/* <QuoteNavBar /> */}

      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <h1 className="text-2xl font-bold text-gray-800">REQ 264</h1>
        <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
          Created: 12/05/2025
        </h2>
      </div>

      {/* Job Detail Section */}
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Job Details</h2>

        <div className="flex justify-between gap-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            {[
              { label: "Profession", value: "Architect" },
              { label: "Level", value: "Senior" },
              { label: "Location", value: "Kenya, Nairobi, Kasarani" },
              { label: "Start Date", value: "20/04/2025" },
              { label: "End Date", value: "12/06/2025" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200"
              >
                <span className="font-semibold text-gray-800 w-24">
                  {item.label}:
                </span>
                <span className="text-gray-700">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-1/2 pl-8 border-l border-gray-200 space-y-4">
            {/* Download Receipt */}
              <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg cursor-not-allowed border border-gray-200 opacity-60">
  {/* Download Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-6V4m-6 4l3 3 3-3"
    />
  </svg>
  <span className="text-gray-600 font-medium">Download Receipt</span>
</div>

            {/* Managed By */}
            <div className="bg-blue-50 p-4 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900">
                Managed by Jagedo
              </h3>
            </div>

            {/* Package Details */}
            <div className="bg-blue-50 p-4 rounded-2xl shadow-md mt-4 border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Package details
              </h3>
              <p className="text-lg font-semibold text-gray-800">
                Jagedo Oversees
              </p>
              <ul className="space-y-3 mt-4 text-gray-700">
                <li className="flex items-center">
                  <TiTick className="text-green-500 mr-2 text-xl" />
                  Arrival time
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500 mr-2 text-xl" />
                  Scope budget
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500 mr-2 text-xl" />
                  Quality through a peer review & professionalism
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons and Saved Message */}
        <div className="mt-8 flex justify-end items-center space-x-4">
          {saved && (
            <span className="text-green-600 font-medium">
              ✅ Saved successfully!
            </span>
          )}
          <button
            onClick={handleSaveDraft}
          className="bg-blue-600 text-white px-4 py-2 rounded"
            
          >
            Save as Draft
          </button>
          <button
          type="button"
            onClick={handleNext}
            style={{ backgroundColor: "rgb(0, 0, 122)" }}
            className="hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default JobRequestDetails;
