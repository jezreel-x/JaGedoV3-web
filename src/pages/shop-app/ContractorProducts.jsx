// import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import FileImportButton from "./FileImportButton";
import ProfileNavBar from '../contractor/ContractorPortal/manageAccount/ProfileNavBar';

const ContractorProducts = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    navigate("/create-product", { state: { from: location.pathname } });
  };

  /*
  const handleClick = (role) => {
    navigate("/create-product", { state: { role } })
  };
  */

  return (
    <div className="min-h-screen flex gap-4 bg-gray-50 p-8">
      {/* Sidebar Navigation */}
      <div className="hidden md:block w-1/4 pr-8">
        <ProfileNavBar />
      </div>
      {/* Main Content Section */}
      <div className="max-w-3xl">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {/* Left Section */}
              <div className="">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Start Building Your Product Catalog
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Create a compelling product collection that showcases your best items.
                  Add detailed descriptions, high-quality images, and competitive pricing
                  to attract more customers.
                </p>

                <div className="flex gap-4 mt-5">
                    <button 
                    type='button' 
                    onClick={handleNavigation}
                    className="bg-[rgb(0,0,122)] cursor-pointer hover:bg-blue-200 hover:text-black font-semibold text-white px-6 py-2.5 rounded-lg transition duration-500 inline-flex items-center gap-2 shadow-md"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Add Product
                    </button>
                    <div className=""> 
                      <FileImportButton />
                    </div>
                </div>
              </div>

              {/* Right Section - Product Showcase 
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
              */}
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="flex gap-4 mt-5">
        {["Fundi", "Professional", "Contractor", "Hardware"].map((role) => (
              <button 
                key={role}
                type='button' 
                onClick={() => handleClick(role)}
                className="bg-[rgb(0,0,122)] cursor-pointer text-white px-6 py-2.5 rounded-lg hover:bg-[rgb(0,0,150)] hover:transition hover:scale-105 hover:ease-in-out hover:duration-500 flex items-center gap-2 shadow-sm"
              >
                {role}
              </button>
        ))}
      </div>
      */}
    </div>
    
  );
}
export default ContractorProducts;