import { useEffect, useState } from "react";

const FileImportPreview = () => {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("fileData"));
    setFileData(storedData);
  }, []);

  if (!fileData) {
    return <p className="text-center mt-8">No file selected.</p>;
  }

  const { type, name, content } = fileData;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Preview: {name}</h2>

      {type === "image" && (
        <img
          src={content}
          alt="Preview"
          className="w-full rounded-lg shadow-lg"
        />
      )}

      {type === "csv" && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                {Object.keys(content[0] || {}).map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 border bg-gray-200 text-gray-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="px-4 py-2 border">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {type === "pdf" && (
        <div className="text-center">
          <p className="text-gray-700 mb-4">PDF loaded successfully.</p>
          <a
            href={content}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Open PDF
          </a>
        </div>
      )}

      {type === "docx" && (
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="whitespace-pre-wrap text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default FileImportPreview;
