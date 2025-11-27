import { useState, useEffect } from "react";

const countryData = {
  Kenya: {
    county: "Nairobi",
    subCounty: "Muthaiga",
    estate: "Ushindi Drive",
  },
  Uganda: {
    county: "Kampala",
    subCounty: "Kololo",
    estate: "Bugolobi Heights",
  },
  Tanzania: {
    county: "Dar es Salaam",
    subCounty: "Kinondoni",
    estate: "Masaki",
  },
};

function EditCountry() {
  const [country, setCountry] = useState("Kenya");
  const [county, setCounty] = useState("");
  const [subCounty, setSubCounty] = useState("");
  const [estate, setEstate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const selected = countryData[country];
    if (selected) {
      setCounty(selected.county);
      setSubCounty(selected.subCounty);
      setEstate(selected.estate);
    }
  }, [country]);

  const handleUpdate = async () => {
    // const updatedAddress = { country, county, subCounty, estate };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

     

      setMessage("✅ Address updated successfully!");
    } catch (err) {
      setMessage("❌ Failed to update address. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center mt-20 px-4">
      <div className="w-full max-w-md rounded-2xl space-y-4">
        <h1 className="text-3xl font-semibold text-gray-900">Update Location</h1>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            {Object.keys(countryData).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">County</label>
          <input
            type="text"
            value={county}
            readOnly
            className="mt-1 w-full rounded-lg border bg-gray-100 border-gray-300 px-4 py-2 text-gray-700 shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sub County</label>
          <input
            type="text"
            value={subCounty}
            readOnly
            className="mt-1 w-full rounded-lg border bg-gray-100 border-gray-300 px-4 py-2 text-gray-700 shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Estate</label>
          <input
            type="text"
            value={estate}
            readOnly
            className="mt-1 w-full rounded-lg border bg-gray-100 border-gray-300 px-4 py-2 text-gray-700 shadow-sm"
          />
        </div>

        <button
          type="button"
          onClick={handleUpdate}
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:green-100"
        >
          Update
        </button>

        {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
      </div>
    </div>
  );
}

export default EditCountry;
