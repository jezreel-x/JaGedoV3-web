import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlinePaperClip } from "react-icons/ai";
import {  FaTrash, FaFileAlt } from "react-icons/fa";

import QuoteNavBar2 from "./QuoteNavBar2";
import NavigationBar from "../../../../components/Navigation/NavigationBar";

// Tab content components
import JobSpecification from "../../../../components/PreviewTabs/JobSpecification";
import WorkPlan from "../../../../components/PreviewTabs/WorkPlan";
import Bids from "../../../../components/PreviewTabs/Bid";
import OtherExpenses from "../../../../components/PreviewTabs/OtherExpenses";
import GrandSummary from "../../../../components/PreviewTabs/GrandSummary";
import PaymentBreakdown from "../../../../components/PreviewTabs/PaymentBreakdown";
import Submissions from "../../../../components/PreviewTabs/Submissions";

const tabs = [
  { name: "Job Specification", key: "specification" },
  { name: "Work Plan", key: "workplan" },
  { name: "Bids", key: "bids" },
  { name: "Other Expenses", key: "expenses" },
  { name: "Grand Summary", key: "grandSummary" },
  { name: "Payment Breakdown", key: "payment" },
  { name: "Submissions", key: "submissions" },
];

const ProBillSummary = () => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [activeTab, setActiveTab] = useState("specification");

  const navigate = useNavigate();

  const handleClick = () => {
    if (isChecked) {
      navigate("/contractor-portal/quotations");
    }
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Lazy-loaded NavigationBar */}
      <NavigationBar />
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">
        <QuoteNavBar2 />

        <div className="bg-white rounded-lg p-4 border border-gray-200 my-5">
          <div className="overflow-x-auto">
            {/* Files Table */}

            <div className="space-y-2 col-span-2">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Attachments
              </h2>

              <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2 bg-gray-100 gap-2">
                <input
                  type="text"
                  placeholder="Enter file name"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-blue-300 bg-white"
                />
                {/* File Input */}
                <label
                  className={`cursor-pointer flex items-center ${!fileName.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
                  title={!fileName.trim() ? "Enter a file name first" : ""}
                >
                  <AiOutlinePaperClip className="text-gray-700 text-2xl" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    multiple
                    disabled={!fileName.trim()}
                  />
                </label>
                {/* Video Upload */}
                {/* <label
                  className={`cursor-pointer flex items-center ${!fileName.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
                  title={!fileName.trim() ? "Enter a file name first" : ""}
                >
                  <FaVideo className="text-red-500 text-xl" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    multiple
                    disabled={!fileName.trim()}
                  />
                </label> */}
              </div>

              {/* Uploaded Files Section */}
              <div className="min-h-60 bg-gray-100 px-4 py-6 rounded-md">
                {files.length === 0 ? (
                  <div className="text-center text-gray-500">
                    <FaFileAlt className="text-4xl mb-2" />
                    <p>No files uploaded</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-gray-800 font-semibold mb-1">
                      Uploaded Files:
                    </h3>
                    <ul className="bg-gray-100 p-2 rounded-md space-y-2">
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm"
                        >
                          <span className="text-gray-700">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Agreement Section */}
            <div className="mt-8 flex flex-col items-center bg-white p-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  I agree to the{" "}
                  <span className="font-semibold text-blue-900">
                    Contractor Agreement
                  </span>
                </span>
              </label>

              <p className="text-sm text-gray-600 mt-4 mb-6 text-center max-w-md">
                Failure to adhere to the contractor agreement and stipulated
                timelines will lead to
                <span className="font-semibold text-red-600">
                  {" "}
                  account suspension
                </span>
                .
              </p>

              <div className="flex gap-4 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowPreview(true);
                    setActiveTab("specification");
                  }}
                  className="w-40 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-300"
                >
                  Preview
                </button>

                <button
                  type="button"
                  onClick={handleClick}
                  className={`w-48 bg-blue-900 text-white py-3 rounded-lg font-medium transition-all duration-300 ${
                    !isChecked
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-800 hover:shadow-lg active:scale-95"
                  }`}
                  disabled={!isChecked}
                >
                  Submit Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        {/* Inline Floating Modal */}
        {showPreview && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-30">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 relative">
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
              >
                ×
              </button>
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
                Preview Submission
              </h2>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-4 overflow-x-auto">
                <nav className="flex space-x-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-2 whitespace-nowrap border-b-2 ${
                        activeTab === tab.key
                          ? "border-blue-600 text-blue-600 font-medium"
                          : "border-transparent text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="bg-gray-50 rounded-md text-gray-700 text-sm p-4 h-64 overflow-y-auto">
                {activeTab === "specification" && <JobSpecification />}
                {activeTab === "workplan" && <WorkPlan />}
                {activeTab === "bids" && <Bids />}
                {activeTab === "expenses" && <OtherExpenses />}
                {activeTab === "grandSummary" && <GrandSummary />}
                {activeTab === "payment" && <PaymentBreakdown />}
                {activeTab === "submissions" && <Submissions />}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProBillSummary;
