import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ProfileNavBar from "./ProfileNavBar";

const Experience = () => {
  const [submitted, setSubmitted] = useState(false);

  const [attachments, setAttachments] = useState([
    { id: 1, projectName: "", files: [] },
    { id: 2, projectName: "", files: [] },
    { id: 3, projectName: "", files: [] },
    // { id: 4, projectName: "", files: [] },
    // { id: 5, projectName: "", files: [] },
  ]);

  const [grade, setGrade] = useState("");
  const [experience, setExperience] = useState("");

  const handleFileChange = (rowId, file) => {
    setAttachments((prev) =>
      prev.map((item) =>
        item.id === rowId && item.files.length < 3
          ? { ...item, files: [...item.files, file] }
          : item
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

  const handleProjectNameChange = (rowId, name) => {
    setAttachments((prev) =>
      prev.map((item) =>
        item.id === rowId ? { ...item, projectName: name } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!grade || !experience) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="p-8 bg-gray-50 min-h-screen w-full">
        <div className="max-w-6xl ml-80 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Fundi Experience</h1>

          {!submitted ? (
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Skill + Grade + Experience */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Fundi Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Skill</label>
                    <input
                      type="text"
                      value="Mason"
                      readOnly
                      className="w-full p-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Grade</label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    >
                      <option value="" disabled>Select Grade</option>
                      {["G1:Master Fundi", "G2:Skilled", "G3:Semi-skilled", "G4: Unskilled"].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                    >
                      <option value="" disabled>Select Years of Experience</option>
                      {["5+ years", "3-5 years", "1-3 years"].map((exp) => (
                        <option key={exp} value={exp}>{exp}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

                {/* Evaluation Criteria Instructions */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Fundi Evaluation Guidelines
              </h2>
              <p className="text-gray-700 text-sm mb-6">
                <ul className="list-disc list-inside mt-2 text-sm text-gray-600 space-y-1">
                  <li>
                    <strong>Master Fundi:</strong> Upload{" "}
                    <span className="text-blue-800 font-semibold">
                      3 projects
                    </span>
                  </li>
                  <li>
                    <strong>Skilled Fundi:</strong> Upload{" "}
                    <span className="text-blue-800 font-semibold">
                      2 projects
                    </span>
                  </li>
                  <li>
                    <strong>Semi-skilled Fundi:</strong> Upload{" "}
                    <span className="text-blue-800 font-semibold">
                      1 project
                    </span>
                  </li>
                  <li>
                    <strong>Unskilled Fundi:</strong> Upload{" "}
                    <span className="text-blue-800 font-semibold">None</span>
                  </li>
                </ul>
                <br />A 15 minute interview will be conducted to verify the
                legitimacy of the information you provided and the qualification
                level within 7-14 working days.
              </p>
            </div>

              {/* Project Attachments Table */}
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">No.</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Project Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Project Files (Max 3)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {attachments.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-gray-500">{row.id}</td>
                          <td className="px-6 py-4">
                            <input
                              type="text"
                              placeholder="Enter project name"
                              value={row.projectName}
                              onChange={(e) => handleProjectNameChange(row.id, e.target.value)}
                              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-2">
                              {row.files.map((file, index) => (
                                <div key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                                  <span className="text-sm text-gray-600">{file.name}</span>
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
                                <input
                                  type="file"
                                  onChange={(e) => handleFileChange(row.id, e.target.files[0])}
                                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition"
                                />
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
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            // ✅ Prefilled Summary after Submission
            <div className="space-y-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Submitted Information</h2>
                <p><strong>Skill:</strong> Mason</p>
                <p><strong>Grade:</strong> {grade}</p>
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

export default Experience;
