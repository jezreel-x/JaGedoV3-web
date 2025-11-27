import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const DeliveryDetailsModal = 
    (
        {
        showDeliveryDetailsModal, 
        setShowDeliveryDetailsModal, 
        deliveryAddress, 
        setDeliveryAddress
        }
    ) => {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
          if (deliveryAddress.length < 3) return; // start after 3 characters
    
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(deliveryAddress)}&addressdetails=1&limit=5`
          );
          const data = await res.json();
          setSuggestions(data);
        };
    
        const delayDebounce = setTimeout(() => {
          fetchSuggestions();
        }, 400); // debounce delay
    
        return () => clearTimeout(delayDebounce);
    }, [deliveryAddress]);

    const handleDetailsChange = () => {
        if (!deliveryAddress) {
            toast.error("Please fill in all required fields first!");
            return;
        } else {
            toast.success("Saved successfully!");
            setShowDeliveryDetailsModal(!showDeliveryDetailsModal);
        }
    };

    return (
        // Modal/Section to Add Contact Details
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-[672px] text-center shadow-xl">
                    <h2 className="text-xl font-semibold text-start mb-2">Add Delivery Details</h2>
                    <label className="block mb-2 text-start text-gray-700 font-semibold">Search delivery location</label>
                    <div className='my-4'>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            className='px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4 border border-gray-300'
                            placeholder='Enter name...'
                            required
                        />
                        {suggestions.length > 0 && (
                            <ul className="mt-2 border border-gray-300 rounded-lg bg-white shadow overflow-auto">
                            {suggestions.map((place, index) => (
                                <li
                                key={index}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setDeliveryAddress(place.display_name);
                                    setSuggestions([]);
                                    // onSelect(place); // pass selected location back
                                }}
                                >
                                    {place.display_name}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                    
                    <div className="flex justify-between gap-4">
                        <button
                            type='button'
                            onClick={handleDetailsChange}
                            className="bg-[rgb(0,0,112)] text-white hover:bg-blue-200 hover:text-gray-700 px-4 py-2 rounded-lg cursor-pointer"
                        >
                            Save
                        </button>
                        <button
                            type='button'
                            onClick={() => setShowDeliveryDetailsModal(false)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

DeliveryDetailsModal.propTypes = {
    showDeliveryDetailsModal: PropTypes.bool.isRequired,
    setShowDeliveryDetailsModal: PropTypes.func.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    setDeliveryAddress: PropTypes.func.isRequired,
};

export default DeliveryDetailsModal;