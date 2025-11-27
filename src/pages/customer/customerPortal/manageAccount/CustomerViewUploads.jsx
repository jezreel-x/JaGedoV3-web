import { useState } from "react";
import PropTypes from "prop-types";
import ProfileNavBar from "./ProfileNavBar";

const Uploads2 = () => {
  const [businessPermits, setBusinessPermits] = useState(null);
  const [pinCertificate, setPinCertificate] = useState(null);
  const [certificateOfIncorporation, setCertificateOfIncorporation] =
    useState(null);

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
    console.log("Business Permits:", businessPermits);
    console.log("Pin Certificate:", pinCertificate);
    console.log("Certificate of Incorporation:", certificateOfIncorporation);

    alert("Files submitted successfully!");
  };

  const allFilesUploaded =
    businessPermits && pinCertificate && certificateOfIncorporation;

  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="flex justify-center ml-[650px]">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg"
        >
          <h2 className="text-lg font-semibold mb-4">
            Upload Required Documents
          </h2>

          <FileUpload
            label="Business Permits"
            file={businessPermits}
            setFile={setBusinessPermits}
            handleDrop={handleDrop}
          />
          <FileUpload
            label="Pin Certificate"
            file={pinCertificate}
            setFile={setPinCertificate}
            handleDrop={handleDrop}
          />
          <FileUpload
            label="Certificate of Incorporation"
            file={certificateOfIncorporation}
            setFile={setCertificateOfIncorporation}
            handleDrop={handleDrop}
          />

          {/* Submit Button */}
          {allFilesUploaded && (
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

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setFile(null);
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
        <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-blue-600 cursor-pointer hover:bg-gray-50 relative">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="mt-2 text-sm text-gray-600 text-center">
            {file ? file.name : `Drag and drop or click to upload ${label}`}
          </span>

          {file && (
            <button
              type="button"
              onClick={handleRemoveFile}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-bold"
              aria-label="Remove file"
              title="Remove file"
            >
              &times;
            </button>
          )}

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*,.pdf"
          />
        </label>
      </div>

      {/* Show uploaded file below the box */}
      {file && (
        <p className="text-sm text-green-700 mt-1 font-medium">
          Uploaded: {file.name}
        </p>
      )}
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
