import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import ShopAppNavbar from "../../../../../../data/ShopAppNavbar";
import { SideNavigation } from "../../../../../../components/Navigation/SideNavigation";

import AllProducts from "../../../../../../data/AllHardware";
import Pagination from "../../Pagination";
import { hardwareNavLinks } from "../../../../../../components/Navigation/HardwareNavLinks";
import SidebarToggleButton from "../../SidebarToggleButton";


const AllHardwareProducts = () => {
  const navigate = useNavigate();
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [selectedPaths, setSelectedPaths] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // For toggling the sidebar
  // const [showModal, setShowModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState({ value: "Nairobi", label: "Nairobi" });
  // const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const handleRowsPerPageChange = (e) => {
    setProductsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 on change
    // navigate(`/products?page=1`);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const [filteredProducts, setFilteredProducts] = React.useState(AllProducts);

    // 🧠 Central filter logic using navLinks
    const applyFilter = (products, paths) => {
      if (paths.length === 0) return products;

      return products.filter((product) => {
        const match = hardwareNavLinks.find((link) => link.label === product.category);
        return match && paths.includes(match.path);
      });
    };

    useEffect(() => {
      const filtered = applyFilter(filteredProducts, selectedPaths);
      setFilteredProducts(filtered);
      setCurrentPage(1);
    }, [selectedPaths, filteredProducts]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  
    const handleClick = (product) => {
      localStorage.setItem(`products`, JSON.stringify(product));
      navigate("/customer/hardware/cart-preview");
    };

    const toggleModalVisibility = (selectedOption) => {
      setSelectedRegion(selectedOption);
      // setShowModal((prev) => !prev);
    };

    const renderRegionNote = (region) => {
      switch (region) {
        case "Nairobi":
          return "The following are areas associated with the Nairobi Metropolitan area: Nairobi, Kiambu, Machakos, Kajiado.";

        case "Western":
          return "Western region includes Kakamega, Bungoma, Vihiga, and Busia counties.";

        case "Central":
          return "Central Kenya consists of counties like Nyeri, Kirinyaga, Murang'a, and Kiambu.";

        case "Eastern":
          return "Eastern region covers areas such as Meru, Kitui, Embu, and Machakos.";

        case "Coast":
          return "Coastal region includes Mombasa, Kilifi, Kwale, Lamu, Taita Taveta, and Tana River.";

        default:
          return "No specific information available for the selected region.";
      }
    };


  return (
      <React.Fragment>
      <section className="container relative mx-auto flex" style={{ scrollbarGutter: 'stable' }} >
        {/* Sidebar */}
        
        <SideNavigation 
          onFilterChange={setSelectedPaths} 
          isOpen={isOpen} 
          onClose={() => setIsOpen((prev) => !prev)} 
          toggleModalVisibility={toggleModalVisibility}
          renderRegionNote={renderRegionNote}
          selectedRegion={selectedRegion}
        />
        
        {/* Main Content */}
        <div className="flex-1 container flex-col mt-3 sm:mt-0 px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleClick(product);
                  }
                }}
                onClick={() => handleClick(product)}
                key={product.id}
                className="bg-white border border-gray-400 shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-32 object-cover rounded-lg"
                />

                {/* Product Info */}
                <h1 className="font-semibold text-lg text-gray-700 mt-4 w-full break-words">
                  {product.subCategoryName}
                </h1>

                {/* Product Info */}
                <h1 className="font-semibold text-lg text-gray-700 mt-2 w-full break-words">
                  {product.name}
                </h1>

                {/* Price & Rating */}
                <div className="flex justify-center items-center w-full mt-2">
                  <p className="text-xl font-semibold text-gray-900">Ksh{product.price}</p>
                    {/* <span className="text-yellow-400">⭐</span> */}
                </div>
              </div>
            ))}
          </div>
          <Pagination
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              handleRowsPerPageChange={handleRowsPerPageChange}
              handlePrev={handlePrev}
              handleNext={handleNext}
              filteredProducts={filteredProducts}
          />
          {/* Modal/Section to Add Category 
            {showModal && selectedRegion && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-96 text-center shadow-xl">
                    <h2 className="text-xl font-semibold text-center mb-2">Important Note!</h2>
                    <p>{renderRegionNote(selectedRegion.value)}</p>
                    <div className="flex justify-center gap-4">
                        <button
                        type='button'
                        onClick={() => setShowModal(false)}
                        className="bg-[rgb(0,0,112)] hover:bg-blue-700 text-white px-4 py-2 rounded-lg my-3 cursor-pointer"
                        >
                        OK
                        </button>
                    </div>
                </div>
            </div>
            )}
            */}
        </div>
        <SidebarToggleButton onClick={() => setIsOpen((prev) => !prev)} />
      </section>
      </React.Fragment>
  );
};

export default AllHardwareProducts;
