import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    bid: "",
    sku: "",
    price: "",
    images: [],
    status: "Drafts",
  });

  useEffect(() => {
    // Prefill form fields from the product stored in localStorage
    if (product) {
      setUpdatedProduct({
        ...product,
        status: product.status || "Drafts", // Ensure status is set
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImage = files[0];
      setUpdatedProduct((prev) => ({
        ...prev,
        images: [{ label: "Image 1", url: URL.createObjectURL(newImage) }],
      }));
    }
  };

  const handleSave = () => {
    // Change status if it's 'Drafts'
    const updatedStatus =
      updatedProduct.status === "Drafts" ? "Pending Review" : updatedProduct.status;

    onSave({
      ...updatedProduct,
      status: updatedStatus, // Update status to 'Pending Review' if it was 'Drafts'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md max-w-lg w-full overflow-y-scroll">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
        <form className="space-y-4">
          {/* Product Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Product Name"
            />
          </div>

          {/* Product BID */}
          <div>
            <label htmlFor="bid" className="block text-sm font-medium text-gray-700">
              Product BID
            </label>
            <input
              type="text"
              id="bid"
              name="bid"
              value={updatedProduct.bid}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Product BID"
            />
          </div>

          {/* Product SKU */}
          <div>
            <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
              Product SKU
            </label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={updatedProduct.sku}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Product SKU"
            />
          </div>

          {/* Product Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Product Price"
            />
          </div>

          {/* Product Image */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {updatedProduct.images.length > 0 && (
              <div className="mt-2">
                <img
                  src={updatedProduct.images[0].url}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* Status (No longer a dropdown, handled via logic) */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={updatedProduct.status}
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </form>

        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
EditProductModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    bid: PropTypes.string,
    sku: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    status: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditProductModal;
