"use client";

import { lazy, Suspense, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaVideo, FaTrash, FaFileAlt } from "react-icons/fa";

import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(() =>
  import("../../../../components/Navigation/NavigationBar")
);

const CustomerFundi = () => {
  const [adminNotes, setAdminNotes] = useState(
    "This order requires high-quality floor tiles for the main hall. Ensure delivery by the specified date."
  );

  const [fileName, setFileName] = useState("");
  const [files, setFiles] = useState([
    {
      name: "FloorTileSpecs.pdf",
      raw: null, // Simulating previously uploaded file
    },
    {
      name: "DeliverySchedule.mp4",
      raw: null,
    },
  ]);

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
    setFileName("");
    event.target.value = null;
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <br />
      <br />
      <br />
      <br />
      <ActiveFundiNav />

      <div className="min-h-screen bg-gray-100 py-6 px-2 flex justify-center">
        <div className="max-w-6xl w-full bg-white shadow-md rounded-md p-4 space-y-4">
          <h1 className="text-xl font-semibold text-gray-700">Attachments</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-200 p-4 rounded-md">
            {/* Text Area */}
            <div className="md:col-span-2">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-md"
                rows="8"
                placeholder="Enter order description..."
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
              />
            </div>

            {/* File Upload Section */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Enter file name"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-300 rounded-md outline-none bg-white"
                />
                <label
                  className={`cursor-pointer ${
                    !fileName.trim() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  title={!fileName.trim() ? "Enter a file name first" : ""}
                >
                  <AiOutlinePaperClip className="text-2xl text-gray-700" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    multiple
                    disabled={!fileName.trim()}
                  />
                </label>
                <label
                  className={`cursor-pointer ${
                    !fileName.trim() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  title={!fileName.trim() ? "Enter a file name first" : ""}
                >
                  <FaVideo className="text-xl text-red-500" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    multiple
                    disabled={!fileName.trim()}
                  />
                </label>
              </div>

              {/* File List */}
              <div className="min-h-40 bg-gray-100 p-4 rounded-md">
                {files.length === 0 ? (
                  <div className="text-center text-gray-500">
                    <FaFileAlt className="text-3xl mb-1 mx-auto" />
                    <p>No files uploaded</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                      Uploaded Files:
                    </h3>
                    <ul className="space-y-2">
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-white px-3 py-2 rounded shadow-sm"
                        >
                          <span className="text-gray-800 text-sm">{file.name}</span>
                          <button
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFundi;
