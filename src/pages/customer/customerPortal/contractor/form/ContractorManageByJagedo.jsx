import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import SelectLocation from "../../forms/SelectLocation";
import FileUploader from "../../forms/FileUpload";

const ContractorManageByJagedo = () => {
  const [selectedManager, setSelectedManager] = useState("JaGedo");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleQuotationRequest = () => {
    if (agreed) {
      navigate("/customer/new");
    } else {
      alert("Please agree to the Professional Agreement first.");
    }
  };

  return (
    <form className="mx-auto bg-white md:px-8 px-4 py-4 md:py-8 rounded-lg shadow-lg space-y-6 border border-gray-200">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[rgb(0,0,122)] text-center font-['Roboto Serif',serif]">
        Request Contactor
      </h2>

      {/* Two-column form layout */}
      <div className="mt-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Skill */}
          <div className="mt-6">
            <label htmlFor="skill" className="block text-gray-800 font-semibold mb-1">
              Contractor:
            </label>
            <select
              id="skill"
              name="skill"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-gray-500"
            >
              <option value="">Select Contactor</option>
              <option value="Builder">Building Works</option>
              <option value="water">Water</option>
              <option value="mechanical">Mechanical</option>
              <option value="electrical">Electrical</option>
              <option value="civil">Civil Works & Roads</option>
            </select>
          </div>

          {/* Location */}
          <SelectLocation />

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-gray-800 font-semibold mb-1">
              Start Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-gray-500"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-gray-800 font-semibold mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              placeholder="Describe your request..."
            />
          </div>
        </div>

        {/* Right Column (File Upload) */}
        <div>
          <FileUploader />
        </div>
      </div>
      </div>

      {/* Package Section */}
      <section className="p-0 md:p-6">
        <h1 className="text-3xl font-semibold text-[rgb(0,0,122)] text-center">Managed By:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <button
            type="button"
            onClick={() => setSelectedManager("JaGedo")}
            className={`cursor-pointer p-6 rounded-2xl shadow-lg transition hover:scale-105 ${
              selectedManager === "JaGedo" ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-800"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">JaGedo</h2>
            <p className="text-lg text-left font-bold">JaGedo Oversees</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center">
                <TiTick className="text-green-300 mr-2 text-xl" />
                Time: Duration of Execution
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-300 mr-2 text-xl" />
                Scope of Budget: Determined through competitive bidding.
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-300 mr-2 text-xl" />
                Quality :Workmanship and site supervisions.
              </li>
            </ul>
          </button>

          <button
            type="button"
            onClick={() => setSelectedManager("Self")}
            className={`cursor-pointer p-6 rounded-2xl shadow-lg transition hover:scale-105 ${
              selectedManager === "Self" ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-800"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">Self</h2>
            <p className="text-lg text-left font-bold">JaGedo Oversees</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
               Scope of Budget: Determined through Competitve Bidding
              </li>
              <p className="text-lg text-left font-bold">Client manages</p>
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
                Time: Duration of Execution
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
                Quality :Workmanship and site supervisions.
              </li>
            </ul>
          </button>
        </div>
      </section>

      {/* Terms */}
      <div className="bg-blue-200 text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-bold pb-2">Contractor Service Policy</h3>
        <p className="pb-4">
          For contractor jobs JaGedo recommends contractors registered with regulatory bodies i.e NCA, EPRA e.t.c through the platform.
        </p>
        <h3 className="font-bold text-xl mb-4">Terms & Conditions</h3>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Quote covers safety, labour, materials, plant, equipment, machinery & contractor mark up.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Response time within 15 days of request placement.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Mobilization time within 15 days of award to contractor.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Working hours 8am-6pm.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Payments are passed through JaGedo&lsquo;s Escrow System.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Downward scope variations: not allowed.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Upward scope variations: treated as a different job.
          </li>
        </ul>
      </div>

      {/* Agreement Checkbox */}
      <div className="flex justify-center my-2.5">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="mr-2"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span className="underline font-semibold hover:text-[rgb(0,0,122)]">
            I agree to Contractor Agreement&apos;s
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-4">
        <button
          type="button"
          onClick={handleQuotationRequest}
          className={`px-6 py-2 text-white font-semibold rounded-md transition ${
            agreed ? "bg-[rgb(0,0,122)] hover:bg-blue-800" : "bg-blue-200"
          }`}
        >
          Request for Quotation
        </button>
      </div>
    </form>
  );
};

export default ContractorManageByJagedo;
