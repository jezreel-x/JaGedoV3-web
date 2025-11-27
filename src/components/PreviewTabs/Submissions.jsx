import { FaTrash, FaFileAlt } from "react-icons/fa";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { useState } from "react";

const ProBillSummary = () => {
  // Example of prefilled uploaded files
  const [files, setFiles] = useState([
    { name: "Project-Brief.pdf" },
    { name: "WorkPlan2024.xlsx" },
    { name: "Estimation.mp4" },
  ]);

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto p-6 mt-32 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Uploaded Attachments</h2>

          {files.length === 0 ? (
            <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <FaFileAlt className="text-5xl mx-auto mb-4" />
              <p className="text-lg">No files available.</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm border">
              <ul className="divide-y divide-gray-200">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <FaFileAlt className="text-blue-600" />
                      <span className="text-gray-700 font-medium">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Remove file"
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
    </>
  );
};

export default ProBillSummary;
