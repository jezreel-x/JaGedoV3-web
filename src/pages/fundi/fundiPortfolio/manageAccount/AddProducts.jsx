import { Link } from 'react-router-dom'
import ProfileNavBar from "./ProfileNavBar";

const AddProducts = () => {
  return (
    
    <div className="max-w-7xl mx-auto p-6">
       <ProfileNavBar />
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">Add New Product</h1>
        <p className="text-gray-600 mt-2">Fill in the product details to add a new item to your inventory</p>
      </div>

      <form className="bg-white rounded-xl border border-gray-100 p-8">
        {/* Basic Info Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[rgb(0,0,122)]">Select Category</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all">
                  <option value="">Select a category</option>
                  <option value="steel_door">Steel Door</option>
                  <option value="steel_window">Steel Window</option>
                  <option value="cement">Cement</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[rgb(0,0,122)]">Product Name</label>
                <input 
                  type="text" 
                  placeholder="Enter product name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[rgb(0,0,122)]">Description</label>
              <textarea 
                placeholder="Enter product description"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all h-32"
              />
            </div>
          </div>
        </div>

        {/* Product Specialization */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[rgb(0,0,122)] mb-6">Product Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Material', 'Size', 'Color', 'Price(Ksh)'].map((label) => (
              <div key={label} className="space-y-2">
                <label className="block text-sm font-medium text-[rgb(0,0,122)]">{label}</label>
                <input 
                  type="text" 
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(0,0,122)] focus:border-[rgb(0,0,122)] outline-none transition-all" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Images Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[rgb(0,0,122)] mb-6">Product Images</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Front View', 'Back View', 'Left Elevation', 'Right Elevation'].map((view) => (
              <div key={view} className="space-y-2">
                <label className="block text-sm font-medium text-[rgb(0,0,122)]">{view}</label>
                <div className="border-2 border-dashed border-[rgb(0,0,122)] rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-all">
                  <input type="file" className="hidden" accept="image/*" />
                  <svg className="w-8 h-8 mx-auto text-[rgb(0,0,122)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                  </svg>
                  <span className="text-sm text-gray-600">Upload Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button 
            type="button"
            className="px-6 py-2 border border-[rgb(0,0,122)] text-[rgb(0,0,122)] rounded-lg hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <Link to="/findi-portal/findi-portal/products/add-product/products-table">
          <button 
            type="submit"
            className="px-6 py-2 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-[rgb(0,0,150)] transition-all"
          >
            Save Product
          </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AddProducts
