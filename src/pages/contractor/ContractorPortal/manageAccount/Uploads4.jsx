import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Download, UploadCloud } from "lucide-react";
import ProfileNavBar from "./ProfileNavBar";

const Uploads2 = () => {
  const [businessRegistration, setBusinessRegistration] = useState(null);
  const [businessPermit, setBusinessPermit] = useState(null);
  const [kraPin, setKraPin] = useState(null);
  const [companyProfile, setCompanyProfile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // File refs to handle re-upload
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

    console.log("Submitted Files:");
    console.log("Business Registration:", businessRegistration);
    console.log("Business Permit:", businessPermit);
    console.log("KRA PIN:", kraPin);
    console.log("Company Profile:", companyProfile);

    setSubmitted(true);
    alert("Documents submitted successfully!");
  };

  const uploadedFiles = [
    { label: "Business Registration", file: businessRegistration, setFile: setBusinessRegistration },
    { label: "Business Permit", file: businessPermit, setFile: setBusinessPermit },
    { label: "KRA PIN", file: kraPin, setFile: setKraPin },
    { label: "Company Profile", file: companyProfile, setFile: setCompanyProfile },
  ];

  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="flex justify-center ml-[700px]">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4">Upload Required Documents</h2>

          {uploadedFiles.map(({ label, file, setFile }) => (
            <FileUpload
              key={label}
              label={label}
              file={file}
              setFile={setFile}
              handleDrop={handleDrop}
              submitted={submitted}
              fileRefs={fileRefs}
            />
          ))}

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
      </div>
    </div>
  );
};

const FileUpload = ({ label, file, setFile, handleDrop, submitted, fileRefs }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="space-y-2 mb-4">
      <label className="block text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>

      {submitted ? (
        <div className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm text-gray-700 flex justify-between items-center">
          {file ? (
            <>
              <span className="truncate max-w-[180px]">{file.name}</span>
              <div className="flex gap-3">
                <a
                  href={URL.createObjectURL(file)}
                  download={file.name}
                  className="text-green-600 hover:text-green-800"
                  title="Download"
                >
                  <Download size={18} />
                </a>
                <button
                  onClick={() => fileRefs.current[label]?.click()}
                  type="button"
                  className="text-blue-600 hover:text-blue-800"
                  title="Upload Again"
                >
                  <UploadCloud size={18} />
                </button>
                <input
                  type="file"
                  ref={(el) => (fileRefs.current[label] = el)}
                  onChange={handleFileChange}
                  accept="image/*,.pdf"
                  className="hidden"
                />
              </div>
            </>
          ) : (
            <span className="text-gray-400">No file uploaded</span>
          )}
        </div>
      ) : (
        <div
          className={`relative flex items-center justify-center w-full ${
            dragging ? "bg-blue-50" : ""
          }`}
          onDrop={(e) => handleDrop(e, setFile)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-blue-600 cursor-pointer hover:bg-gray-50">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span className="mt-2 text-sm text-gray-600 text-center">
              {file ? file.name : `Drag and drop or click to upload ${label}`}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              required
            />
          </label>

          {file && (
            <button
              onClick={handleRemoveFile}
              type="button"
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
              title="Remove file"
            >
              &times;
            </button>
          )}
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.instanceOf(File),
  setFile: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  fileRefs: PropTypes.object.isRequired,
};

export default Uploads2;
