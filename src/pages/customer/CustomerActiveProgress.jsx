import { useState } from "react";

const CustomerActiveProgress = () => {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Main Card Wrapper */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800">
          Customer Active Progress
        </h2>

        {/* Navigation Tabs */}
        <nav className="flex space-x-6 border-b pb-4 text-lg font-medium">
          <button type="button" className="px-4 py-2 focus:outline-none">
            Builder
          </button>
          <button type="button" className="px-4 py-2 focus:outline-none">
            Customer
          </button>
          <button type="button" className="px-4 py-2 focus:outline-none">
            Progress
          </button>
          <button type="button" className="px-4 py-2 focus:outline-none">
            Project Details
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-[rgb(0,0,122)] text-white rounded-md shadow"
          >
            Quote
          </button>
        </nav>

        {/* Technical & Financial Progress */}
        <div
          className={`shadow rounded-lg p-6 text-center text-lg font-semibold cursor-pointer transition-all ${activeTab === "technical" ? "bg-[#00007A] text-white" : "bg-gray-100 text-green-600"}`}
          role="button"
          onClick={() => setActiveTab("technical")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setActiveTab("technical");
            }
          }}
          tabIndex={0}
        >
          Technical: 75%
        </div>
        {/* Financial Progress */}
        <div
  className={`shadow rounded-lg p-6 text-center text-lg font-semibold cursor-pointer transition-all ${activeTab === "financial" ? "bg-[#00007A] text-white" : "bg-gray-100 text-[#00007A]"}`}
  role="button"
  tabIndex={0}
  onClick={() => setActiveTab("financial")}
>
  Financial: 60%
</div>

        {/* Progress Table */}
        <div>
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-800 text-sm">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Activity</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                  Planned
                </th>
                <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                  Actual
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Gantt Chart
                </th>
                <th className="border border-gray-300 px-4 py-2">Remarks</th>
              </tr>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="border border-gray-300 px-4 py-2" />
                <th className="border border-gray-300 px-4 py-2" />
                <th className="border border-gray-300 px-4 py-2" />
                <th className="border border-gray-300 px-4 py-2">Start Date</th>
                <th className="border border-gray-300 px-4 py-2">
                  Closing Date
                </th>
                <th className="border border-gray-300 px-4 py-2">Start Date</th>
                <th className="border border-gray-300 px-4 py-2">
                  Closing Date
                </th>
                <th className="border border-gray-300 px-4 py-2"> &nbsp;</th>
                <th className="border border-gray-300 px-4 py-2"> &nbsp;</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[1, 2, 3].map((num) => (
                <tr key={num} className="text-center even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{num}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Activity {num}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {num * 20}%
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    2025-03-01
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    2025-03-15
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    2025-03-02
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    2025-03-16
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="relative w-full h-6 bg-gray-200 rounded">
                      <div
                        className="absolute top-0 left-0 h-6 bg-green-500 rounded"
                        style={{ width: `${num * 20}%` }}
                      />
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {" "}
                    ping ping{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerActiveProgress;
