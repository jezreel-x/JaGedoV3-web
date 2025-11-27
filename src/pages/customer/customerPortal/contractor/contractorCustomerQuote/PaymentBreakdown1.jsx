import { lazy, Suspense } from "react";
// import { Link } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import QuoteNavBar3 from "./QuoteNavBar3";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar2")
);

const ProBillSummary = () => {
  // Prefilled attachment data
  const attachments = [
    { name: "invoice.pdf", type: "Document" },
    { name: "contract.docx", type: "Document" },
    { name: "meeting_recording.mp4", type: "Video" },
    { name: "proposal.xlsx", type: "Document" },
  ];

  return (
    <>
      {/* Lazy-loaded NavigationBar */}
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
         <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-32 lg:px-8 py-8">

    
      <QuoteNavBar3 />

      <div className="bg-white rounded-lg p-4 border border-gray-200 my-5">
        <div className="overflow-x-auto">
          {/* Attachments Table */}
          <div className="space-y-2 col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Attachments
            </h2>

            <div className="min-h-60 bg-gray-100 px-4 py-6 rounded-md">
              {attachments.length === 0 ? (
                <div className="text-center text-gray-500">
                  <FaFileAlt className="text-4xl mb-2" />
                  <p>No attachments available</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">
                    Attached Files:
                  </h3>
                  <ul className="bg-gray-100 p-2 rounded-md space-y-2">
                    {attachments.map((file, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm"
                      >
                        <span className="text-gray-700">{file.name}</span>
                        <span className="text-sm text-gray-500 italic">
                          ({file.type})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button
          <div className="text-center mt-4">
            <Link to="/quotation">
              <button
                type="button"
                className="px-6 py-2 bg-[rgb(0,0,122)] text-white font-semibold rounded-md hover:bg-blue-900 transition"
              >
                Make Payment
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProBillSummary;
