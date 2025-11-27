import { useNavigate } from "react-router-dom";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { TiTick } from "react-icons/ti";
import NavigationBar from "../../../components/Navigation/NavigationBar";
import AdminViewFundiActiveNav from "../../../pages/customer/customerLanding/AdminViewFundiActiveNav";

function JobRequestDetails() {
  const files = [
    { name: "Document 1.pdf", url: "#" },
    { name: "Image 2.jpg", url: "#" },
  ];

  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <AdminViewFundiActiveNav />
      <section className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 space-y-4 sm:space-y-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            REQ 254
          </h1>
          <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
            Created: 1/5/2025
          </h2>
        </div>

        {/* Job Details */}
        <div className="p-4 sm:p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Job Details
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Left Column */}
            <div className="md:w-1/2 space-y-4">
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
                  <span className="font-semibold text-gray-800 w-28 text-sm">
                    {item.label}:
                  </span>
                  <span className="text-gray-700 text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 space-y-4 md:pl-8 md:border-l border-gray-200">
              {/* Download Receipt */}
              <button
                disabled
                className="flex items-center w-full space-x-2 bg-green-50 p-4 rounded-lg cursor-not-allowed hover:bg-gray-50 transition border border-gray-200"
              >
                <ArrowDownTrayIcon className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-medium text-sm">
                  Download Receipt
                </span>
              </button>

              {/* Managed by */}
              <div className="bg-blue-50 p-4 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">
                  Managed by Jagedo
                </h3>
              </div>

              {/* Package Details */}
              <div className="bg-blue-50 p-4 rounded-2xl shadow-md mt-4 border border-gray-200">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                  Package details
                </h3>
                <p className="text-base font-semibold text-gray-800">
                  Jagedo Oversees
                </p>
                <ul className="space-y-2 mt-4 text-gray-700 text-sm">
                  {[
                    "Arrival time",
                    "Scope budget",
                    "Workmanship for a day",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center">
                      <TiTick className="text-green-500 mr-2 text-xl" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Description and Files */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 sm:p-8 shadow-lg rounded-xl border border-gray-200 my-6">
          {/* Description */}
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pr-0 md:pr-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Construction of a 10 square meter (10m²) masonry wall using
              standard materials and techniques, suitable for residential or
              light commercial application.
            </p>
          </div>

          {/* Files Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[300px] border-collapse rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">
                    File Name
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">
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
                    <td className="px-4 py-3 border-t border-gray-200 break-words">
                      {file.name}
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200">
                      <a
                        href={file.url}
                        download
                        className="text-blue-900 hover:text-blue-700 flex items-center gap-2"
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

        <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
          {/* admin notes */}
          <div className="col-span-2 pr-6 border-r border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Admin Notes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Construct a masonry wall with a total area of 10 square meters.
              Confirm exact dimensions and location on-site with the supervisor
              before starting. Ensure all tools are returned clean and in
              working condition after the job. Report any material shortages or
              site issues immediately.
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
                      <a
                        href={file.url}
                        download
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {/* <PaperClipIcon className="w-5 h-5" /> */}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/customer/new")}
            className="bg-[rgb(0,0,122)] text-white px-6 py-2 rounded-md shadow hover:bg-[rgb(0,0,100)] transition-all"
          >
            Back
          </button>
        </div>
      </section>
    </>
  );
}

export default JobRequestDetails;
