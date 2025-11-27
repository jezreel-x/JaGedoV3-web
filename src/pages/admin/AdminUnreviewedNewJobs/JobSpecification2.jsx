import { useState, useEffect, useRef } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import {  FaTrash, FaFileAlt } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useNavigate, Link } from "react-router-dom";

const JobForm = () => {
        const navigate = useNavigate();
          const [method, setMethod] = useState("Restricted");
  const methods = ["Restricted", "Competitive"];
  
  const [adminNotes, setAdminNotes] = useState("");

  const dummyFiles = [
    { name: "File 1.pdf", url: "/path/to/file1.pdf" },
    { name: "File 2.docx", url: "/path/to/file2.docx" },
  ];

  const [files, setFiles] = useState([]);
      const [fileName, setFileName] = useState("");
  

       const [showConfirm, setShowConfirm] = useState(false);
        const [showReason, setShowReason] = useState(false);
        const [reason, setReason] = useState("");
      
        const buttonRef = useRef(null); // optional: for advanced positioning
      
        const handleCloseJob = () => {
          console.log("Job closed with reason:", reason);
          // Close logic or API call here
          setShowReason(false);
          setReason("");
        };

      const handleFileUpload = (event) => {
        if (!fileName.trim()) {
          alert("Please enter a file name before uploading.");
          return;
        }
    
        const uploadedFiles = Array.from(event.target.files);
        const newFiles = uploadedFiles.map((file) => ({
          name: fileName || file.name,
          raw: file,
        }));
        setFiles((prev) => [...prev, ...newFiles]);
        setFileName(""); // Clear the file name input after upload
        event.target.value = null; // Reset file input
      };
  

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  
    useEffect(() => {
      if (method === "Restricted") {
        navigate("/admin-cont-jobspecification2");
      } else if (method === "Competitive") {
        navigate("/admin/competitive/contractor");
      }
    }, [method, navigate]);
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg relative border border-gray-200">
       <div className="flex items-center space-x-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">REQ 254</h1>
        <span className="text-xs font-semibold bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-full shadow-sm">
          Unreviewed
        </span>
        <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          Restricted
        </span>
      </div>
      <br className="my-6 border-gray-200" />
       <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <span className="text-gray-700 font-semibold mr-2">Method:</span>
          <select
            className="border p-2 rounded-md shadow-sm"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            {methods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br className="my-6 border-gray-200" />
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
    
    <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Details</h2>

      
           {/* Customer Details */}
           <div className="grid grid-cols-2 gap-6">
        {[
          { label: "Name", value: "Jagedo Limited" },
          { label: "Phone", value: "0722334455" },
          { label: "Email", value: "icode@gmail.com" },
          { label: "Location", value: "Nairobi" },
        ].map((item, index) => (
          <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
            <span className="font-semibold text-gray-800 w-32">{item.label}:</span>
            <span className="text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>
      </div>
      {/* Job Detail Section */}
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Project Details
        </h2>
        <div className="flex justify-between gap-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            {[
              { label: "Contractor", value: "Electrical" },
              { label: "Class", value: "6" },
              { label: "Status", value: "Started" },
              { label: "Location", value: "Kenya, Nairobi, Kasarani" },
              { label: "Start Date", value: "20/11/2024" },
              { label: "End Date", value: "12/12/2025" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200"
                >
                <span className="font-semibold text-gray-800 w-24">
                  {item.label}:
                </span>
                <span className="text-gray-700">{item.value}</span>
              </div>
            ))}
          </div>

           {/* Right Column */}
                             <div className="w-1/2 pl-8 border-l border-gray-200 space-y-4">
                               {/* Download Receipt Section */}
                                 <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg cursor-not-allowed opacity-60 border border-gray-300">
  {/* Download Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-6V4m-6 4l3 3 3-3"
    />
  </svg>
  <span className="text-gray-600 font-medium">Download Receipt</span>
</div>
                               {/* Managed by Jagedo Section */}
                               <div className="bg-blue-50 p-4 rounded-2xl shadow-md border border-gray-200">
                                 <h3 className="text-2xl font-bold text-blue-900">
                                   Managed by Self
                                 </h3>
                               </div>
                   
                               {/* Package Details Section */}
                                  {/* Package Details Section */}
                               <div className="bg-blue-50 p-4 rounded-2xl shadow-md mt-4 border border-gray-200">
                                 <h3 className="text-2xl font-bold text-blue-900 mb-2">
                                   Package details
                                 </h3>
                                 <p className="text-lg font-semibold text-gray-800">
                                   Jagedo Oversees
                                 </p>
                   
                                 <ul className="space-y-3 mt-4 text-gray-700">
                                   <li className="flex items-center">
                                     <TiTick className="text-green-500 mr-2 text-xl" />
                                     Scope of Budget: Determined through Competitive Bidding
                                   </li>
                                    <p className="text-lg font-semibold text-gray-800">
                                   Client Manages
                                 </p>
                                   <li className="flex items-center">
                                     <TiTick className="text-green-500 mr-2 text-xl" />
                                     Time: Duration of execution
                                   </li>
                                   <li className="flex items-center">
                                     <TiTick className="text-green-500 mr-2 text-xl" />
                                    Quality: Workmanship and site supervision
                                   </li>
                                 </ul>
                               </div>
                             </div>
        </div>
      </div>

    
          <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
          
            {/* Description */}
            <div className="col-span-2 pr-6 border-r border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Customer notes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit minus molestiae libero et aut accusamus consequuntur.
              </p>
            </div>
    
            {/* Files Table */}
    
            <div className="col-span-2">
              <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">
                    
                      File Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">
                      Attachment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dummyFiles.map((file, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-all duration-200"
                    >
                      <td className="px-6 py-4 border-t border-gray-200">{file.name}</td>
                      <td className="px-6 py-4 border-t border-gray-200 flex items-center gap-4">
                        <a
                          href={file.url}
                          download
                          className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-colors"
                        >
                          <ArrowDownTrayIcon className="w-5 h-5" />
                          Download
                        </a>
                        <a
                          href={file.url}
                          download
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {/* <PaperClipIcon className="w-5 h-5" /> */}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <br className="my-6 border-gray-200" />

      {/* Admin Section */}
           <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
             <div className="col-span-2 pr-6 border-r border-gray-200">
               <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Notes</h2>
               <textarea
                 className="w-full p-6 border border-gray-200 rounded-md"
                 rows="10"
                 placeholder="Enter admin notes..."
                 value={adminNotes}
                 onChange={(e) => setAdminNotes(e.target.value)}
               />
             </div>
     
             {/* Uploaded Files Table */}
             <div className="space-y-2 col-span-2">
             <h2 className="text-xl font-bold text-gray-800 mb-4">Attachments</h2>
     
               {/* File Upload Row */}
               <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2 bg-gray-100 gap-2">
              
              
                 <input
                   type="text"
                   placeholder="Enter file name"
                   className="flex-1 px-2 py-1 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-blue-300 bg-white"
                   />
     
                 {/* File Input */}
                 <label
                   className={`cursor-pointer flex items-center ${!fileName.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
                   title={!fileName.trim() ? "Enter a file name first" : ""}
                 >
                   <AiOutlinePaperClip className="text-gray-700 text-2xl" />
                   <input
                     type="file"
                     className="hidden"
                     onChange={handleFileUpload}
                     multiple
                     disabled={!fileName.trim()}
                   />
                 </label>
     
                 {/* Video Upload */}
                 {/* <label
                   className={`cursor-pointer flex items-center ${!fileName.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
                   title={!fileName.trim() ? "Enter a file name first" : ""}
                 >
                   <FaVideo className="text-red-500 text-xl" />
                   <input
                     type="file"
                     className="hidden"
                     onChange={handleFileUpload}
                     multiple
                     disabled={!fileName.trim()}
                   />
                 </label> */}
     
                
               </div>
     
               {/* Uploaded Files Section */}
               <div className="min-h-60 bg-gray-100 px-4 py-6 rounded-md">
                 {files.length === 0 ? (
                   <div className="text-center text-gray-500">
                     <FaFileAlt className="text-4xl mb-2" />
                     <p>No files uploaded</p>
                   </div>
                 ) : (
                   <div>
                     <h3 className="text-gray-800 font-semibold mb-1">
                       Uploaded Files:
                     </h3>
                     <ul className="bg-gray-100 p-2 rounded-md space-y-2">
                       {files.map((file, index) => (
                         <li
                           key={index}
                           className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm"
                         >
                           <span className="text-gray-700">{file.name}</span>
                           <button
                             type="button"
                             onClick={() => removeFile(index)}
                             className="text-red-500 hover:text-red-700"
                           >
                             <FaTrash />
                           </button>
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
               </div>
             </div>
           </div>
           
      
      {/* View Register Button */}
       {/* Action Buttons */}
  <div className="flex justify-between mt-6">
    {/* View Register Button */}
    <Link to="/register?skill=Electrical">
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Register
      </button>
    </Link>

        {/* Close Job Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setShowConfirm(true)}
        className="bg-[rgb(0,0,122)] text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800"
      >
        Close Job
      </button>

        {/* Confirm Modal (Card-style) */}
      {showConfirm && (
        <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-md shadow-md w-64 p-4 z-10">
          <h2 className="text-sm font-semibold mb-3">
            Are you sure you want to close the job?
          </h2>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowConfirm(false)}
              className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowConfirm(false);
                setShowReason(true);
              }}
              className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Yes
            </button>
          </div>
        </div>
      )}

       {/* Reason Modal (Card-style) */}
      {showReason && (
        <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-md shadow-md w-80 p-4 z-10">
          <h2 className="text-sm font-semibold mb-2">
            Reason for closing the job
          </h2>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            placeholder="Enter reason..."
            className="w-full text-sm border border-gray-300 rounded p-2 mb-3"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => {
                setShowReason(false);
                setReason("");
              }}
              className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleCloseJob}
              disabled={!reason.trim()}
              className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Submit & Close
            </button>
          </div>
        </div>
      )}
   
  </div>
    </div>
  );
};

export default JobForm;
