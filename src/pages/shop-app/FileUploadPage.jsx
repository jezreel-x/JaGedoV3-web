import { useState } from "react";
import toast from "react-hot-toast";
import * as XLSX from "xlsx";
import ParsedPreviewTable from "./ParsedPreviewTable";
import { useNavigate, useLocation } from "react-router-dom";
// import ParsedPreviewTable from "./ParsedPreviewTable";


export default function FileUploadPage() {

  const [files, setFiles] = useState([]);
  const [templateDownloaded, setTemplateDownloaded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const fromPath = location.state?.from; // Default to builder if not provided

  // Expected column headers (match your Excel template)
  const expectedHeaders = [
    "Number", "Thumbnail", "Product Name", "Product Description", "Price",
    "SKU", "BID", "Material", "Size", "Color", "Region", "UOM"
  ];

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTemplateDownload = () => {
    setTemplateDownloaded(true);
    toast.success("Template downloaded! You can now upload your file.");
  };

  const isValidFile = (file) => {
    const allowedTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
      "text/csv", // .csv
    ];
    return file && allowedTypes.includes(file.type);
  };

  const validateFileStructure = async (file) => {
    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const headers = jsonData[0]?.map((h) => h?.trim());
      const isValid = expectedHeaders.every((h, i) => headers[i] === h);

      return isValid;
    } catch (error) {
      return false;
    }
  };

  const handleFiles = async (selectedFiles) => {
    const file = selectedFiles[0];
    if (!isValidFile(file)) {
      toast.error("Invalid file type. Only .xlsx and .csv files are allowed.");
      return;
    }

    const isValidStructure = await validateFileStructure(file);
    if (isValidStructure) {
      toast.error("File structure doesn't match the required template.");
      return;
    }

    setFiles((prev) => [...prev, ...selectedFiles]);
    toast.success("File uploaded successfully!");

    setTimeout(() => {
      const fallbackPath = "/builder-products";
      const navigationPath = fromPath || fallbackPath;
      navigate(navigationPath);
    }, 2000);

  };

   const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    // if (isValidFile(droppedFiles[0])) {
    //   setFiles((prev) => [...prev, ...droppedFiles]);
    // }
    handleFiles(droppedFiles);
  };

  const handleBrowse = (e) => {
    const selectedFiles = Array.from(e.target.files);
    // if (isValidFile(selectedFiles[0])) {
    //   setFiles((prev) => [...prev, ...selectedFiles]);
    // }
    // toast.success("File successfully uploaded!");
    handleFiles(selectedFiles);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      {/* <Toaster position="top-right" /> */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-md p-8 bg-white w-full max-w-xl text-center"
        onDrop={templateDownloaded ? handleDrop : preventDefaults}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        onDragLeave={preventDefaults}
      >
        <p className="text-gray-600 mb-2">Drag and drop your file here.</p>
        <p className="text-gray-500 mb-4">- or -</p>

        <label
          className={`inline-block px-4 py-2 rounded text-white ${
            templateDownloaded
              ? "bg-[rgb(0,0,112)] hover:bg-blue-200 hover:text-gray-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Browse
          <input
            type="file"
            multiple
            disabled={!templateDownloaded}
            onChange={handleBrowse}
            className="hidden"
            accept=".xlsx,.csv"
          />
        </label>

        <div className="mt-4 space-x-4">
          <button
            className="text-sm border-none cursor-pointer px-4 py-3 bg-[rgb(0,0,112)] text-white hover:bg-blue-300 hover:text-gray-700 rounded"
            onClick={handleTemplateDownload}
          >
            <a href="/product-template.xlsx" download>
              Download Template
            </a>
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          You can import up to 5000 records through an .xls, .xlsx, .vcf or .csv
          file. To import more than 5000 records at a time, use a .csv file.
        </p>

        {files.length > 0 && (
          <div className="mt-6 text-left">
            <h4 className="font-semibold mb-2">Selected files:</h4>
            <ul className="text-sm text-gray-700 list-disc list-inside">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-6">
        {files.length > 0 ? (
          <ParsedPreviewTable file={files[0]} />
        ) : (
          <p className="text-gray-500">No preview available. Upload a file to see parsed data.</p>
        )}
      </div>

    </div>
  );
}
