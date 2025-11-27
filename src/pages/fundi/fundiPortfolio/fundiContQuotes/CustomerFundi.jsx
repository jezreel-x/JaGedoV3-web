import { lazy, Suspense } from "react";
import { FaFileAlt } from "react-icons/fa";
import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(() =>
  import("../../../../components/Navigation/NavigationBar")
);

const CustomerFundi = () => {
  // Prefilled notes and file list (static for display purposes)
  const adminNotes = "Install wall and floor tiles in living room and kitchen. Use waterproof adhesive. Check for alignment.";
  const files = [
    { name: "Project_Plan.pdf" },
    { name: "LivingRoom_Layout.jpg" },
    { name: "Video_Inspection.mp4" },
  ];

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <br />
      <br />
      <br />
      <br />

      <ActiveFundiNav />

      <div className="min-h-screen bg-gray-100 py-6 px-2 flex justify-center">
        <div className="max-w-6xl w-full bg-white shadow-md rounded-md p-4 space-y-4">
          <h1 className="text-xl font-semibold text-gray-700">Attachments</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            {/* Prefilled Admin Notes */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-4 rounded-md text-gray-800 whitespace-pre-line">
                {adminNotes}
              </div>
            </div>

            {/* Static File Display */}
            <div className="md:col-span-2 space-y-3">
              <div className="min-h-40 bg-gray-50 p-4 rounded-md">
                {files.length === 0 ? (
                  <div className="text-center text-gray-500">
                    <FaFileAlt className="text-3xl mb-1 mx-auto" />
                    <p>No files uploaded</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Uploaded Files:</h3>
                    <ul className="space-y-2">
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="flex justify-start items-center bg-white px-3 py-2 rounded shadow-sm"
                        >
                          <span className="text-gray-800 text-sm">{file.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFundi;
