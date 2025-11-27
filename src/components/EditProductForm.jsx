import { useState } from "react";

import { FiUploadCloud } from "react-icons/fi";

const EditProductForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    productDescription: "",
    id: "",
    sku: "",
    material: "",
    size: "",
    color: "",
    region: "",
    uom: "",
    price: "",
    images: [],
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
  
    if (uploadedFiles.length + files.length > 5) {
      alert("You can only upload up to 5 files.");
      return;
    }
  
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // const handleImageUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   setFormData({ ...formData, images: files });
  // };


  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Editing Product Information</h2>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          <option value="hardware">Hardware</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
        <textarea
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">Product Specifications</h3>

      {/* Product Specifications */}
      <div className="grid grid-cols-2 gap-6">
      <div>
          <input
            type="text"
            name="id"
            placeholder="B-ID"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="sku"
            placeholder="SKU"
            value={formData.sku}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="material"
            placeholder="Material"
            value={formData.material}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="size"
            placeholder="Size"
            value={formData.size}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="region"
            placeholder="Region"
            value={formData.region}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="uom"
            placeholder="UOM"
            value={formData.uom}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

 {/* Upload Images Section */}
 <div className="mt-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
  
  <label className="cursor-pointer flex items-center justify-center gap-2 w-full p-3 border rounded-md bg-blue-50 hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 transition duration-200">
    <FiUploadCloud className="text-blue-600 text-2xl" />
    <span className="text-blue-600 font-medium">Click to Upload</span>
    <input
      type="file"
      multiple
      accept="image/*"
      onChange={handleFileChange}
      className="hidden" // Hides the actual file input
    />
  </label>

  {/* Uploaded Files Preview */}
  {uploadedFiles.length > 0 && (
    <div className="border p-4 rounded-md bg-gray-50 shadow-sm mt-4">
      <h2 className="text-lg font-semibold text-gray-700">Uploaded Files</h2>
      <ul className="text-gray-700 mt-2">
        {uploadedFiles.map((file, index) => (
          <li key={index} className="mt-1">{file.name}</li>
        ))}
      </ul>
    </div>
  )}
</div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button type="button" className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200">
          Preview
        </button>
        <button type="button" className="bg-[rgb(0,0,122)] text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200">
          Save Changes
        </button>
        <button type="button" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200">
          Approve
        </button>
      </div>
    </div>
  );
};

export default EditProductForm;
