import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import Select from "react-select";
import Sidebar from '../Sidebar';

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

/*
const regionCounties = {
    Nairobi: ["Nairobi"],
    Central: ["Kiambu", "Murang'a", "Nyeri", "Kirinyaga", "Nyandarua"],
    Eastern: [
      "Machakos",
      "Kitui",
      "Makueni",
      "Embu",
      "Tharaka Nithi",
      "Isiolo",
      "Meru",
    ],
    "North Eastern": ["Mandera", "Wajir", "Garissa"],
    Nyanza: ["Kisumu", "Siaya", "Homa Bay", "Migori", "Kisii", "Nyamira"],
    Western: ["Kakamega", "Vihiga", "Bungoma", "Busia"],
    "Rift Valley": [
      "Uasin Gishu",
      "Elgeyo Marakwet",
      "Nakuru",
      "Baringo",
      "Kericho",
      "Nandi",
      "Bomet",
      "Samburu",
      "Laikipia",
      "Kajiado",
      "Narok",
      "Trans Nzoia",
      "West Pokot",
      "Turkana",
    ],
    Coast: ["Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita Taveta"],
};
*/

const regionCounties = [
    "Nairobi",
    "Kiambu", 
    "Murang'a", 
    "Nyeri", 
    "Kirinyaga", 
    "Nyandarua",
    "Machakos", "Kitui", "Makueni", "Embu", "Tharaka Nithi", "Isiolo", "Meru",
    "Mandera", 
    "Wajir", 
    "Garissa", "Kisumu", "Siaya", "Homa Bay", "Migori", "Kisii", "Nyamira",
    "Kakamega", "Vihiga", "Bungoma", "Busia",
    "Uasin Gishu", "Elgeyo Marakwet", "Nakuru", "Baringo", "Kericho", "Nandi", "Bomet", "Samburu", "Laikipia", "Kajiado", "Narok", "Trans Nzoia", "West Pokot", "Turkana",
    "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita Taveta"
];

const allOption = { value: "*", label: "All" };

const initialCountyOptions = [allOption, ...regionCounties.map((county) => ({
    value: county,
    label: county,
}))];

