import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddCategoryModal = ({ setAddCategoryModal }) => {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = () => {
        if (!categoryName) {
            toast.error("Please add a category name first!");
            return;
        }
        setAddCategoryModal(false);
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 text-center shadow-xl">
            <h2 className="text-xl font-semibold">Add a Category</h2>
            <input 
                type="text" 
                name="categoryName" 
                id="categoryName" 
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className='px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full my-8 border border-gray-300'
                placeholder='Enter a category name...'
                required
            />
            <div className="flex justify-between gap-4">
                <button
                type='button'
                onClick={handleSubmit}
                className="bg-[rgb(0,0,112)] text-white hover:bg-blue-200 hover:text-gray-700 px-4 py-2 rounded-lg cursor-pointer"
                >
                Save
                </button>
                <button
                type='button'
                onClick={() => setAddCategoryModal(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                Cancel
                </button>
            </div>
            </div>
        </div>
    );
};

AddCategoryModal.propTypes = {
    setAddCategoryModal: PropTypes.func.isRequired,
};

export default AddCategoryModal;