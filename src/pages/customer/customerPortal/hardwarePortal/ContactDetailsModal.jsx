import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const ContactDetailsModal = ({showModal, setShowModal, name, email, phoneNum, setName, setEmail, setPhoneNum}) => {

    const handleDetailsChange = () => {
        if (!name || !email || !phoneNum) {
            toast.error("Please fill in all required fields first!");
            return;
        } else {
            toast.success("Saved successfully!");
            setShowModal(!showModal);
        }
    };

    return (
        // Modal/Section to Add Contact Details
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-[672px] text-center shadow-xl">
                    <h2 className="text-xl font-semibold text-start mb-2">Add Contact Details</h2>
                    <label className="block mb-2 text-start text-gray-700 font-semibold">Enter name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4 border border-gray-300'
                        placeholder='Enter name...'
                        required
                    />
                    
                    <div className="mb-6">
                        <label className="block mb-2 text-start text-gray-700 font-semibold">Enter phone number</label>
                        <input 
                            type="text" 
                            name="phoneNumber" 
                            id="phoneNumber" 
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            className='px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4 border border-gray-300'
                            placeholder='Enter name...'
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-start text-gray-700 font-semibold">Enter Email:</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4 border border-gray-300'
                            placeholder='Enter email...'
                            required
                        />
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
                            onClick={() => setShowModal(false)}
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

ContactDetailsModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPhoneNum: PropTypes.func.isRequired,
};

export default ContactDetailsModal;