
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import FileUploader from "../../forms/FileUpload";
import LocationSelect from "../../forms/SelectLocation";

const ManageBySelf = () => {
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
      <h2 className="text-2xl font-bold text-[rgb(0,0,122)] text-center font-['Roboto Serif',serif]">
        Request Professional
      </h2>

      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="mt-6">
              <label htmlFor="skill" className="block text-gray-800 font-semibold mb-1">
                Professional:
              </label>
              <select
                id="skill"
                name="skill"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-gray-500"
              >
                <option className="text-gray-400" value="">
                  Select Profession
                </option>
                <option value="architect">Architect</option>
                <option value="plumber">Water Engineer</option>
                <option value="painter">Project Manager</option>
                <option value="painter">Structural Engineer</option>
                <option value="painter">Civil Engineer</option>
                <option value="painter">Electrical Engineer</option>
                <option value="electrician">Mechanical Engineer</option>
                <option value="painter">Roads Engineer</option>
                <option value="painter">Quantity Surveyor</option>
                <option value="painter">Construction Manager</option>
                <option value="painter">Hydrologist</option>
                <option value="painter">Geologist</option>
                <option value="painter">Geotechnical Engineer</option>
                <option value="painter">Land Surveyor</option>
                <option value="painter">Landscape Architect</option>
                <option value="painter">Environmental Officer</option>
              </select>
            </div>

            <LocationSelect />

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

          <div>
            <FileUploader />
          </div>
        </div>
      </div>

      {/* Managed By Section */}
      <section className="p-0 md:p-6">
        <h1 className="text-3xl font-semibold text-[rgb(0,0,122)] text-center">Managed By:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <button
            type="button"
            onClick={() => setSelectedManager("JaGedo")}
            className={`cursor-pointer p-6 rounded-2xl shadow-lg transition hover:scale-105 ${
              selectedManager === "JaGedo"
                ? "bg-[rgb(0,0,122)] text-white"
                : "bg-blue-200 text-gray-800"
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
               Scope of budget: Determined through Competitive bidding
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-300 mr-2 text-xl" />
                Quality: Professionalism and peer reviewing
              </li>
            </ul>
          </button>

          <button
            type="button"
            onClick={() => setSelectedManager("Self")}
            className={`cursor-pointer p-6 rounded-2xl shadow-lg transition hover:scale-105 ${
              selectedManager === "Self"
                ? "bg-[rgb(0,0,122)] text-white"
                : "bg-blue-200 text-gray-800"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">Self</h2>
            <p className="text-lg text-left font-bold">JaGedo Oversees</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
                Scope budget: Determined through Competitive bidding.
              </li>
              <p className="text-lg text-left font-bold">Client manages</p>
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
                Time: Duration of Execution.
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
                Quality: Professionalism and peer review.
              </li>
            </ul>
          </button>
        </div>
      </section>

      {/* Terms */}
      <div className="bg-blue-200 text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-bold pb-2">Professional Service Policy</h3>
        <p className="pb-4">
          For professional jobs JaGedo recommends professionals registered with professional bodies i.e BORAQS, EBK, GRB e.t.c through the platform.
        </p>

        <h3 className="font-bold text-xl mb-4">Terms & Conditions</h3>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Fee covers Professional travel, printing and communication charges.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Response time within 8 days of request placement.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Working hours: 8.00a.m-6.00p.m
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Payments are processed through Jagedos Escrew system.
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
            I agree to Professional Agreement&apos;s
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

export default ManageBySelf;
