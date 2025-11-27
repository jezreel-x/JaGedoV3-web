import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Download, UploadCloud } from "lucide-react";
import ProfileNavBar from "./ProfileNavBar";

const Uploads2 = () => {
  const [submitted, setSubmitted] = useState(false);
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [kraPin, setKraPin] = useState(null);
  const [academicCertificates, setAcademicCertificates] = useState(null);
  const [cv, setCv] = useState(null);
  const [practicingCertificate, setPracticingCertificate] = useState(null);

  // Refs to trigger upload again
  const fileRefs = useRef({});

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Files submitted successfully!");
    setSubmitted(true);
  };

  const uploadedFiles = [
    { label: "ID Front", file: idFront, setFile: setIdFront },
    { label: "ID Back", file: idBack, setFile: setIdBack },
    { label: "KRA PIN", file: kraPin, setFile: setKraPin },
    { label: "Academic Certificates", file: academicCertificates, setFile: setAcademicCertificates },
    { label: "CV", file: cv, setFile: setCv },
    { label: "Practice License", file: practicingCertificate, setFile: setPracticingCertificate },
  ];

  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="flex justify-center ml-[670px]">
        <div className="max-w-4xl w-full p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Upload Required Documents</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {uploadedFiles.map(({ label, file, setFile }) => (
                <FileUpload
                  key={label}
                  label={label}
                  file={file}
                  setFile={setFile}
                  handleDrop={handleDrop}
                />
              ))}
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
            <div className="space-y-4">
              {uploadedFiles.map(({ label, file, setFile }) => (
                <div key={label} className="bg-white p-4 rounded-lg shadow border">
                  <p className="text-sm font-medium text-gray-700 mb-2">{label}:</p>
                  {file ? (
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                      <span className="text-sm text-gray-600 truncate max-w-[12rem]">{file.name}</span>
                      <div className="flex items-center gap-3">
                        <a
                          href={URL.createObjectURL(file)}
                          download={file.name}
                          className="text-green-600 hover:text-green-800"
                          title="Download"
                        >
                          <Download size={18} />
                        </a>
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          title="Upload Again"
                          onClick={() => fileRefs.current[label]?.click()}
                        >
                          <UploadCloud size={18} />
                        </button>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          className="hidden"
                          ref={(el) => (fileRefs.current[label] = el)}
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-red-500">No file uploaded.</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ File Upload Component (Before Submission)
const FileUpload = ({ label, file, setFile, handleDrop }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleRemoveFile = () => setFile(null);

  return (
    <div className="space-y-2 mb-4">
      <label className="block text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className={`flex items-center justify-center w-full ${dragging ? "bg-blue-50" : ""}`}
        onDrop={(e) => handleDrop(e, setFile)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <label className="w-full relative flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-blue-600 cursor-pointer hover:bg-gray-50">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>

          <span className="mt-2 text-sm text-gray-600 text-center px-2">
            {file ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="truncate max-w-[180px]">{file.name}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-red-500 hover:text-red-700"
                  title="Remove file"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              `Drag and drop or click to upload ${label}`
            )}
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,.pdf"
            required
          />
        </label>
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.instanceOf(File),
  setFile: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

export default Uploads2;
