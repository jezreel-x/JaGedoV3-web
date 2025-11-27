import { useState } from 'react';

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <div className="max-w-xl p-6 rounded shadow">

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="block mb-4"
      />

      <div>
        {files.length > 0 ? (
          <ul className="list-disc list-inside">
            {files.map((file, index) => (
              <li key={index} className="text-sm">
                {file.name} ({Math.round(file.size / 1024)} KB)
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
