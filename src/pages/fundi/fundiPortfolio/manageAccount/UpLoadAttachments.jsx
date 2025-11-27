import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { X, Download, UploadCloud } from "lucide-react";
import ProfileNavBar from "./ProfileNavBar";

const UploadAttachments = () => {
  const [certificates, setCertificates] = useState([]);
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [kraPin, setKraPin] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    if (files.length) {
      setFile(files[0]);
    }
  };

  const handleCertificatesDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setCertificates((prev) => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idFront && idBack && certificates.length > 0 && kraPin) {
      alert("Documents submitted successfully!");
      setSubmitted(true);
    } else {
      alert("Please upload all required documents.");
    }
  };

  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="flex justify-center ml-[700px]">
        <div className="max-w-4xl w-full p-8 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-[rgb(0,0,122)]">
            Add Attachments
          </h1>

          {submitted ? (
            <div className="space-y-6">
              <ReadOnlyFile label="ID Front" file={idFront} onUpdate={setIdFront} />
              <ReadOnlyFile label="ID Back" file={idBack} onUpdate={setIdBack} />
              <ReadOnlyMultipleFiles
                label="Certificates"
                files={certificates}
                onUpdate={setCertificates}
              />
              <ReadOnlyFile label="KRA PIN" file={kraPin} onUpdate={setKraPin} />
            </div>
          ) : (
            <form className="space-y-10" onSubmit={handleSubmit}>
              <FileInput
                label="ID Front"
                file={idFront}
                setFile={setIdFront}
                handleDrop={handleDrop}
              />
              <FileInput
                label="ID Back"
                file={idBack}
                setFile={setIdBack}
                handleDrop={handleDrop}
              />
              {/* Certificates */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Certificates <span className="text-red-500">*</span>
                </label>
                <div
                  className="flex justify-center items-center"
                  onDrop={handleCertificatesDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-[rgb(0,0,122)] cursor-pointer hover:bg-gray-50 transition">
                    <svg
                      className="w-8 h-8 text-[rgb(0,0,122)]"
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
                    <span className="mt-2 text-sm text-gray-600">
                      Drag and drop or click to upload certificates
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      onChange={(e) =>
                        setCertificates([...certificates, ...Array.from(e.target.files)])
                      }
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
                {certificates.length > 0 && (
                  <ul className="mt-4 space-y-1">
                    {certificates.map((file, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-center justify-between"
                      >
                        {file.name}
                        <X
                          size={16}
                          className="text-red-500 cursor-pointer"
                          onClick={() =>
                            setCertificates(certificates.filter((_, i) => i !== index))
                          }
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <FileInput
                label="KRA PIN"
                file={kraPin}
                setFile={setKraPin}
                handleDrop={handleDrop}
              />
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition duration-200"
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

// 📁 FileInput Component
const FileInput = ({ label, file, setFile, handleDrop }) => {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className="flex justify-center items-center"
        onDrop={(e) => handleDrop(e, setFile)}
        onDragOver={(e) => e.preventDefault()}
      >
        <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-[rgb(0,0,122)] cursor-pointer hover:bg-gray-50 transition">
          <svg
            className="w-8 h-8 text-[rgb(0,0,122)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="mt-2 text-sm text-gray-600">
            {file ? file.name : `Upload ${label}`}
          </span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
            required
            accept="image/*,.pdf"
          />
        </label>
      </div>
    </div>
  );
};

// ✅ Read-only Single File
const ReadOnlyFile = ({ label, file, onUpdate }) => {
  const inputRef = useRef();

  return (
    <div>
      <h3 className="text-sm font-medium text-[rgb(0,0,122)]">{label}</h3>
      {file ? (
        <div className="bg-white p-4 rounded border mt-1 text-gray-800 shadow flex justify-between items-center">
          <span>{file.name}</span>
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
              onClick={() => inputRef.current.click()}
              title="Upload Again"
            >
              <UploadCloud size={18} />
            </button>
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              accept="image/*,.pdf"
              onChange={(e) => onUpdate(e.target.files[0])}
            />
          </div>
        </div>
      ) : (
        <p className="text-red-600">No file uploaded</p>
      )}
    </div>
  );
};

// ✅ Read-only Multiple Files (for Certificates)
const ReadOnlyMultipleFiles = ({ label, files, onUpdate }) => {
  const inputRef = useRef();

  const handleUploadAgain = (e) => {
    const newFiles = Array.from(e.target.files);
    onUpdate([...files, ...newFiles]);
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-[rgb(0,0,122)]">{label}</h3>
      {files.length > 0 ? (
        <div className="bg-white p-4 rounded border mt-1 text-gray-800 shadow space-y-2">
          {files.map((file, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span>{file.name}</span>
              <a
                href={URL.createObjectURL(file)}
                download={file.name}
                className="text-green-600 hover:text-green-800"
                title="Download"
              >
                <Download size={18} />
              </a>
            </div>
          ))}
          <div className="mt-2">
            <button
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              onClick={() => inputRef.current.click()}
            >
              <UploadCloud size={18} />
              Upload More
            </button>
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              multiple
              accept="image/*,.pdf"
              onChange={handleUploadAgain}
            />
          </div>
        </div>
      ) : (
        <p className="text-red-600">No certificates uploaded</p>
      )}
    </div>
  );
};

// ✅ PropTypes
FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  setFile: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

ReadOnlyFile.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
};

ReadOnlyMultipleFiles.propTypes = {
  label: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UploadAttachments;
