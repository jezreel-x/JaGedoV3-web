import { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import {  FaTrash, FaFileAlt } from "react-icons/fa";

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");

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

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-lg p-4 w-[90%] mx-auto">
      <label className="block text-gray-800 font-semibold mb-2">
        Attachments:
      </label>

     {/* Upload Row */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-300 rounded-lg px-2 py-2 bg-gray-100 gap-2">
  {/* File Name Input */}
  <input
    type="text"
    placeholder="Enter file name"
    value={fileName}
    onChange={(e) => setFileName(e.target.value)}
    className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-blue-300 bg-white"
  />

  {/* Icon Buttons Row */}
  <div className="flex flex-row sm:flex-row gap-3 sm:gap-2 justify-start sm:justify-end">
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

    
  </div>
</div>


      {/* Uploaded File List */}
      <div className="min-h-70 bg-gray-100 px-4 rounded-md flex flex-col mt-4">
        {files.length === 0 ? (
          <div className="text-center text-gray-500 py-6">
            <FaFileAlt className="text-4xl mb-2 mx-auto" />
            <p>No files uploaded</p>
          </div>
        ) : (
          <div className="w-full">
            <h3 className="text-gray-800 font-semibold mb-2">
              Uploaded Files:
            </h3>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white px-4 py-2 rounded-md shadow-sm border border-gray-200"
                >
                  <span className="text-gray-700 truncate">{file.name}</span>
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
  );
};

export default FileUploader;
