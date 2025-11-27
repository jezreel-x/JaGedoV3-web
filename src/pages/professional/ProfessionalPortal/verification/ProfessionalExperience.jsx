import { useState, useEffect } from "react";
import {
  PlusIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { FiEdit } from "react-icons/fi";

import ProfileNavBarVerification2 from "./ProfileNavBarVerification2";

const Experience2 = () => {
  const [attachments, setAttachments] = useState([
    {
      id: 1,
      projectName: "Project Alpha",
      files: [{ name: "Alpha-Report.pdf", url: "/files/Alpha-Report.pdf" }],
    },
    {
      id: 2,
      projectName: "Beta Launch",
      files: [{ name: "Beta-Plan.docx", url: "/files/Beta-Plan.docx" }],
    },
    {
      id: 3,
      projectName: "Gamma Initiative",
      files: [{ name: "Gamma-Summary.pptx", url: "/files/Gamma-Summary.pptx" }],
    },
    {
      id: 4,
      projectName: "Delta Development",
      files: [
        { name: "Delta-Progress.docx", url: "/files/Delta-Progress.docx" },
      ],
    },
    {
      id: 5,
      projectName: "Epsilon Expansion",
      files: [{ name: "Epsilon-Report.pdf", url: "/files/Epsilon-Report.pdf" }],
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    category: "Project Manager",
    level: "Senior Professional",
    experience: "4 years",
  });

  const fields = [
    {
      name: "category",
      label: "Category",
      options: ["Project Manager", "Electrician", "Plumber"],
    },
    {
      name: "level",
      label: "Level",
      options: [
        "Senior Professional",
        "Junior Professional",
        "Graduate",
        "Technician",
        "G4: Unskilled",
      ],
    },
    {
      name: "experience",
      label: "Experience",
      options: ["5+ years", "3-5 years", "1-3 years"],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (rowId, file) => {
    if (!file) return;
    setAttachments((prev) =>
      prev.map((item) => {
        if (item.id === rowId && item.files.length < 3) {
          return {
            ...item,
            files: [
              ...item.files,
              { name: file.name, url: URL.createObjectURL(file) },
            ],
          };
        }
        return item;
      })
    );
  };

  const handleRemoveFile = (rowIndex, fileIndex) => {
    setAttachments((prev) => {
      const newAttachments = [...prev];
      newAttachments[rowIndex].files.splice(fileIndex, 1);
      return newAttachments;
    });
  };

  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  // Load initial value from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("showVerificationMessage");
    if (stored === "true") {
      setShowVerificationMessage(true);
    }
  }, []);

  // When verify button is clicked
  const handleVerify = () => {
    localStorage.setItem("showVerificationMessage", "true");
    setShowVerificationMessage(true);
  };

  // When close is clicked
  const handleClose = () => {
    localStorage.removeItem("showVerificationMessage");
    setShowVerificationMessage(false);
  };

  return (
    <div className="flex">
      <ProfileNavBarVerification2 />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="w-[70vw] ml-80 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Professional Experience
          </h1>

          <form className="space-y-8">
            {/* Skills Section */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Professional Information
                </h2>
                {!isEditing && (
                  <FiEdit
                    className="text-blue-900 cursor-pointer hover:opacity-75"
                    size={20}
                    onClick={() => setIsEditing(true)}
                    title="Edit Info"
                  />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fields.map((field, index) => (
                  <div key={index} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    {isEditing ? (
                      <select
                        name={field.name}
                        value={info[field.name]}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                        {info[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {isEditing && (
                <div className="mt-6 flex gap-4">
                  <button type="button"
                    className="bg-blue-900 text-white px-4 py-2 rounded hover:opacity-90"
                    onClick={() => setIsEditing(false)}
                  >
                    Save
                  </button>
                  <button type="button"
                    className="text-red-500 px-4 py-2 rounded hover:underline"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Project Attachments */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                        No.
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                        Project Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                        Project Files (Max 3)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {attachments.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-500">{row.id}</td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={row.projectName}
                            placeholder="Enter project name"
                            onChange={(e) => {
                              const updatedName = e.target.value;
                              setAttachments((prev) =>
                                prev.map((item) =>
                                  item.id === row.id
                                    ? { ...item, projectName: updatedName }
                                    : item
                                )
                              );
                            }}
                            className="w-full p-2 bg-transparent focus:outline-none focus:ring-0 text-gray-700"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            {row.files.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"
                              >
                                <span className="text-sm text-gray-600">
                                  {file.name}
                                </span>
                                <a
                                  href={file.url}
                                  download
                                  className="text-blue-500 hover:text-green-700"
                                >
                                  <ArrowDownTrayIcon className="w-5 h-5" />
                                </a>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleRemoveFile(row.id, index)
                                  }
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <XMarkIcon className="w-5 h-5" />
                                </button>
                              </div>
                            ))}
                            {row.files.length < 3 && (
                              <div className="relative flex items-center gap-2">
                                <label className="cursor-pointer w-full">
                                  <input
                                    type="file"
                                    onChange={(e) =>
                                      handleFileChange(
                                        row.id,
                                        e.target.files[0]
                                      )
                                    }
                                    className="hidden"
                                  />
                                  <div className="flex items-center justify-center w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition-colors bg-blue-100 text-blue-700 py-2 px-4 rounded-lg">
                                    Upload File
                                  </div>
                                </label>
                                <PlusIcon className="w-5 h-5 text-blue-700" />
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 text-right">
              <div className="relative inline-block">
                {/* Single Verify Button */}
                <button
                  type="button"
                  onClick={handleVerify}
                  className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Verify
                </button>

                {/* Verified Message */}
                {showVerificationMessage && (
                  <div className="absolute top-full right-0 mt-2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 flex items-center justify-between gap-4 min-w-[200px]">
                    <span>Verified</span>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-sm underline hover:text-gray-100"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Experience2;
