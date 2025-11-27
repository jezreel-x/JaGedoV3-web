import { lazy, Suspense } from "react";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { TiTick } from "react-icons/ti";
import BuilderPortalActiveJobTabs from "../../../pages/customer//customerLanding/BuilderPortalActiveJobTabs";

const NavigationBar = lazy(
  () => import("../../../components/Navigation/NavigationBar")
);

function JobRequestDetails() {
  const files = [
    { name: "Document 1.pdf", url: "#" },
    { name: "Image 2.jpg", url: "#" },
    // { name: "Report 3.docx", url: "#" },
    // { name: "Presentation 4.pptx", url: "#" },
    // { name: "Spreadsheet 5.xlsx", url: "#" },
  ];

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <BuilderPortalActiveJobTabs />
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg relative border border-gray-200">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
          <h1 className="text-2xl font-bold text-gray-800">REQ 264</h1>
          <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
            Created: 12/05/2025
          </h2>
        </div>

        {/* Job Detail Section */}
        <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800  mb-4">Job Details</h2>

          <div className="flex justify-between gap-8">
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
            <div className="w-1/2 pl-8 border-l border-gray-200 space-y-4">
              {/* Download Receipt Section */}
              <div className="flex items-center space-x-2 bg-green-50 p-4 rounded-lg cursor-pointer hover:bg-green-100 transition border border-gray-200">
                {/* Download Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-6V4m-6 4l3 3 3-3"
                  />
                </svg>
                <span className="text-green-700 font-medium">
                  Download Receipt
                </span>
              </div>

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
                    Quality through a peer review & professionalism
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* job description */}

        <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
          {/* Job Description */}
          <div className="col-span-2 pr-6 border-r border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Job Description
            </h2>
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
        <br className="my-6 border-gray-200" />

        {/* admin notes */}
        <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobRequestDetails;
