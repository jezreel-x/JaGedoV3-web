import { useState, useRef } from "react";
import PropTypes from "prop-types";
import ProfileNavBar2 from "./ProfileNavBar2";
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/solid";

const Uploads2 = () => {
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [krPin, setKRPin] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Documents submitted successfully!");
    setSubmitted(true);
  };

  return (
    <div className="flex">
      <ProfileNavBar2 />
      <div className="flex justify-center ml-[650px]">
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">
            Upload Required Documents
          </h2>

          {submitted ? (
            <div className="space-y-4">
              <ReadOnlyFile label="ID Front" file={idFront} setFile={setIdFront} />
              <ReadOnlyFile label="ID Back" file={idBack} setFile={setIdBack} />
              <ReadOnlyFile label="KRA PIN" file={krPin} setFile={setKRPin} />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <FileUpload
                label="ID Front"
                file={idFront}
                setFile={setIdFront}
                handleDrop={handleDrop}
              />
              <FileUpload
                label="ID Back"
                file={idBack}
                setFile={setIdBack}
                handleDrop={handleDrop}
              />
              <FileUpload
                label="KRA PIN"
                file={krPin}
                setFile={setKRPin}
                handleDrop={handleDrop}
              />
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition duration-200"
                  disabled={!idFront || !idBack || !krPin}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const FileUpload = ({ label, file, setFile, handleDrop }) => {
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

  return (
    <div className="space-y-2 mb-4">
      <label className="block text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className={`flex items-center justify-center w-full ${
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
            required
            accept="image/*,.pdf"
          />
        </label>
      </div>
      {file && (
        <p className="text-sm text-green-700 mt-1 font-medium">
          Uploaded: {file.name}
        </p>
      )}
    </div>
  );
};

const ReadOnlyFile = ({ label, file, setFile }) => {
  const fileInputRef = useRef(null);

  const handleDownload = () => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleTriggerUpload = () => {
    fileInputRef.current.click();
  };

  const handleNewUpload = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <div className="bg-white p-4 rounded border shadow space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700">{label}</h3>
        <div className="flex gap-3">
          <button
            onClick={handleDownload}
            title="Download"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleTriggerUpload}
            title="Upload Again"
            className="text-blue-600 hover:text-blue-800"
          >
            <ArrowUpTrayIcon className="w-5 h-5" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleNewUpload}
            className="hidden"
            accept="image/*,.pdf"
          />
        </div>
      </div>
      {file ? (
        <div className="text-sm text-gray-800">
          <p>
            <strong>File:</strong> {file.name}
          </p>
          <p className="text-green-700">✓ File submitted successfully</p>
        </div>
      ) : (
        <p className="text-red-600">No file uploaded</p>
      )}
    </div>
  );
};

// PropTypes validation
FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.instanceOf(File),
  setFile: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

ReadOnlyFile.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.instanceOf(File),
  setFile: PropTypes.func.isRequired,
};

export default Uploads2;
