
import { useState } from "react";

const countryOptions = ["Kenya", "Uganda", "Tanzania"];

const countySubCountyMap = {
  Kenya: {
    Nairobi: ["Muthaiga", "Kasarani", "Ngong"],
    Mombasa: ["Nyali", "Likoni", "Kisauni"],
    Kisumu: ["Manyatta", "Winam", "Kondele"],
  },
  Uganda: {
    Kampala: ["Nakawa", "Makindye", "Rubaga"],
    Entebbe: ["Katabi", "Kawuku", "Kitooro"],
    Jinja: ["Bugembe", "Walukuba", "Mpumudde"],
  },
  Tanzania: {
    Arusha: ["Ilboru", "Themi", "Kimandolu"],
    DarEsSalaam: ["Kinondoni", "Temeke", "Ilala"],
    Dodoma: ["Kikuyu", "Makole", "Uhuru"],
  },
};

const Address = () => {
  const [country, setCountry] = useState("Kenya");
  const [county, setCounty] = useState("Nairobi");
  const [subCounty, setSubCounty] = useState("Muthaiga");
  const [estate, setEstate] = useState("Ushindi drive");

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);

    // Set first county and subcounty as defaults
    const firstCounty = Object.keys(countySubCountyMap[newCountry])[0];
    const firstSubCounty = countySubCountyMap[newCountry][firstCounty][0];

    setCounty(firstCounty);
    setSubCounty(firstSubCounty);
  };

  const handleCountyChange = (e) => {
    const newCounty = e.target.value;
    setCounty(newCounty);
    setSubCounty(countySubCountyMap[country][newCounty][0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedAddress = {
      country,
      county,
      subCounty,
      estate,
    };

    console.log("Updated Address:", updatedAddress);
    alert("Address updated successfully!");
  };

  return (
    <div className="flex">
      <div className="ml-[20rem] w-full max-w-3xl p-6">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6 border-b pb-3">Update Address</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Country */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Country</label>
              <select
                value={country}
                onChange={handleCountryChange}
                className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none"
              >
                {countryOptions.map((ctry) => (
                  <option key={ctry}>{ctry}</option>
                ))}
              </select>
            </div>

            {/* County */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">County</label>
              <select
                value={county}
                onChange={handleCountyChange}
                className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none"
              >
                {Object.keys(countySubCountyMap[country]).map((cty) => (
                  <option key={cty}>{cty}</option>
                ))}
              </select>
            </div>

            {/* Sub County */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Sub County</label>
              <select
                value={subCounty}
                onChange={(e) => setSubCounty(e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none"
              >
                {countySubCountyMap[country][county].map((sub) => (
                  <option key={sub}>{sub}</option>
                ))}
              </select>
            </div>

            {/* Estate */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Estate</label>
              <input
                type="text"
                value={estate}
                onChange={(e) => setEstate(e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full md:w-1/2 bg-[rgb(0,0,122)] text-white py-3 px-4 rounded-lg hover:bg-[rgb(0,0,150)] transition-colors duration-300 font-medium mt-8"
              >
                Update Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
