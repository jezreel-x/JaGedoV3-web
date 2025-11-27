import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import SelectLocation from "./SelectLocation";
import FileUploader from "./FileUpload";

const ManageByJagedo = () => {
  const [selectedManager, setSelectedManager] = useState("JaGedo");
  const [formData, setFormData] = useState({
    skill: "",
    location: "",
    date: "",
    description: "",
    fileName: "",
  });
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (file) => {
    setFormData((prev) => ({
      ...prev,
      fileName: file.name,
    }));
  };

  const handleLocationSelect = (location) => {
    setFormData((prev) => ({
      ...prev,
      location,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = {
      ...formData,
      managedBy: selectedManager,
    };

    if (!agreed) {
      alert("You must agree to the terms before submitting.");
      return;
    }

    localStorage.setItem("fundiRequest", JSON.stringify(fullData));
    navigate("/customer/customer/fundi-requisition-invoice");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-white md:px-8 px-4 py-4 md:py-8 rounded-lg shadow-lg space-y-6 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-[rgb(0,0,122)] text-center font-['Roboto Serif',serif]">
        Place a request
      </h2>

    
      <div className="mt-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
    <div className="mt-6"> {/* Added margin-top here */}
  <label htmlFor="skill" className="block text-gray-800 font-semibold mb-1">
    Skill:
  </label>
  <select
    id="skill"
    name="skill"
    onChange={handleChange}
    value={formData.skill}
    className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 ${
      !formData.skill ? "text-gray-400" : "text-black"
    }`}
    required
  >
    <option className="text-gray-500" value="">Select Skill</option>
    <option value="Mason">Mason</option>
    <option value="Plumber">Plumber</option>
    <option value="Painter">Painter</option>
    <option value="Electrician">Electrician</option>
    <option value="Carpenter">Carpenter</option>
    <option value="Roofer">Roofer</option>
    <option value="Tile fixer">Tile fixer</option>
    <option value="Interior skimmer">Interior skimmer</option>
    <option value="Steel fixer">Steel fixer</option>
    <option value="Glass fitter">Glass fitter</option>
  </select>
</div>

      <SelectLocation onSelect={handleLocationSelect} />

      <div>
        <label htmlFor="date" className="block text-gray-800 font-semibold mb-1">
          Start Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
          className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 ${
            !formData.date ? "text-gray-400" : "text-black"
          }`}
          required
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
          onChange={handleChange}
          value={formData.description}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-gray-400"
          placeholder="Describe your request..."
          required
        />
      </div>
    </div>

    <div>
      <FileUploader onFileUpload={handleFileUpload} />
      {formData.fileName && (
        <p className="mt-2 text-sm text-green-700">Uploaded: {formData.fileName}</p>
      )}
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
              selectedManager === "JaGedo" ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-800"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">JaGedo</h2>
            <p className="text-lg text-left font-bold">JaGedo Oversees</p>

            <ul className="space-y-3 mt-4">
              <li className="flex items-center">
                <TiTick className="text-green-300 mr-2 text-xl" />
                Arrival time,
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-300 mr-2 text-xl" />
                Scope budget
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-300 mr-2 text-xl" />
                Workmanship for a day
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
                Arrival time 
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
                1 day payment
              </li>
              <p className="text-lg text-left font-bold">Client manages</p>
              <li className="flex items-center">
                <TiTick className="text-green-500 mr-2 text-xl" />
                Workmanship for a day
              </li>
            </ul>
          </button>
        </div>
      </section>

      {/* Terms */}
      <div className="bg-blue-200 text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-bold pb-2">Fundi Service Policy</h3>
        <p className="pb-4">
          For fundi, jobs exceeding one day, JaGedo recommends hiring a contractor through the platform,
          as we do not assume liability for fundi work beyond the first day.
        </p>

        <h3 className="font-bold text-xl mb-4">Terms & Conditions</h3>
        <ul className="space-y-3 mt-4">
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Fee covers one day labour and transport up to 30km from the county CBD.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Material costs are not included.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Response time within 48 hours of request placement.
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Working hours: 8.00a.m - 6.00p.m
          </li>
          <li className="flex items-center">
            <TiTick className="text-green-500 mr-2 text-xl" />
            Payments are processed through Jagedos Escrow system.
          </li>
        </ul>
      </div>

      {/* Agreement Checkbox */}
      <div className="flex justify-center my-2.5">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
          <span className="ml-2 underline font-semibold hover:text-[rgb(0,0,122)]">
            I agree to Fundi Agreement&apos;s
          </span>
        </label>
      </div>

      {/* Submit */}
      <div className="text-center mt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-[rgb(0,0,122)] text-white font-semibold rounded-md hover:bg-blue-900 transition"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
};

export default ManageByJagedo;
