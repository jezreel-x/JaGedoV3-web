import { useNavigate } from "react-router-dom";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { TiTick } from "react-icons/ti";
import NavigationBar from "../../../components/Navigation/NavigationBar";

function JobRequestDetails() {
  const navigate = useNavigate();

  const files = [
    { name: "Document 1.pdf", url: "#" },
    { name: "Image 2.jpg", url: "#" },
  ];

  const handleCompleteRequest = () => {
    navigate("/customer");
  };

  return (
    <>
    <NavigationBar/>
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <h1 className="text-2xl font-bold text-gray-800">REQ 254</h1>
        <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
          Created: 1/5/2025
        </h2>
      </div>

      {/* Job Detail Section */}
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Job Details</h2>
        <div className="flex justify-between gap-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            {[
              { label: "Skill", value: "Mason" },
              { label: "Level", value: "Master" },
              { label: "Location", value: "Kenya, Nairobi, Kasarani" },
              { label: "Start Date", value: "20/05/2025" },
              { label: "End Date", value: "20/05/2025" },
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
            {/* Download Receipt Section */}
            <button
              disabled
              className="flex items-center w-full space-x-2 bg-gray-100 p-4 rounded-lg cursor-not-allowed border border-gray-200 text-gray-400"
            >
              <ArrowDownTrayIcon className="h-6 w-6" />
              <span className="font-medium">Download Receipt</span>
            </button>

            {/* Managed by Jagedo Section */}
            <div className="bg-blue-50 p-4 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900">
                Managed by Jagedo
              </h3>
            </div>

            {/* Package Details Section */}
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
                  Workmanship for a day
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Job Description and Files */}
      <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200 my-6">
        {/* Job Description */}
        <div className="col-span-2 pr-6 border-r border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed">
             Construction of a 10 square meter (10m²) masonry wall using
              standard materials and techniques, suitable for residential or
              light commercial application.
          </p>
        </div>

        {/* Files Table */}
        <div className="col-span-2">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">
                  File Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">
                  Attachment
                </th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="px-6 py-4 border-t border-gray-200">
                    {file.name}
                  </td>
                  <td className="px-6 py-4 border-t border-gray-200 flex items-center gap-4">
                    <a
                      href={file.url}
                      download
                      className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-colors"
                    >
                      <ArrowDownTrayIcon className="w-5 h-5" />
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Complete Request Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleCompleteRequest}
          className="bg-[rgb(0,0,122)] text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Complete Request
        </button>
      </div>
    </section>
    </>
  );
}

export default JobRequestDetails;
