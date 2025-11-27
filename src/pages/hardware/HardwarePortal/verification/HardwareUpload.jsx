import { useState, useEffect } from "react";
import { FiDownload, FiUpload, FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";
import ProfileNavBarVerification3 from "./ProfileNavBarVerification3";

const Uploads2 = () => {
  // Assume these are your already uploaded file URLs or dummy placeholders
  const [documents, setDocuments] = useState({
    businessPermits: {
      name: "Business_Permits.pdf",
      url: "/uploads/Business_Permits.pdf",
    },
    businessRegistration: {
      name: "Business_Registration.pdf",
      url: "/uploads/Business_Registration.pdf",
    },
    kraPin: {
      name: "KRA_PIN.pdf",
      url: "/uploads/KRA_PIN.pdf",
    },
    companyProfile: {
      name: "Company_Profile.pdf",
      url: "/uploads/Company_Profile.pdf",
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        name: file.name,
        url: URL.createObjectURL(file), // Temporary URL for preview
      };
      const key = file.name.split(".")[0].replace(/[-\s]/g, "").toLowerCase();
      setDocuments((prev) => ({
        ...prev,
        [key]: newDoc,
      }));
    }
  };

  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  const handleDelete = (key) => {
    const updated = { ...documents };
    delete updated[key];
    setDocuments(updated);
  };
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
    <div className="flex min-h-screen bg-gray-50">
      <ProfileNavBarVerification3 />
      <div className="flex-grow p-8 ml-[20rem]">
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Uploaded Documents
            </h2>
          </div>

          <div className="space-y-6">
            {Object.entries(documents).map(([key, doc]) => (
              <div
                key={key}
                className="flex items-center justify-between bg-gray-100 px-6 py-5 rounded-lg shadow-sm border border-gray-300"
              >
                <div>
                  <p className="text-lg font-semibold text-blue-800 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="text-sm text-gray-500">{doc.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={doc.url}
                    download
                    className="text-blue-800 hover:text-blue-700"
                    title="Download"
                  >
                    <FiDownload className="w-5 h-5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleDelete(key)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>

                  <label
                    title="Replace"
                    className="cursor-pointer text-green-600 hover:text-green-800"
                  >
                    <FiUpload className="w-5 h-5" />
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, key)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            ))}
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
        </div>
      </div>
    </div>
  );
};

const UploadedFile = ({ label, file }) => {
  return (
    <div className="space-y-2 mb-4">
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
        <span className="text-sm text-gray-700">{file.name}</span>
        <a
          href={file.url}
          download
          className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        >
          Download
        </a>
      </div>
    </div>
  );
};

// PropTypes validation
UploadedFile.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Uploads2;