export default function CreateRegions() {

    const location = useLocation();
    const categoryType = location.state?.categoryType || '';
    const [selectedCounties, setSelectedCounties] = useState([]);
    const [availableCountyOptions, setAvailableCountyOptions] = useState(initialCountyOptions);

    const [formData, setFormData] = useState({
        country: 'Kenya',
        // attributeGroup: '',
        regionName: '',
        // isRequired: false,
        isFilterable: false,
        showToCustomers: false,
    });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

   const handleSelectChange = (newSelected) => {
        newSelected = newSelected || [];

        const isAllSelected = newSelected.some((option) => option.value === "*");
        const wasAllSelected = selectedCounties.some((option) => option.value === "*");

        // Case 1: "All" is newly selected
        if (isAllSelected && !wasAllSelected) {
            const allOptionsExceptAll = initialCountyOptions.filter((opt) => opt.value !== "*");
            setSelectedCounties([allOption, ...allOptionsExceptAll]);
            setAvailableCountyOptions(initialCountyOptions);
            return;
        }

        // Case 2: "All" was selected but is now deselected
        if (!isAllSelected && wasAllSelected) {
            setSelectedCounties([]);
            setAvailableCountyOptions(initialCountyOptions);
            return;
        }

        // Normal select/deselect logic
        const added = newSelected.filter(
            (item) => !selectedCounties.some((prev) => prev.value === item.value)
        );

        const removed = selectedCounties.filter(
            (item) => !newSelected.some((curr) => curr.value === item.value)
        );

        setSelectedCounties(newSelected);

        let updatedAvailable = availableCountyOptions.filter(
            (option) => !added.some((a) => a.value === option.value)
        );

        removed.forEach((r) => {
            if (!updatedAvailable.some((opt) => opt.value === r.value)) {
            updatedAvailable.push(r);
            }
        });

        updatedAvailable.sort((a, b) => a.label.localeCompare(b.label));
        setAvailableCountyOptions(updatedAvailable);
    };


  /*
  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedCounties([]); // Reset counties on region change
  };
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.country || !formData.regionName || !selectedCounties) {
        toast.error("Please fill in all required fields!");
        return;
    }
    
    // Retrieving form data from localStorage
    const existingData = JSON.parse(localStorage.getItem('regions')) || [];
    // const updatedData = [...existingData, ...formData, selectedRegion, selectedCounties];

    const newRegionEntry = {
        ...formData,
        // region: selectedRegion,
        counties: selectedCounties.map((c) => c.value),
        categoryType: categoryType
      };
    
    const updatedData = [...existingData, newRegionEntry];

    localStorage.setItem('regions', JSON.stringify(updatedData));

    toast.success("Region submitted successfully!");
    setTimeout (() => {
        navigate("/create-regions/preview");
    }, 2000);
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/create-regions/preview");
  }

    /*
    const handleCountyChange = (selectedOptions) => {
        const countyNames = selectedOptions.map(option => option.value);
        setSelectedCounties(countyNames);
    };
  

    const countyOptions =
        selectedRegion && regionCounties[selectedRegion]
        ? regionCounties[selectedRegion].map((county) => ({
            value: county,
            label: county,
            }))
        : [];
    */


  return (
    <div className="bg-gray-100 min-h-screen flex">
        <Sidebar />
        {/* Main Content Area */}
        <div className="flex-1 max-w-5xl overflow-y-auto min-h-screen mx-auto p-6">
            <form
                // onSubmit={handleSubmit}
                className="grid border grid-cols-1 md:grid-cols-2 gap-16 bg-white p-6 rounded-lg shadow"
            >
                {/* General Section */}
            <div>
                {/* <h2 className="text-2xl font-semibold mb-6">Create a new attribute</h2> */}
                <div id="add__product" className="flex justify-start space-x-2 mb-6">
                    <button 
                        className="rounded-lg px-4 py-2 bg-gray-100 hover:bg-gray-300 cursor-pointer" 
                        onClick={handleNavigation}
                        type="button"
                    >
                        ←
                    </button>
                    <h2 className="text-2xl font-semibold">Create a new region</h2>
                </div>
                <h3 className="text-lg font-medium mb-4">General</h3>
                <div className="mb-6">
                    <label className="block text-sm font-medium">Country</label>
                    <input
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full mt-1 border border-gray-500 focus:outline-none focus:ring-2
                    focus:ring-blue-500 rounded px-3 py-2 cursor-not-allowed bg-gray-100"
                    required
                    />
                </div>
                {/*
                <div className="mb-6">
                <label className="block mb-2 font-medium text-gray-700">Attribute group</label>
                    <select 
                        name="attributeGroup"
                        id="attributeGroup" 
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.attributeGroup}
                        onChange={handleChange}
                        required
                    >
                        <option value="" selected disabled className="font-medium text-gray-700">Select an attribute group</option>
                        <option value="hardware">Hardware</option>
                        <option value="design">Design</option>
                        <option value="custom products">Custom Products</option>
                        <option value="machinery">Machinery</option>
                    </select>
                </div>
                */}

                {/* Type options */}
                <div className="mb-6">
                    <label className="block text-sm font-medium">Region Name</label>
                    <input
                        type='text'
                        name="regionName"
                        id="regionName" 
                        className="w-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded my-3 px-4 py-2"
                        value={formData.regionName}
                        onChange={handleChange}
                        required
                    />
                        {/* 
                        <option value="" selected disabled className="font-medium text-gray-700">Select a region</option>
                        {Object.keys(regionCounties).map((region) => (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                        */}
                </div>
                {formData.regionName && (
                    <div>
                    <label className="block mb-1 font-medium">Select Counties</label>
                    <Select
                        options={availableCountyOptions}
                        isMulti
                        value={selectedCounties}
                        onChange={handleSelectChange}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        styles={customStyles}
                    />
                    </div>
                )}
                
            </div>

            {/* Settings Section */}
            <div className='border-l-2 border-gray-300 pl-15'>
                <h3 className="text-lg font-medium mt-17 mb-4">Setting</h3>

                {/* <fieldset className="mb-6">
                    <legend className="text-sm font-medium mb-2">Is Required?</legend>
                    <label className="block mb-1">
                    <input
                        type="radio"
                        name="isRequired"
                        value="false"
                        checked={!formData.isRequired}
                        onChange={() => setFormData(prev => ({ ...prev, isRequired: false }))}
                        className="mr-2"
                    />
                    Not required
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="isRequired"
                        value="true"
                        checked={formData.isRequired}
                        onChange={() => setFormData(prev => ({ ...prev, isRequired: true }))}
                        className="mr-2"
                    />
                    Required
                    </label>
                </fieldset> */}

                <fieldset className="mb-6">
                    <legend className="text-sm font-medium mb-2">Is Filterable?</legend>
                    <label className="block mb-1">
                    <input
                        type="radio"
                        name="isFilterable"
                        value="false"
                        checked={!formData.isFilterable}
                        onChange={() => setFormData(prev => ({ ...prev, isFilterable: false }))}
                        className="mr-2"
                    />
                    No
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="isFilterable"
                        value="true"
                        checked={formData.isFilterable}
                        onChange={() => setFormData(prev => ({ ...prev, isFilterable: true }))}
                        className="mr-2"
                    />
                    Yes
                    </label>
                </fieldset>

                <fieldset>
                    <legend className="text-sm font-medium mb-2">Show to customers?</legend>
                    <label className="block mb-1">
                    <input
                        type="radio"
                        name="showToCustomers"
                        value="false"
                        checked={!formData.showToCustomers}
                        onChange={() => setFormData(prev => ({ ...prev, showToCustomers: false }))}
                        className="mr-2"
                    />
                    No
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="showToCustomers"
                        value="true"
                        checked={formData.showToCustomers}
                        onChange={() => setFormData(prev => ({ ...prev, showToCustomers: true }))}
                        className="mr-2"
                    />
                    Yes
                    </label>
                </fieldset>
            </div>

            {/* Submit Button */}
            <div className="flex md:col-span-2 w-full items-center justify-between my-0">
                <button 
                    type="button" 
                    className="bg-white border-2 border-red-600 cursor-pointer hover:bg-red-600 hover:text-white text-red-600 font-semibold px-7 py-3.5 rounded-lg transition duration-300 hover:scale-105"
                >
                    Discard
                </button>
                <button
                    onClick={handleSubmit} 
                    type="button" 
                    className="bg-[rgb(0,0,112)] cursor-pointer hover:bg-blue-300 hover:text-black text-white font-semibold px-7 py-3.5 rounded-lg transition duration-300 hover:scale-105"
                >
                    {/* {isEditMode ? "Update" : "Save"} */}
                    Save
                </button>
            </div>
            </form>
        </div>
    </div>
  );
}
