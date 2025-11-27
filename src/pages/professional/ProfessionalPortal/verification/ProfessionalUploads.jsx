
import { useState } from "react";
import { FiDownload, FiUpload, FiTrash2 } from "react-icons/fi";
import ProfileNavBarVerification2 from "./ProfileNavBarVerification2";



const Uploads2 = () => {

  const [documents, setDocuments] = useState({
    idFront: {
      name: "ID-Front.pdf",
      url: "/documents/ID-Front.pdf",
    },
    idBack: {
      name: "id-Back.pdf",
      url: "/documents/id-Back.pdf",
    },

    KRAPin: {
      name: "KRA-Pin.pdf",
      url: "/dKRA-Pin.pdf",
    },

    certificates: {
      name: "Academic certificates.pdf",
      url: "/documents/Academic certificates.pdf",
    },

    cv: {
      name: "CV.pdf",
      url: "/documents/CV.pdf",
    },

    practicingCertificate: {
      name: "Practicing Certificate.pdf",
      url: "/documents/Practicing-Certificate.pdf",
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

  const handleDelete = (key) => {
    const updated = { ...documents };
    delete updated[key];
    setDocuments(updated);
  };
 

  return (
    <div className="flex min-h-screen bg-gray-50">

      <ProfileNavBarVerification2 />
      <div className="flex-grow p-8 ml-[20rem]">
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Uploaded Documents</h2>
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
        </div>
      </div>

    </div>
  );
};


export default Uploads2;
