
import PropTypes from 'prop-types';

const ShowDeleteModalAtt = ({ setShowDeleteModal, confirmDelete }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 text-center shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Delete Attribute?</h2>
            <p className="mb-6 text-gray-700">Are you sure you want to delete this attribute?</p>
            <div className="flex justify-center gap-4">
                <button
                type='button'
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer"
                >
                Cancel
                </button>
                <button
                type='button'
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer"
                >
                Confirm
                </button>
            </div>
            </div>
        </div>
    );
};

ShowDeleteModalAtt.propTypes = {
    setShowDeleteModal: PropTypes.func.isRequired,
    confirmDelete: PropTypes.func.isRequired,
};

export default ShowDeleteModalAtt;