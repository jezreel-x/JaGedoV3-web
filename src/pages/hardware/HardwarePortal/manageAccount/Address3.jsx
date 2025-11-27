import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import ProfileNavBar from "./ProfileNavBar";

// Sample data for country -> counties -> subcounties
const locationData = {
  Kenya: {
    Nairobi: ["Westlands", "Muthaiga", "Kasarani"],
    Mombasa: ["Nyali", "Changamwe"],
  },
  Uganda: {
    Kampala: ["Central", "Rubaga", "Makindye"],
    Entebbe: ["Kitoro", "Katabi"],
  },
  Tanzania: {
    Arusha: ["Arusha City", "Meru"],
    DarEsSalaam: ["Ilala", "Kinondoni"],
  },
  SouthAfrica: {
    Gauteng: ["Johannesburg", "Pretoria"],
    WesternCape: ["Cape Town", "Stellenbosch"],
  },
};

const Address = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState({
    location: "Kenya",
    county: "Nairobi",
    subCounty: "Muthaiga",
    estate: "Ushindi drive",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear dependent fields when parent changes
    if (name === "location") {
      setAddress((prev) => ({
        ...prev,
        location: value,
        county: "",
        subCounty: "",
      }));
    } else if (name === "county") {
      setAddress((prev) => ({
        ...prev,
        county: value,
        subCounty: "",
      }));
    } else {
      setAddress((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCancel = () => {
    setAddress({
      location: "Kenya",
      county: "Nairobi",
      subCounty: "Muthaiga",
      estate: "Ushindi drive",
    });
    setIsEditing(false);
  };

  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="ml-[20rem] w-full max-w-3xl p-6">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6 border-b pb-3">
            <h1 className="text-2xl font-bold">My Address</h1>
            {!isEditing && (
              <FiEdit
                className="text-[rgb(0,0,122)] cursor-pointer hover:opacity-75"
                size={20}
                onClick={() => setIsEditing(true)}
              />
            )}
          </div>

          <form className="space-y-4">
            {/* Location Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Location</label>
              {isEditing ? (
                <select
                  name="location"
                  value={address.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b outline-none"
                >
                  {Object.keys(locationData).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="w-full px-4 py-2 border-b">{address.location}</p>
              )}
            </div>

            {/* County Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">County</label>
              {isEditing ? (
                <select
                  name="county"
                  value={address.county}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b outline-none"
                >
                  <option value="">Select County</option>
                  {address.location &&
                    Object.keys(locationData[address.location] || {}).map(
                      (county) => (
                        <option key={county} value={county}>
                          {county}
                        </option>
                      )
                    )}
                </select>
              ) : (
                <p className="w-full px-4 py-2 border-b">{address.county}</p>
              )}
            </div>

            {/* Sub County Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Sub County</label>
              {isEditing ? (
                <select
                  name="subCounty"
                  value={address.subCounty}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b outline-none"
                >
                  <option value="">Select SubCounty</option>
                  {address.location &&
                    address.county &&
                    (
                      locationData[address.location]?.[address.county] || []
                    ).map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                </select>
              ) : (
                <p className="w-full px-4 py-2 border-b">{address.subCounty}</p>
              )}
            </div>

            {/* Estate (Text input) */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Estate</label>
              {isEditing ? (
                <input
                  name="estate"
                  value={address.estate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b outline-none"
                />
              ) : (
                <p className="w-full px-4 py-2 border-b">{address.estate}</p>
              )}
            </div>

            {/* Buttons */}
            {isEditing && (
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-[rgb(0,0,122)] text-white px-4 py-2 rounded hover:opacity-90"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-red-500 px-4 py-2 rounded hover:underline"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
