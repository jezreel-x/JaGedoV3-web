import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ProfileNavBar from "./ProfileNavBar";

const Experience2 = () => {
  const [submitted, setSubmitted] = useState(false);

  const [attachments, setAttachments] = useState([
    { id: 1, projectName: "", files: [] },
    { id: 2, projectName: "", files: [] },
    { id: 3, projectName: "", files: [] },
    { id: 4, projectName: "", files: [] },
    { id: 5, projectName: "", files: [] },
  ]);

   const [level, setLevel] = useState("");
    const [experience, setExperience] = useState("");
  const handleFileChange = (rowId, file) => {
    setAttachments((prev) =>
      prev.map((item) => {
        if (item.id === rowId && item.files.length < 3) {
          return { ...item, files: [...item.files, file] };
        }
        return item;
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

  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="w-[65rem] ml-80 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Professional Experience
          </h1>
          {!submitted ? (
            
          

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Info section unchanged */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Professional Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    value="Project Manager"
                    readOnly
                    className="w-full p-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg shadow-sm cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  >
                    <option value="" disabled>
                      Select Level
                    </option>
                    {[
                      "Senior ",
                      "Professional",
                      "Graduate",
                      "Student",
                    ].map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  >
                    <option value="" disabled>
                      Select Years of Experience
                    </option>
                    {["5+ years", "3-5 years", "1-3 years"].map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Professional Evaluation Guidelines
              </h2>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                <li>
                  <strong>Senior:</strong>{" "}
                  <span className="text-blue-800 font-semibold">5 projects</span>
                </li>
                <li>
                  <strong>Professional:</strong>{" "}
                  <span className="text-blue-800 font-semibold">3 projects</span>
                </li>
                <li>
                  <strong>Graduate:</strong>{" "}
                  <span className="text-blue-800 font-semibold">1 project</span>
                </li>
                <li>
                  <strong>Student:</strong>{" "}
                  <span className="text-blue-800 font-semibold">None</span>
                </li>
              </ul>
              <br />
              <p className="text-sm text-gray-600 font-semibold">A 15 minute interview will be conducted to verify the
                legitimacy of the information you provided and the qualification
                level within 7-14 working days.</p>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">No.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Project Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Project Files</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {attachments.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-500">{row.id}</td>
                        <td className="px-6 py-4">
                          {submitted ? (
                            <span className="text-gray-700">{row.projectName || "—"}</span>
                          ) : (
                            <input
                              type="text"
                              placeholder="Enter project name"
                              value={row.projectName}
                              onChange={(e) => handleProjectNameChange(row.id, e.target.value)}
                              className="w-full p-2 border rounded-lg"
                            />
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            {row.files.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"
                              >
                                <span className="text-sm text-gray-600">{file.name}</span>
                                {!submitted && (
                                  <button
                                    type="button"
                                    onClick={() => removeFile(row.id, index)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <XMarkIcon className="w-5 h-5" />
                                  </button>
                                )}
                              </div>
                            ))}
                            {!submitted && row.files.length < 3 && (
                              <div className="flex items-center gap-2">
                                <input
                                  type="file"
                                  onChange={(e) =>
                                    handleFileChange(row.id, e.target.files[0])
                                  }
                                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition-colors"
                                />
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

            {/* Submit */}
            {!submitted && (
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition duration-200"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
                    ) : (
                // ✅ Prefilled Summary after Submission
            <div className="space-y-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Submitted Information</h2>
                <p><strong>Category:</strong> Project Manager</p>
                <p><strong>Level:</strong> {level}</p>
                <p><strong>Experience:</strong> {experience}</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">No.</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Project Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Submitted Files</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {attachments.map((row) => (
                        <tr key={row.id}>
                          <td className="px-6 py-4">{row.id}</td>
                          <td className="px-6 py-4">{row.projectName || "-"}</td>
                          <td className="px-6 py-4">
                            {row.files.length > 0 ? (
                              <ul className="space-y-1">
                                {row.files.map((file, idx) => (
                                  <li key={idx} className="text-sm text-gray-700">
                                    {file.name}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <span className="text-sm text-gray-400">No files</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>



          )}

        </div>
      </div>
    </div>
  );
};

export default Experience2;
