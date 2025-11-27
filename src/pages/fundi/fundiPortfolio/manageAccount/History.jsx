
import { Link } from 'react-router-dom';

import ProfileNavBar from "./ProfileNavBar";

const Products = () => (
  <div className="flex">
    <ProfileNavBar />
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-10xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>

        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-80">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {/* Left Section */}
              <div className="max-w-4xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Start Building Your Product Catalog
                </h2>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Easy product management
                  </div>
                  
                </div>

                <div className="flex gap-4 mt-5">
                  <Link to="/findi-portal/products/add-product">
                    <button type='button' className="bg-[rgb(0,0,122)] text-white px-6 py-2.5 rounded-lg hover:bg-[rgb(0,0,150)] transition-all duration-300 flex items-center gap-2 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Add Product
                    </button>
                  </Link>
                  {/* <button type="button" className="border-2 border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Import
                  </button> */}
                </div>
              </div>

              {/* Right Section - Product Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                  <img
                    src="https://www.tristategate.com/wp-content/uploads/2024/02/wood-driveway-gate-black-stone-apron.jpg"
                    alt="Premium Gate"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold">Premium Gates</h3>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                  <img
                    src="https://i.pinimg.com/736x/4b/c5/96/4bc5961f9c0af43fc2ca1f8fc35fc6b4.jpg"
                    alt="Luxury Door"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold">Luxury Doors</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

export default Products;