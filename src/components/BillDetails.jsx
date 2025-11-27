import { useState } from "react";

import { useParams } from "react-router-dom";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaVideo} from "react-icons/fa";

const BillDetails = () => {

    const [fileName, setFileName] = useState("");
    const [,setFiles] = useState([]);
  

    
  
  const { id } = useParams();

  const handleFileUpload = (event) => {
    if (!fileName.trim()) {
      alert("Please enter a file name before uploading.");
      return;
    }

    const uploadedFiles = Array.from(event.target.files);
    const newFiles = uploadedFiles.map((file) => ({
      name: fileName || file.name,
      raw: file,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    setFileName(""); // Clear the file name input after upload
    event.target.value = null; // Reset file input
  };

  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 mb-4 text-lg font-semibold border-b border-gray-300">
        <span>Bill No. {id}</span>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-50 text-gray-700">
              <th className="border-b border-gray-200 px-3 py-2">No</th>
              <th className="border-b border-gray-200 px-3 py-2">Description</th>
              <th className="border-b border-gray-200 px-3 py-2">Rate</th>
              <th className="border-b border-gray-200 px-3 py-2">UOM</th>
              <th colSpan="2" className="border-b border-gray-200 px-3 py-2 text-center">Budget</th>
              <th colSpan="2" className="border-b border-gray-200 px-3 py-2 text-center">Actual</th>
            </tr>
            <tr className="bg-gray-50 text-gray-600">
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2" />
  <th className="border-b border-gray-200 px-3 py-2 text-center">QTY</th>
  <th className="border-b border-gray-200 px-3 py-2 text-center">Amount</th>
  <th className="border-b border-gray-200 px-3 py-2 text-center">QTY</th>
  <th className="border-b border-gray-200 px-3 py-2 text-center">Amount</th>
</tr>
          </thead>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border-b border-gray-200 px-3 py-2">1</td>
              <td className="border-b border-gray-200 px-3 py-2">Deal Done</td>
              <td className="border-b border-gray-200 px-3 py-2">100</td>
              <td className="border-b border-gray-200 px-3 py-2">Unit</td>
              <td className="border-b border-gray-200 px-3 py-2">5</td>
              <td className="border-b border-gray-200 px-3 py-2">500</td>
              <td className="border-b border-gray-200 px-3 py-2">6</td>
              <td className="border-b border-gray-200 px-3 py-2">600</td>
            </tr>

            {/* Sub Total Row */}
            <tr className="text-right font-semibold text-gray-800">
              <td colSpan="6" className="p-3"/>
              <td colSpan="2" className="p-3 text-right">
                <span className="mr-3">Sub Total:</span>
                <input
                  type="text"
                  className="border border-gray-300 p-2 text-center w-24 rounded-lg shadow-sm"
                  placeholder=""
                />
                <input
                  type="text"
                  className="border border-gray-300 p-2 text-center w-24 rounded-lg shadow-sm ml-3"
                  placeholder=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Attachments */}
       {/* Files Table */}
      
              <div className="space-y-2 col-span-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Attachments</h2>
      
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
                  <label
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
                  </label>
                </div>
      
               
              </div>
    </div>
  );
};

export default BillDetails;
