import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { toast } from 'react-hot-toast';
import Select from "react-select";
import { useLocation, useNavigate } from 'react-router-dom';
// import Select from "react-select";


const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.isDisabled ? '#e5e7eb' : 'white', // Tailwind: bg-gray-200,
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      padding: '4px',
      cursor: state.selectProps.isDisabled ? 'not-allowed' : 'default',
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

const predefinedOptions = {
"UOM" : [
    { value: "Kg", label: "Kg" },
    { value: "g", label: "g" },
    { value: "L", label: "L" },
    { value: "ml", label: "ml" },
    { value: "cm", label: "cm" },
    { value: "pcs", label: "pcs" },
], 
"Size" : [
    { value: "acres", label: "acres" },
    { value: "m^2", label: "m^2" },
    { value: "km^2", label: "km^2" },
],
"Color" : [
    { value: "red", label: "red" },
    { value: "black", label: "black" },
    { value: "yellow", label: "yellow" },
    { value: "gray", label: "gray" },
    { value: "green", label: "green" },
    { value: "blue", label: "blue" },
],
};


export default function CreateAttributes() {

    const location = useLocation();

    const categoryType = location.state?.categoryType || '';

    const [formData, setFormData] = useState({
        name: '', // handles attribute type
        type: '',
        attributeValues: [],
        categoryType: categoryType,
        // isRequired: false,
        isFilterable: false,
        showToCustomers: false,
    });

    const [options, setOptions] = useState(predefinedOptions[formData.name] || []);
    // const [selectedOptions, setSelectedOptions] = useState([]);
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customUOM, setCustomUOM] = useState("");

    useEffect(() => {
        setOptions(predefinedOptions[formData.name] || []);
    }, [formData.name]);

    const handleAddCustom = () => {
        setShowCustomInput((prev) => !prev);
    };

    const handleCustomSubmit = (e) => {
        e.preventDefault();
        const trimmed = customUOM.trim();

        if (trimmed && !options.some((opt) => opt.value === trimmed)) {
            const newOption = { value: trimmed, label: trimmed };
            setOptions((prev) => [...prev, newOption]);

            const updatedSelected = [...formData.attributeValues, newOption];

            setFormData((prev) => ({
                ...prev,
                attributeValues: updatedSelected,
            }));
        }

        setCustomUOM("");
        setShowCustomInput((prev) => !prev);
    };

  // const [attributeGroup, setAttributeGroup] = useState('');
    const [categoryValues, setCategoryValues] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.type) {
            toast.error("Please fill in all required fields!");
            return;
        }
        
        // Save form data to localStorage
        const existingData = JSON.parse(localStorage.getItem('attributes')) || [];
        const updatedData = [...existingData, formData];

        localStorage.setItem('attributes', JSON.stringify(updatedData));

        toast.success("Attribute submitted successfully!");
        setTimeout (() => {
            navigate("/create-attributes/preview");
        }, 2000);
    };

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/create-attributes/preview");
    }


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('categories')) || [];
        setCategoryValues(stored);
    }, []);

    const categoryOptions = categoryValues.map((categoryValue) => ({
        value: categoryValue.name,
        label: categoryValue.name,
    }))

    const getNormalizedKey = (input) => {
        if (!input) return null;
        const lowerInput = input.toLowerCase();
        return Object.keys(predefinedOptions).find(
            key => key.toLowerCase() === lowerInput
        );
    };


    const handleAttrNameOptions = () => {
        const normalizedKey = getNormalizedKey(formData.name);
        return predefinedOptions[normalizedKey] || [];
    };



  return (
    <div className="bg-gray-200 min-h-screen flex">
        <Sidebar />
        {/* Main Content Area */}
        <div className="flex-1 max-w-5xl overflow-y-auto mx-auto p-6">
            <form
                onSubmit={handleSubmit}
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
                    <h2 className="text-2xl font-semibold">Create a new attribute</h2>
                </div>
                <h3 className="text-lg font-medium mb-4">General</h3>
                <div className="mb-6">
                    <label className="block text-sm font-medium">Name</label>
                    <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
                    required
                    />
                </div>


                {/* Type options */}
                <fieldset className="mb-2">
                    <legend className="text-sm font-medium mb-2">Type</legend>
                    {['Text', 'Select', 'Multiselect', 'Textarea'].map((type) => (
                    <label key={type} className="block mb-1">
                        <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={formData.type === type}
                        onChange={handleChange}
                        className="mr-2"
                        />
                        {type}
                    </label>
                    ))}
                </fieldset>

                {/* <div className="mt-6">
                    <label className="block text-sm font-medium cursor">{formData.name} Values</label>
                    <input
                        name="attributeValues"
                        type="text"
                        value={formData.attributeValues}
                        onChange={handleChange}
                        disabled={formData.type === 'Text' || formData.type === 'Textarea'}
                        className={`w-full mt-1 border rounded px-3 py-2
                            ${formData.type === 'Text' || formData.type === 'Textarea'
                                ? 'bg-gray-200 cursor-not-allowed' : ''
                            }`}
                        required
                    />
                </div> */}

                <div className="mt-6">
                    <label className="block text-sm font-medium cursor">{formData.name} Values</label>
                    <div className='flex gap-2 max-w-md justify-between'>
                        {/* Multi-select dropdown */}
                        <Select
                            options={handleAttrNameOptions()}
                            isDisabled={formData.type === 'Text' || formData.type === 'Textarea'}
                            value={formData.attributeValues}
                            onChange={(selected) =>
                                setFormData((prev) => ({
                                ...prev,
                                attributeValues: selected || [], // react-select gives null when cleared
                                }))
                            }
                            isMulti
                            placeholder='Select'
                            className="flex-1 mt-1 react-select-container"
                            classNamePrefix="react-select"
                            styles={customStyles}
                        />

                        {/* Add button */}
                        {!showCustomInput && (
                            <button
                                disabled={formData.type === 'Text' || formData.type === 'Textarea'}
                                onClick={handleAddCustom}
                                className={`px-4 py-2 rounded-lg
                                    ${formData.type === 'Text' || formData.type === 'Textarea' ? "bg-gray-200 cursor-not-allowed" : "bg-[rgb(0,0,112)] cursor-pointer hover:text-gray-900 text-white hover:bg-blue-300"}`}
                            >
                                Add
                            </button>
                        )}
                    </div>

                    {/* Custom input field */}
                    {showCustomInput && (
                        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
                            <div className="bg-white rounded-lg p-6 w-96 text-center shadow-xl">
                                <form className="flex flex-col gap-2">
                                    <h2 className="text-xl font-semibold text-start mb-2">Add a custom {formData.name}</h2>
                                    <input
                                        type="text"
                                        placeholder="Enter custom UOM"
                                        value={customUOM}
                                        onChange={(e) => setCustomUOM(e.target.value)}
                                        className="flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 rounded"
                                        autoFocus
                                    />
                                    {/* <button
                                        type="button"
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                        onClick={handleCustomSubmit}
                                    >
                                        Save
                                    </button> */}
                                    <div className="flex justify-between gap-4 mt-3">
                                        <button
                                            type='button'
                                            onClick={handleCustomSubmit}
                                            className="bg-[rgb(0,0,112)] text-white hover:bg-blue-200 hover:text-gray-700 px-4 py-2 rounded-lg cursor-pointer"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type='button'
                                            onClick={() => setShowCustomInput(false)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>

                <div className='mt-6'>
                    <label className="block mb-1 font-medium">Attribute Group</label>
                    <Select
                        options={categoryOptions}
                        isMulti
                        value={selectedCategories}
                        onChange={setSelectedCategories}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        styles={customStyles}
                    />
                </div>
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
                    // onClick={handleSubmit} 
                    type="submit" 
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
