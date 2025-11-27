import { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import subCountyMap from "../../county-subCounties/kenya_full_subcounties.json"

const countries = [
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'India', flag: '🇮🇳' },
];

// Kenyan counties

const countyOptions = Object.keys(subCountyMap).map((county) => ({
    value: county,
    label: county,
}));

/*
const countyOptions = [
    { value: "Mombasa", label: "Mombasa" },
    { value: "Kwale", label: "Kwale" },
    { value: "Kilifi", label: "Kilifi" },
    { value: "Tana River", label: "Tana River" },
    { value: "Lamu", label: "Lamu" },
    { value: "Taita-Taveta", label: "Taita-Taveta" },
    { value: "Garissa", label: "Garissa" },
    { value: "Wajir", label: "Wajir" },
    { value: "Mandera", label: "Mandera" },
    { value: "Marsabit", label: "Marsabit" },
    { value: "Isiolo", label: "Isiolo" },
    { value: "Meru", label: "Meru" },
    { value: "Tharaka-Nithi", label: "Tharaka-Nithi" },
    { value: "Embu", label: "Embu" },
    { value: "Kitui", label: "Kitui" },
    { value: "Machakos", label: "Machakos" },
    { value: "Makueni", label: "Makueni" },
    { value: "Nyandarua", label: "Nyandarua" },
    { value: "Nyeri", label: "Nyeri" },
    { value: "Kirinyaga", label: "Kirinyaga" },
    { value: "Murang’a", label: "Murang’a" },
    { value: "Kiambu", label: "Kiambu" },
    { value: "Turkana", label: "Turkana" },
    { value: "West Pokot", label: "West Pokot" },
    { value: "Samburu", label: "Samburu" },
    { value: "Trans Nzoia", label: "Trans Nzoia" },
    { value: "Uasin Gishu", label: "Uasin Gishu" },
    { value: "Elgeyo-Marakwet", label: "Elgeyo-Marakwet" },
    { value: "Nandi", label: "Nandi" },
    { value: "Baringo", label: "Baringo" },
    { value: "Laikipia", label: "Laikipia" },
    { value: "Nakuru", label: "Nakuru" },
    { value: "Narok", label: "Narok" },
    { value: "Kajiado", label: "Kajiado" },
    { value: "Kericho", label: "Kericho" },
    { value: "Bomet", label: "Bomet" },
    { value: "Kakamega", label: "Kakamega" },
    { value: "Vihiga", label: "Vihiga" },
    { value: "Bungoma", label: "Bungoma" },
    { value: "Busia", label: "Busia" },
    { value: "Siaya", label: "Siaya" },
    { value: "Kisumu", label: "Kisumu" },
    { value: "Homa Bay", label: "Homa Bay" },
    { value: "Migori", label: "Migori" },
    { value: "Kisii", label: "Kisii" },
    { value: "Nyamira", label: "Nyamira" },
    { value: "Nairobi", label: "Nairobi" },
];
*/

// Kenyan sub-counties (example for Nairobi)
// const subCountyMap = {};

const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      padding: '4px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgb(229, 231, 235)",
      borderRadius: "8px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(169, 169, 169)" : "transparent",
      color: state.isSelected ? "white" : "black",
    }),
    singleValue: (provided) => ({
      ...provided,
        color: "black",
        fontSize: "16px",
        fontWeight: "500",
        padding: "4px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray",
      fontSize: "16px",
      fontWeight: "500",
    }),
};


const LocationCard = ({ prevStep, nextStep }) => {

    // const [country, setCountry] = useState("Kenya");
    // const [state] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
    const [selectedCounty, setSelectedCounty] = useState(null);
    const [selectedSubCounty, setSelectedSubCounty] = useState(null);

    const handleCountyChange = (selectedOption) => {
        setSelectedCounty(selectedOption);
        setSelectedSubCounty(null); // Reset sub-county when county changes
    };

    const handleSubCountyChange = (selectedOption) => {
        setSelectedSubCounty(selectedOption);
    };

    // const subCountyOptions = selectedCounty ? subCountyMap[selectedCounty.value] || [] : [];

    const handleChange = (e) => {
        const selected = countries.find(c => c.flag === e.target.value);
        setSelectedCountry(selected.name);
    };

    {/*
        (e) => {
        const flagToCountry = {
        "🇰🇪": "Kenya",
        "🇺🇸": "United States",
        "🇬🇧": "United Kingdom",
        "🇮🇳": "India",
        };
        document.getElementById("countryInput").placeholder =
        flagToCountry[e.target.value];
        }
    */}

    return (
        <div className="font-roboto px-0 xs:p-8 bg-white mt-10 rounded-2xl w-full max-w-lg mx-auto">
            {/* Section Title */}
            <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] mt-10 xs:mt-0 mb-6 text-center">
            Location
            </h3>
         
            {/* Country Selection */}
            <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                    <select
                    className="border border-gray-300 p-3 pr-10 rounded-lg w-20 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)] appearance-none"
                    onChange={handleChange}
                    value={countries.find(c => c.name === selectedCountry)?.flag}
                    >
                    {/*
                    <option value="🇰🇪">🇰🇪</option>
                    <option value="🇺🇸">🇺🇸</option>
                    <option value="🇬🇧">🇬🇧</option>
                    <option value="🇮🇳">🇮🇳</option>
                    */}
                    {countries.map((country, index) => (
                        <option key={index} value={country.flag}>
                            {country.flag}
                        </option>
                    ))}
                    </select>
                    <span className="absolute right-3 top-3 text-gray-500">▼</span>
                </div>
                <input
                    type="text"
                    value={selectedCountry}
                    /* onChange={(e) => setCountry(e.target.value)} */
                    readOnly
                    id="countryInput"
                    placeholder="Kenya"
                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
                />
            </div>
         
         
            {/* State / Province / County 
            <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
                placeholder="State/Province/County"
                className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
            />
            */}
            <div className="space-y-4 mb-4">
                {/* County Dropdown */}
                <Select
                    options={countyOptions}
                    value={selectedCounty}
                    onChange={handleCountyChange}
                    placeholder="Select a county"
                    className="react-select-container"
                    classNamePrefix="select"
                    styles={customStyles}
                />

                {/* Sub-county Dropdown (conditionally rendered) */}
                {selectedCounty && (
                    <Select
                    options={subCountyMap[selectedCounty.value]}
                    value={selectedSubCounty}
                    onChange={handleSubCountyChange}
                    placeholder="Select a sub-county"
                    className="react-select-container"
                    classNamePrefix="select"
                    styles={customStyles}
                    />
                )}
            </div>


            {/* Wards / Sub-County 
            <input
            type="text"
            placeholder="County/Sub-County/Wards"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
            />
            */}
        
            {/* Estate / Village */}
            <input
            type="text"
            placeholder="Town/Estate/Village"
            className="border border-gray-300 p-3 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
            />
         
            {/* Continue Button 
            <button type="button"
                onClick={nextStep}
                className="w-full p-3 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-[rgb(0,0,180)] transition">
                Continue
            </button>
            */}
            <div className="flex justify-between w-full max-w-sm mt-6">
            <button 
            type="button"
                onClick={prevStep}
                className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition hover:cursor-pointer"
            >
                <span className="mr-2">←</span> Back
            </button>
            <button
                disabled={!selectedCountry}
                type="button"
                onClick={nextStep}
                className={`flex items-center py-2 px-5 rounded-lg transition hover:cursor-pointer
                    ${!selectedCountry ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
            >
                Next <span className="ml-2">→</span>
            </button>
            </div>
        </div>
    )
};

LocationCard.propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default LocationCard;