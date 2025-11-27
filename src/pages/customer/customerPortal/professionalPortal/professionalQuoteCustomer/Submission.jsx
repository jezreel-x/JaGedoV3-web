
import { lazy, Suspense} from "react";

import { FaFileAlt } from "react-icons/fa";

import QuoteNavBar from "./QuoteNavBar";

const NavigationBar = lazy(
  () => import("../../../../../components/Navigation/NavigationBar")
);


// Static prefilled file list
const prefilledFiles = [
  { name: "quotation.pdf" },
  { name: "design_specs.docx" },
  { name: "presentation_video.mp4" }
];

   

 
const ProBillSummary = () => {

  // const [isChecked, setIsChecked] = useState(false);

  

  //    const handleClick = () => {
  //   if (isChecked) {
  //     navigate("/professional-portal/jobSpecification");
  //   }
  // };
  return (
    <section className="container mx-auto mt-32 px-4">

      {/* Lazy-loaded NavigationBar */}
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <QuoteNavBar />

      <div className="bg-white rounded-lg p-4 border border-gray-200 my-5">
        <div className="overflow-x-auto">
          {/* Attachments Section */}
          <div className="space-y-2 col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Attachments
            </h2>

            {/* Prefilled File Name - Readonly */}
            <input
              type="text"
              value="Uploaded files"
              disabled
              className="w-full px-2 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
            />

            {/* Uploaded Files Section */}
            <div className="min-h-60 bg-gray-100 px-4 py-6 rounded-md">
              <div>
                <h3 className="text-gray-800 font-semibold mb-1">
                  Uploaded Files:
                </h3>
                <ul className="bg-gray-100 p-2 rounded-md space-y-2">
                  {prefilledFiles.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm"
                    >
                      <span className="text-gray-700">{file.name}</span>
                      <FaFileAlt className="text-gray-500" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

{/* Agreement Section */}
       {/* <div className="mt-8 flex flex-col items-center bg-white p-8">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-5 h-5 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
          />
          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
            I agree to the{" "}
            <span className="font-semibold text-blue-900">
              Professional Agreement
            </span>
          </span>
        </label>

        <p className="text-sm text-gray-600 mt-4 mb-6 text-center max-w-md">
          Failure to adhere to the professional agreement and stipulated
          timelines will lead to
          <span className="font-semibold text-red-600">
            {" "}
            account suspension
          </span>
          .
        </p> */}

        {/* <button
          type="button"
          onClick={handleClick}
          className={`w-full max-w-md bg-blue-900 text-white py-3 rounded-lg font-medium transition-all duration-300
        ${
          !isChecked
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-blue-800 hover:shadow-lg active:transform active:scale-98"
        }`}
          disabled={!isChecked}
        >
          Submit Quote
        </button> */}
      {/* </div>  */}
          {/* Submit Button */}
          {/* <div className="text-center mt-4">
            <Link to="//quotation">
              <button
                type="button"
                className="px-6 py-2 bg-[rgb(0,0,122)] text-white font-semibold rounded-md hover:bg-blue-900 transition"
              >
                Submit Quote
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProBillSummary;
