import { useState, useEffect } from "react";
import {
  ArrowDownTrayIcon,
  XMarkIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { FiEdit } from "react-icons/fi";

import ProfileNavBarVerification from "./ProfileNavBarVerification";

const Experience = () => {
  const [attachments, setAttachments] = useState([
    {
      id: 1,
      projectName: "Project 1 - Kitchen Construction",
      files: [
        {
          name: "kitchen_blueprints.pdf",
          url: "path/to/kitchen_blueprints.pdf",
        },
        { name: "kitchen_photos.zip", url: "path/to/kitchen_photos.zip" },
      ],
    },
    {
      id: 2,
      projectName: "Project 2 - Office Renovation",
      files: [
        { name: "office_layouts.pdf", url: "path/to/office_layouts.pdf" },
        { name: "office_photos.zip", url: "path/to/office_photos.zip" },
      ],
    },
    {
      id: 3,
      projectName: "Project 3 - Plumbing System",
      files: [
        {
          name: "plumbing_system_report.docx",
          url: "path/to/plumbing_system_report.docx",
        },
        { name: "plumbing_photos.zip", url: "path/to/plumbing_photos.zip" },
      ],
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    skill: "Mason",
    grade: "G1: Master Fundi",
    experience: "5 years",
  });

  const fields = [
    {
      name: "skill",
      label: "Skill",
      options: ["Mason", "Electrician", "Plumber", "Carpenter", "Painter"],
    },
    {
      name: "grade",
      label: "Grade",
      options: [
        " G1: Master Fundi",
        " G2: Semi-Skilled",
        " G3: Skilled",
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

  const handleRemoveFile = (rowIndex, fileIndex) => {
    setAttachments((prev) => {
      const newAttachments = [...prev];
      newAttachments[rowIndex].files.splice(fileIndex, 1);
      return newAttachments;
    });
  };

  const initialQuestions = [
    {
      id: 1,
      text: "Have you done any major works in the construction industry?",
      type: "select",
      options: ["Yes", "No"],
      answer: "",
      score: 0,
      isEditing: false,
    },
    {
      id: 2,
      text: "State the materials that you have been using mostly for your jobs",
      type: "text",
      answer: "",
      score: 0,
      isEditing: false,
    },
    {
      id: 3,
      text: "Name essential equipment that you have been using for your job",
      type: "text",
      answer: "",
      score: 0,
      isEditing: false,
    },
    {
      id: 4,
      text: "How do you always formulate your quotations?",
      type: "text",
      answer: "",
      score: 0,
      isEditing: false,
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const handleTextChange = (id, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, answer: value } : q))
    );
  };

  const handleScoreChange = (id, value) => {
    const num = parseFloat(value) || 0;
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, score: num } : q))
    );
  };

  const handleEditToggle = (id) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, isEditing: !q.isEditing } : q))
    );
  };

  const handleQuestionEdit = (id, newText) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, text: newText, isEditing: false } : q
      )
    );
  };

  const totalScore = questions.reduce((sum, q) => sum + q.score, 0);
 
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
      <ProfileNavBarVerification />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl ml-80 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Fundi Experience
          </h1>

          <form className="space-y-8">
            {/* Skills Section */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Fundi Information
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
            <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-6 py-4 font-semibold">No.</th>
                      <th className="px-6 py-4 font-semibold">Project Name</th>
                      <th className="px-6 py-4 font-semibold">
                        Uploaded Files
                      </th>
                      <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {attachments.map((row, index) => (
                      <tr key={row.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 font-medium">
                          {row.projectName || "Unnamed Project"}
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            {row.files.length > 0 ? (
                              row.files.map((file, fileIndex) => (
                                <div
                                  key={fileIndex}
                                  className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-sm"
                                >
                                  <span className="truncate text-sm">
                                    {file.name}
                                  </span>
                                  <div className="flex space-x-2">
                                    <a
                                      href={file.url}
                                      download={file.name}
                                      className="text-blue-600 hover:text-blue-800"
                                    >
                                      <ArrowDownTrayIcon className="h-5 w-5" />
                                    </a>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleRemoveFile(index, fileIndex)
                                      }
                                      className="text-red-500 hover:text-red-700"
                                    >
                                      <XMarkIcon className="h-5 w-5" />
                                    </button>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <span className="text-gray-400 text-sm">
                                No files uploaded
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="file"
                            multiple
                            onChange={(e) => handleFileUpload(e, index)}
                            className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-3
                      file:rounded-md file:border-0
                      file:bg-blue-600 file:text-white
                      hover:file:bg-blue-700
                      cursor-pointer"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Evaluation Criteria Instructions */}
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Fundi Evaluation Guidelines
            </h2>

            {/* Scoring Criteria Description */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <h3 className="font-semibold text-blue-900 text-sm mb-2">
                Scoring Criteria:
              </h3>
              <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
                <li>
                  <strong>90–100%:</strong> Master Fundi
                </li>
                <li>
                  <strong>80–89%:</strong> Semi-Skilled
                </li>
                <li>
                  <strong>70–79%:</strong> Skilled
                </li>
                <li>
                  <strong>Below 70%:</strong> Unskilled
                </li>
              </ul>
            </div>

            {/* Evaluation Criteria Instructions */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Evaluation Form
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questions.map((q) => (
                  <div key={q.id} className="space-y-2 relative">
                    {q.isEditing ? (
                      <input
                        value={q.text}
                        onChange={(e) =>
                          handleQuestionEdit(q.id, e.target.value)
                        }
                        onBlur={(e) => handleQuestionEdit(q.id, e.target.value)}
                        className="w-full text-sm p-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    ) : (
                      <>
                        <label className="block text-sm font-medium text-gray-700 pr-8">
                          {q.text}
                        </label>
                        <button
                          type="button"
                          className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
                          onClick={() => handleEditToggle(q.id)}
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {q.type === "select" ? (
                      <select
                        value={q.answer}
                        onChange={(e) => handleTextChange(q.id, e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      >
                        {q.options.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={q.answer}
                        onChange={(e) => handleTextChange(q.id, e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                        placeholder="Enter your response..."
                      />
                    )}

                    <div className="flex items-center gap-2">
                      <label className="text-sm text-gray-600">Score:</label>
                      <input
                        type="number"
                        min="0"
                        value={q.score}
                        onChange={(e) =>
                          handleScoreChange(q.id, e.target.value)
                        }
                        className="w-20 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Score Section */}
              <div className="mt-8 border-t pt-4 text-right">
                <label className="text-lg font-semibold text-gray-700 mr-2">
                  Total Score:
                </label>
                <input
                  type="number"
                  value={totalScore}
                  onChange={(e) =>
                    setQuestions((prev) => {
                      const newTotal = parseFloat(e.target.value) || 0;
                      const updated = [...prev];
                      const diff =
                        newTotal - prev.reduce((sum, q) => sum + q.score, 0);
                      if (updated.length > 0) {
                        // Distribute difference to the last question (or first if you prefer)
                        updated[updated.length - 1].score += diff;
                      }
                      return [...updated];
                    })
                  }
                  className="w-24 p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-blue-700"
                />
              </div>
            </div>
            {/* Audio Upload Section */}
            <div className="bg-gray-50 mt-6 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Audio Upload
              </h2>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload your audio response or reference (optional)
              </label>
              <input
                type="file"
                accept="audio/*"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
              />
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

export default Experience;
