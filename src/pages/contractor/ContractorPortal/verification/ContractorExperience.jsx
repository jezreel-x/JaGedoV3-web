import { useState, useEffect } from "react";
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PlusCircleIcon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

import ProfileNavBarVerification4 from "./ProfileNavBarVerification4";

const Experience4 = () => {
  const [attachments, setAttachments] = useState([
    {
      id: 2,
      projectName: "IoT Dashboard",
      files: [
        {
          name: "IoT_Firmware.hex",
          file: new Blob([""], { type: "application/octet-stream" }),
        },
        {
          name: "Sensor_Data.csv",
          file: new Blob([""], { type: "text/csv" }),
        },
        {
          name: "IoT_Dashboard_Manual.pdf",
          file: new Blob([""], { type: "application/pdf" }),
        },
        {
          name: "IoT_Project_Report.pdf",
          file: new Blob([""], { type: "application/pdf" }),
        },
      ],
    },

    {
      id: 2,
      projectName: "IoT Project",
      files: [
        {
          name: "IoT_Device_Firmware.bin",
          file: new Blob([""], { type: "application/octet-stream" }),
        },
        {
          name: "Sensor_Data.xlsx",
          file: new Blob([""], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          }),
        },
        {
          name: "IoT_Project_Report.pdf",
          file: new Blob([""], { type: "application/pdf" }),
        },
      ],
    },
  ]);

  const rows = [
    {
      id: 1,
      category: "Water",
      class: "6",
      years: "5 years",
      files: [
        new File(["Certificate content"], "certificate1.pdf", {
          type: "application/pdf",
        }),
        new File(["License content"], "license1.pdf", {
          type: "application/pdf",
        }),
      ],
    },
  ];

  const [isEditing, setIsEditing] = useState(false);

  const handleFileUpload = (e, rowIndex) => {
    const uploadedFiles = Array.from(e.target.files);
    setAttachments((prev) => {
      const newAttachments = [...prev];
      newAttachments[rowIndex].files.push(
        ...uploadedFiles.map((file) => ({
          name: file.name,
          url: URL.createObjectURL(file), // Temporary URL for preview
        }))
      );
      return newAttachments;
    });
  };
  const handleProjectNameChange = (rowId, value) => {
    setAttachments((prev) =>
      prev.map((item) =>
        item.id === rowId ? { ...item, projectName: value } : item
      )
    );
  };

  const handleRemoveFile = (rowIndex, fileIndex) => {
    setAttachments((prev) => {
      const newAttachments = [...prev];
      newAttachments[rowIndex].files.splice(fileIndex, 1);
      return newAttachments;
    });
  };

  const handleReplaceFile = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedFiles = [];
      updatedFiles[index] = { ...updatedFiles[index], file, name: file.name };
    }
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
  // const showVerificationMessage = localStorage.getItem("showVerificationMessage");
  return (
    <div className="flex">
      <ProfileNavBarVerification4 />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="w-[70vw] ml-80 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Contractor Experience
          </h1>
          <form className="space-y-8">
            {/* Skills Section */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              {/* Header with icons */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Skills</h2>
                <div className="flex gap-3 text-blue-600">
                  <button
                    type="button"
                    onClick={() => setIsEditing((prev) => !prev)}
                    title="Edit"
                  >
                    <PencilSquareIcon className="w-5 h-5" />
                  </button>
                  {/* <BookOpenIcon className="w-5 h-5" title="Notebook" /> */}
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        {[
                          "No.",
                          "Category",
                          "Class",
                          "Years",
                          "Certificate",
                          "License",
                        ].map((label, idx) => (
                          <th
                          key={idx}
                          className="px-2 py-3 text-left text-sm font-semibold text-gray-600"
                        >
                          {label}
                        </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {rows.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50 text-sm">
                          <td className="px-2 py-3 text-gray-700">{row.id}</td>

                          {/* Category */}
                          <td className="px-2 py-3">
                            {isEditing ? (
                              <select
                                className="w-full p-2 border rounded-lg bg-white text-gray-700"
                                defaultValue={row.category || "Water"}
                              >
                                {[
                                  "Water",
                                  "Mechanical",
                                  "Electrical",
                                  "Building Works",
                                  "Roads",
                                  "Other Civil Works",
                                ].map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <span>{row.category || "Water"}</span>
                            )}
                          </td>

                          {/* Class */}
                          <td className="px-2 py-3">
                            {isEditing ? (
                              <select
                                className="w-full p-2 border rounded-lg"
                                defaultValue={row.class || "6"}
                              >
                                {["6", "5", "3"].map((opt) => (
                                  <option key={opt}>{opt}</option>
                                ))}
                              </select>
                            ) : (
                              <span>{row.class || "6"}</span>
                            )}
                          </td>

                          {/* Years */}
                          <td className="px-2 py-3">
                            {isEditing ? (
                              <select
                                className="w-full p-2 border rounded-lg"
                                defaultValue={row.years || "5+ years"}
                              >
                                {["5+ years", "3-5 years", "1-3 years"].map(
                                  (opt) => (
                                    <option key={opt}>{opt}</option>
                                  )
                                )}
                              </select>
                            ) : (
                              <span>{row.years || "5+ years"}</span>
                            )}
                          </td>

                          {/* Certificate */}
                          {/* Certificate */}
                          <td className="px-2 py-3">
                            <div className="flex items-center gap-2">
                              {row.files[0] ? (
                                <>
                                  <span className="truncate text-gray-600 max-w-[100px]">
                                    {row.files[0].name}
                                  </span>
                                  <a
                                    href={URL.createObjectURL(row.files[0])}
                                    download
                                    className="text-blue-500 hover:text-blue-700"
                                  >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveFile(row.id, 0)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <XMarkIcon className="w-5 h-5" />
                                  </button>
                                </>
                              ) : (
                                <span className="text-gray-500">
                                  No file uploaded
                                </span>
                              )}

                              {/* Upload Button */}
                              <label className="cursor-pointer text-blue-600 hover:text-blue-800">
                                <ArrowUpTrayIcon className="w-5 h-5" />
                                <input
                                  type="file"
                                  accept="application/pdf,image/*"
                                  onChange={(e) =>
                                    handleFileUpload(e, row.id, 0)
                                  }
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </td>

                          {/* License */}
                          <td className="px-2 py-3">
                            <div className="flex items-center gap-2">
                              {row.files[1] ? (
                                <>
                                  <span className="truncate text-gray-600 max-w-[100px]">
                                    {row.files[1].name}
                                  </span>
                                  <a
                                    href={URL.createObjectURL(row.files[1])}
                                    download
                                    className="text-blue-500 hover:text-blue-700"
                                  >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveFile(row.id, 1)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <XMarkIcon className="w-5 h-5" />
                                  </button>
                                </>
                              ) : (
                                <span className="text-gray-500">
                                  No file uploaded
                                </span>
                              )}

                              {/* Upload Button */}
                              <label className="cursor-pointer text-blue-600 hover:text-blue-800">
                                <ArrowUpTrayIcon className="w-5 h-5" />
                                <input
                                  type="file"
                                  accept="application/pdf,image/*"
                                  onChange={(e) =>
                                    handleFileUpload(e, row.id, 1)
                                  }
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                        Reference Letter
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {attachments.map((row) => {
                      // Separate report files (name includes "report", case-insensitive)
                      const reportFiles = row.files.filter((file) =>
                        file.name.toLowerCase().includes("report")
                      );

                      // All other non-report files
                      const otherFiles = row.files.filter(
                        (file) => !file.name.toLowerCase().includes("report")
                      );

                      return (
                        <tr
                          key={row.id}
                          className="hover:bg-gray-50 transition-colors align-top"
                        >
                          <td className="px-6 py-4 text-gray-500">{row.id}</td>

                          {/* Project Name */}
                          <td className="px-6 py-4">
                            <input
                              type="text"
                              placeholder="Enter project name"
                              value={row.projectName}
                              onChange={(e) =>
                                handleProjectNameChange(row.id, e.target.value)
                              }
                              className="w-full p-2 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            />
                          </td>

                          {/* Project Files */}
                          <div className="space-y-2">
                            {otherFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg justify-between"
                              >
                                <span className="text-sm text-gray-600 truncate w-5/6">
                                  {file.name}
                                </span>

                                <div className="flex gap-2 items-center">
                                  {/* Download icon */}
                                  {file.file instanceof Blob && (
                                    <a
                                      href={URL.createObjectURL(file.file)}
                                      download={file.name}
                                      className="text-blue-500 hover:text-blue-700"
                                      title="Download"
                                    >
                                      <ArrowDownTrayIcon className="w-5 h-5" />
                                    </a>
                                  )}

                                  {/* Remove icon */}
                                  <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700"
                                    title="Remove file"
                                    onClick={() => handleRemoveFile(index)}
                                  >
                                    <XMarkIcon className="w-5 h-5" />
                                  </button>

                                  {/* Upload (replace) icon */}
                                  <label
                                    title="Replace file"
                                    className="cursor-pointer text-green-500 hover:text-green-700"
                                  >
                                    <PlusCircleIcon className="w-5 h-5" />
                                    <input
                                      type="file"
                                      accept="application/pdf,image/*"
                                      className="hidden"
                                      onChange={(e) =>
                                        handleReplaceFile(e, index)
                                      }
                                    />
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Project Reports */}
                          <td className="px-6 py-4">
                            <div className="space-y-2">
                              {reportFiles.length > 0 ? (
                                reportFiles.map((file, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg justify-between"
                                  >
                                    <span className="text-sm text-gray-600">
                                      {file.name}
                                    </span>
                                    {file.file instanceof Blob && (
                                      <a
                                        href={URL.createObjectURL(file.file)}
                                        download={file.name}
                                        className="text-blue-500 hover:text-blue-700"
                                        title="Download"
                                      >
                                        <ArrowDownTrayIcon className="w-5 h-5" />
                                      </a>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <span className="text-sm text-gray-400">
                                  No report
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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

export default Experience4;
