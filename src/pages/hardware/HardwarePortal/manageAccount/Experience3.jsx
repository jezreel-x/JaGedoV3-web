// import { useState } from "react";
// import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

// import ProfileNavBar from "./ProfileNavBar";

// const Experience3 = () => {
//   const [attachments, setAttachments] = useState([
//     { id: 1, projectName: "", files: [] },
//     { id: 2, projectName: "", files: [] },
//     { id: 3, projectName: "", files: [] },
//     { id: 4, projectName: "", files: [] },
//     { id: 5, projectName: "", files: [] },
//   ]);

//   const handleFileChange = (rowId, file) => {
//     setAttachments((prev) =>
//       prev.map((item) => {
//         if (item.id === rowId && item.files.length < 3) {
//           return { ...item, files: [...item.files, file] };
//         }
//         return item;
//       })
//     );
//   };

//   const removeFile = (rowId, fileIndex) => {
//     setAttachments((prev) =>
//       prev.map((item) => {
//         if (item.id === rowId) {
//           const newFiles = [...item.files];
//           newFiles.splice(fileIndex, 1);
//           return { ...item, files: newFiles };
//         }
//         return item;
//       })
//     );
//   };

//   return (
//     <div className="flex">
//       <ProfileNavBar />
//       <div className="p-8 bg-gray-50 min-h-screen">
//         <div className="max-w-6xl ml-80 bg-white rounded-xl shadow-lg p-8">
//           <h1 className="text-3xl font-bold mb-8 text-gray-800">
//             Hardware Experience
//           </h1>

//           <form className="space-y-8">
//             {/* Skills Section */}
//             <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
//               <h2 className="text-xl font-semibold mb-6 text-gray-800">
//                 Skills Information
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[
//                   {
//                     label: "Skills",
//                     options: ["Mason", "Electrician", "Plumber"],
//                   },
//                   {
//                     label: "Level",
//                     options: ["Master Fundi", "Intermediate", "Junior"],
//                   },
//                   // {
//                   //   label: "Years of Experience",
//                   //   options: ["5+ years", "3-5 years", "1-3 years"],
//                   // },
//                 ].map((field, index) => (
//                   <div key={index} className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       {field.label}
//                     </label>
//                     <select className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors">
//                       {field.options.map((option) => (
//                         <option key={option} value={option.toLowerCase()}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Evaluation Form */}
//             {/* <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
//               <h2 className="text-xl font-semibold mb-6 text-gray-800">
//                 Evaluation Form
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Have you done any major works in the construction industry?
//                   </label>
//                   <select className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900">
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>

//                 {[
//                   "State the materials that you have been using mostly for your jobs",
//                   "Name essential equipment that you have been using for your job",
//                   "How do you always formulate your quotations?",
//                 ].map((label, index) => (
//                   <div key={index} className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                       {label}
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 "
//                       placeholder="Enter your response..."
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div> */}

//             {/* Project Attachments */}
//             <div className="bg-white rounded-xl border border-gray-200">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50">
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
//                         No.
//                       </th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
//                         Project Name
//                       </th>
//                       <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
//                         Project Files (Max 3)
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {attachments.map((row) => (
//                       <tr
//                         key={row.id}
//                         className="hover:bg-gray-50 transition-colors"
//                       >
//                         <td className="px-6 py-4 text-gray-500">{row.id}</td>
//                         <td className="px-6 py-4">
//                           <input
//                             type="text"
//                             placeholder="Enter project name"
//                             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
//                           />
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="space-y-2">
//                             {row.files.map((file, index) => (
//                               <div
//                                 key={index}
//                                 className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"
//                               >
//                                 <span className="text-sm text-gray-600">
//                                   {file.name}
//                                 </span>
//                                 <button
//                                   type="button"
//                                   onClick={() => removeFile(row.id, index)}
//                                   className="text-red-500 hover:text-red-700"
//                                 >
//                                   <XMarkIcon className="w-5 h-5" />
//                                 </button>
//                               </div>
//                             ))}
//                             {row.files.length < 3 && (
//                               <div className="flex items-center gap-2">
//                                 <input
//                                   type="file"
//                                   onChange={(e) =>
//                                     handleFileChange(row.id, e.target.files[0])
//                                   }
//                                   className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition-colors"
//                                 />
//                                 <PlusIcon className="w-5 h-5 text-blue-700" />
//                               </div>
//                             )}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
//               >
//                 Submit Experience
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience3;
