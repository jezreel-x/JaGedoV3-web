import { useState } from "react";
import {
  PlusIcon,
  XMarkIcon,
  PencilSquareIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import ProfileNavBar from "./ProfileNavBar";

const Experience4 = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const [attachments, setAttachments] = useState([
    { id: 1, projectName: "", files: [], report: null },
    { id: 2, projectName: "", files: [], report: null },
    { id: 3, projectName: "", files: [], report: null },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      category: "Water",
      class: "",
      years: "",
      files: [null, null],
      isEditingCategory: false,
    },
  ]);

  // 2. Handler to toggle edit mode
  const toggleCategoryEdit = (rowId) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === rowId
          ? { ...row, isEditingCategory: !row.isEditingCategory }
          : row
      )
    );
  };

  // 3. Handler to update category value
  const handleCategoryChange = (rowId, value) => {
    setRows((prev) =>
      prev.map((row) => (row.id === rowId ? { ...row, category: value } : row))
    );
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        category: "",
        class: "",
        years: "",
        files: [null, null],
      },
    ]);
  };

  const handleFileChange = (rowId, file, fileIndex, isReport = false) => {
    setAttachments((prev) =>
      prev.map((item) => {
        if (isReport) {
          return { ...item, report: file };
        }

        const newFiles = [...item.files];
        if (fileIndex !== undefined) {
          newFiles[fileIndex] = file;
        } else {
          newFiles.push(file);
        }
        return { ...item, files: newFiles };
      })
    );
  };

  const handleProjectNameChange = (rowId, value) => {
    setAttachments((prev) =>
      prev.map((item) =>
        item.id === rowId ? { ...item, projectName: value } : item
      )
    );
  };

  const removeFile = (rowId, fileIndex) => {
    setAttachments((prev) =>
      prev.map((item) => {
        if (item.id === rowId) {
          const newFiles = [...item.files];
          newFiles.splice(fileIndex, 1);
          return { ...item, files: newFiles };
        }
        return item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const downloadFile = (file) => {
    if (file) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = file.name;
      link.click();
    }
  };

  return (
    <div className="flex">
      <ProfileNavBar />
       <div className="p-8 bg-gray-50 min-h-screen">
         <div className="max-w-6xl ml-80 bg-white rounded-xl shadow-lg p-8">
          
         <form className="space-y-8" onSubmit={handleSubmit}>
           <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Contractor Experience
          </h1>

          {/* Experience Table */}
          <div className="overflow-x-auto border rounded-xl p-4 bg-gray-50">
           <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                  <th className="w-[5%] px-2 py-3">No.</th>
                  <th className="w-[20%] px-2 py-3">Category</th>
                  <th className="w-[10%] px-2 py-3">Class</th>
                  <th className="w-[15%] px-2 py-3">Years</th>
                  <th className="w-[25%] px-2 py-3">Certificate</th>
                  <th className="w-[25%] px-2 py-3">License</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-2 py-3">{row.id}</td>
                    <td className="px-2 py-3">
                      {submitted || !row.isEditingCategory ? (
                        <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
                          <span>{row.category || "—"}</span>
                          {!submitted && (
                            <button onClick={() => toggleCategoryEdit(row.id)}>
                              <PencilSquareIcon className="w-5 h-5 text-blue-600" />
                            </button>
                          )}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={row.category}
                          onChange={(e) => handleCategoryChange(row.id, e.target.value)}
                          className="w-full border p-2 rounded"
                        />
                      )}
                    </td>
                    <td className="px-2 py-3">
                      <select disabled={submitted} className="w-full border p-2 rounded">
                        {["6", "5", "3"].map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-2 py-3">
                      <select disabled={submitted} className="w-full border p-2 rounded">
                        {["5+ years", "3-5 years", "1-3 years"].map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </td>
                    {[0, 1].map((fileIndex) => (
                      <td key={fileIndex} className="px-2 py-3">
                        {row.files[fileIndex] ? (
                          <div className="flex items-center gap-2">
                            <span className="truncate">{row.files[fileIndex].name}</span>
                            {submitted ? (
                              <button
                                type="button"
                                onClick={() => downloadFile(row.files[fileIndex])}
                                title="Download"
                              >
                                <ArrowDownTrayIcon className="w-5 h-5 text-blue-700" />
                              </button>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={() => removeFile(row.id, fileIndex)}
                                  title="Remove"
                                >
                                  <XMarkIcon className="w-5 h-5 text-red-500" />
                                </button>
                                <label className="cursor-pointer">
                                  <ArrowUpTrayIcon className="w-5 h-5 text-blue-700" />
                                  <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) =>
                                      handleFileChange(row.id, e.target.files[0], fileIndex)
                                    }
                                  />
                                </label>
                              </>
                            )}
                          </div>
                        ) : !submitted ? (
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(row.id, e.target.files[0], fileIndex)}
                            className="w-full"
                          />
                        ) : (
                          <span className="text-gray-400">No file</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {!submitted && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleAddRow}
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
                >
                  <PlusIcon className="h-5 w-5" />
                  Add Category
                </button>
              </div>
            )}
          </div>

          {/* Guidelines */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contractor Evaluation Guidelines</h2>
            <p>Contractor has to upload one project for each category selected.</p>
            <p className="mt-4 text-sm text-gray-600 font-semibold">
              A 15 minute interview will be conducted to verify the legitimacy of the information within 7–14 working days.
            </p>
          </div>

          {/* Attachments */}
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
                      {/* <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                        Instructions
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {attachments.map((row) => (
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
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                          />
                        </td>

                        {/* Project Files */}
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
                                <button
                                  type="button"
                                  onClick={() => removeFile(row.id, index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <XMarkIcon className="w-5 h-5" />
                                </button>
                              </div>
                            ))}
                            {row.files.length < 3 && (
                              <div className="flex items-center gap-2">
                                <input
                                  type="file"
                                  onChange={(e) =>
                                    handleFileChange(row.id, e.target.files[0])
                                  }
                                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition-colors"
                                />
                                {/* <PlusIcon className="w-5 h-5 text-blue-700" /> */}
                              </div>
                            )}
                          </div>
                        </td>

                        {/* Project Report */}
                        <td className="px-6 py-4">
                          {row.files[2] ? (
                            <div className="flex items-center gap-2">
                              <span className="truncate text-gray-600">
                                {row.files[2].name}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(row.id, 2)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <XMarkIcon className="w-5 h-5" />
                              </button>
                            </div>
                          ) : (
                            <input
                              type="file"
                              onChange={(e) =>
                                handleFileChange(row.id, e.target.files[0], 2)
                              }
                              className="w-full text-sm file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


          {!submitted && (
            <div className="text-right mt-6">
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition"
              >
                Submit
              </button>
            </div>
          )}
        </form>
        </div>
      </div>
    </div>
  );
};

export default Experience4;