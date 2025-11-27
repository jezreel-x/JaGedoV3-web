// import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
// import mammoth from "mammoth";
import { CiImport } from "react-icons/ci";

const FileImportButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/file-import/preview", { state: { from: location.pathname } });
  };

  /*
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "text/csv",
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Unsupported file type. Please upload JPG, PNG, CSV, PDF, or DOCX.");
      return;
    }

    const reader = new FileReader();

    if (file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      localStorage.setItem("fileData", JSON.stringify({
        type: "image",
        name: file.name,
        content: imageUrl,
      }));
      toast.success("Image imported successfully!");
      navigate("/file-import/preview");
    } 
    else if (file.type === "text/csv") {
      reader.onload = (e) => {
        const csvText = e.target.result;
        const csvRows = csvText.split("\n").filter(row => row.trim() !== "");
        const headers = csvRows[0].split(",");
        const data = csvRows.slice(1).map(row => {
          const values = row.split(",");
          return headers.reduce((acc, header, index) => {
            acc[header.trim()] = values[index]?.trim();
            return acc;
          }, {});
        });
        
        localStorage.setItem("fileData", JSON.stringify({
          type: "csv",
          name: file.name,
          content: data,
        }));
        toast.success("CSV imported successfully!");
        navigate("/file-import/preview");
      };
      reader.readAsText(file);
    }
    else if (file.type === "application/pdf") {
      reader.onload = (e) => {
        const pdfBase64 = e.target.result;
        localStorage.setItem("fileData", JSON.stringify({
          type: "pdf",
          name: file.name,
          content: pdfBase64,
        }));
        toast.success("PDF loaded successfully!");
        navigate("/file-import/preview");
      };
      reader.readAsDataURL(file);
    }
    else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const { value: docxText } = await mammoth.extractRawText({ arrayBuffer });
        localStorage.setItem("fileData", JSON.stringify({
          type: "docx",
          name: file.name,
          content: docxText,
        }));
        toast.success("DOCX loaded successfully!");
        navigate("/file-import/preview");
      };
      reader.readAsArrayBuffer(file);
    }
  };
  */

  return (
    <div className="">
      <button
        type="button"
        onClick={handleNavigate}
        className="inline-flex gap-2 items-center cursor-pointer bg-[rgb(0,0,112)] hover:bg-blue-300 hover:text-black text-white font-semibold px-7 py-3.5 rounded-lg transition duration-300 ease-in-out"
      >
        <CiImport className="text-xl" /> 
        Import File 
      </button>

      {/*
      <input
        id="fileInput"
        type="file"
        accept=".jpg,.jpeg,.png,.csv,.pdf,.docx"
        onChange={handleFileChange}
        className="hidden"
      />
      */}
    
    </div>
  );
};

export default FileImportButton;
