import { lazy, Suspense } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import ActiveFundiNav from "./ActiveFundiNav";


const NavigationBar = lazy(
  () => import("../../../../components/Navigation/NavigationBar")
);

const CustomerFundi = () => {
 

  const dummyFiles = [
    { name: "File 1.pdf", url: "/path/to/file1.pdf" },
    { name: "File 2.docx", url: "/path/to/file2.docx" },
  ];

  

  return (
    <>
    <Suspense fallback={<div>Loading navigation...</div>}>
      <NavigationBar />
    </Suspense>
<br ></br>
<br ></br>
<br ></br>
    <ActiveFundiNav />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-2">
    <div className="max-w-6xl w-full mx-auto p-2 bg-white shadow-md rounded-md flex flex-col space-y-6">


        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-600 mt-6 mb-4">
          Attachments
        </h1>

        {/* Card Container */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description Section */}
          <div className="border-r border-gray-200 pr-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reprehenderit minus molestiae libero et aut accusamus consequuntur.
            </p>
          </div>

          {/* Files Table Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Attachments</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-700 border-collapse rounded-xl overflow-hidden">
                <thead className="bg-gray-100 text-gray-800 font-semibold">
                  <tr>
                    <th className="px-6 py-3 text-left">File Name</th>
                    <th className="px-6 py-3 text-left">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyFiles.map((file, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 border-t border-gray-200 transition"
                    >
                      <td className="px-6 py-4">{file.name}</td>
                      <td className="px-6 py-4">
                        <a
                          href={file.url}
                          download
                          className="flex items-center text-blue-700 hover:text-blue-900 gap-2"
                        >
                          <ArrowDownTrayIcon className="w-5 h-5" />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CustomerFundi;
