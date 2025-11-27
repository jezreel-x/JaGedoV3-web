import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { FaVideo, FaPlus, FaTrash, FaFileAlt } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import { Link } from "react-router-dom";

const JobForm = () => {
  const [adminNotes, setAdminNotes] = useState("");

  const dummyFiles = [
    { name: "File 1.pdf", url: "/path/to/file1.pdf" },
    { name: "File 2.docx", url: "/path/to/file2.docx" },
  ];

  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg relative border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Customer Details</h2>
      
           {/* Customer Details */}
           <div className="grid grid-cols-2 gap-6">
        {[
          { label: "Name", value: "Jane" },
          { label: "Last Name", value: "Doe" },
          { label: "Phone", value: "0722334455" },
          { label: "Email", value: "icode@gmail.com" },
          { label: "Location", value: "Nairobi" },
        ].map((item, index) => (
          <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
            <span className="font-semibold text-gray-800 w-32">{item.label}:</span>
            <span className="text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>
      {/* Job Detail Section */}
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
          Project Details
        </h2>
        <div className="flex justify-between gap-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            {[
              { label: "Category", value: "Contractor" },
              { label: "Class", value: "6" },
              { label: "Status", value: "Started" },
              { label: "Location", value: "Kenya, Nairobi, Kasarani" },
              { label: "Start Date", value: "20/11/2024" },
              { label: "End Date", value: "12/12/2025" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-3 rounded-lg"
              >
                <span className="font-semibold text-gray-800 w-24">
                  {item.label}:
                </span>
                <span className="text-gray-700">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-1/2 pl-8 border-l space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900">Managed by Jagedo</h3>
              <h3 className="font-semibold text-blue-900 mt-2">
                Payment by Jagedo
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit minus molestiae libero et aut accusamus consequuntur.
          </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200 my-6">
        {/* Description */}
        <div className="col-span-1 pr-6 border-r">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Customer notes
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit minus molestiae libero et aut accusamus consequuntur.
          </p>
        </div>

        {/* Files Table */}

        <div className="col-span-3">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  File Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">
                  Attachment
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyFiles.map((file, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="px-6 py-4 border-t">{file.name}</td>
                  <td className="px-6 py-4 border-t flex items-center gap-4">
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

      {/* Admin Section */}
      <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
        <div className="col-span-1 pr-6 border-r">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Notes</h2>
          <textarea
            className="w-full p-6 border rounded-md"
            rows="10"
            placeholder="Enter admin notes..."
            value={adminNotes}
            onChange={(e) => setAdminNotes(e.target.value)}
          />
        </div>

        {/* Uploaded Files Table */}
        <div className="space-y-2">
          <label className="block text-gray-800 font-semibold">
            Attachments:
          </label>

          {/* File Upload Row */}
          <div className="flex items-center border border-black rounded-lg pl-2 pr-140 py-2 bg-gray-100">
            <input
              type="text"
              placeholder="Enter file name"
              className="flex-1 px-20 py-1 border rounded-md outline-none focus:ring-8 focus:ring-[rgb(0,0,122)]"
            />

            {/* Attachment Icon */}
            <label className="cursor-pointer flex justify-center items-center px-2">
              <AiOutlinePaperClip className="text-gray-700 text-2xl" />
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                multiple
              />
            </label>

            {/* Video Upload */}
            <label className="cursor-pointer flex justify-center items-center px-2">
              <FaVideo className="text-red-500 text-xl" />
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                multiple
              />
            </label>

            {/* Add Button */}
            <button
              type="button"
              className="ml-2 p-2 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FaPlus />
            </button>
          </div>

          {/* File Display Section */}
          <div className="min-h-72 bg-gray-100 px-60 rounded-md flex flex-col items-center justify-center">
            {files.length === 0 ? (
              <div className="text-center text-gray-500">
                <FaFileAlt className="text-4xl mb-2" />
                <p>No files uploaded</p>
              </div>
            ) : (
              <div className="w-full">
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
      </div>
      
      {/* View Register Button */}
       {/* Action Buttons */}
  <div className="flex justify-between mt-6">
    {/* View Register Button */}
    <Link to="/register?skill=Electrical">
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Register
      </button>
    </Link>

   
  </div>
    </div>
  );
};

export default JobForm;
