import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MachinerySideNav from "../../../../../components/Navigation/MachinerySideNav";
// import NavigationBar from "../../../../../components/Navigation/NavigationBar";
import AllMachineryEquipment from "../../../../../data/AllMachineryEquipment";
// import CategoryNavGrid from "../../../../../data/CategoryNavGrid";
import Pagination from "../Pagination";
import { machineryNavLinks } from "../../../../../components/Navigation/MachineryNavLinks";
import SidebarToggleButton from "../SidebarToggleButton";

const HireEquipments = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [filteredProducts, setFilteredProducts] = React.useState(AllMachineryEquipment);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [selectedPaths, setSelectedPaths] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // For toggling the sidebar
  
  
  const handleRowsPerPageChange = (e) => {
    setProductsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 on change
    // navigate(`/products?page=1`);
  };

  const handlePrev = () => {
    // if (currentPage > 1) setCurrentPage(currentPage - 1);
    setCurrentPage((p) => Math.max(p - 1, 1))
  };

  const handleNext = () => {
    // if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    setCurrentPage((p) => Math.min(p + 1, totalPages))
  };

  // const handleSearch = (term) => {
  //   const lower = term.toLowerCase();

  //   if (lower.trim() === "") {
  //     setFilteredProducts(filteredProducts);
  //     return;
  //   }
    
  //   const result = filteredProducts.filter((p) => {
  //     return (
  //       p.name.toLowerCase().includes(lower) ||
  //       p.description.toLowerCase().includes(lower) ||
  //       p.price.toString().includes(lower)
  //     );
  //   });
  //   setFilteredProducts(result);

  // };

  // const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  
  // 🧠 Central filter logic using navLinks
    const applyFilter = (products, paths) => {
      if (paths.length === 0) return products;

      return products.filter((product) => {
        const match = machineryNavLinks.find((link) => link.label === product.category);
        return match && paths.includes(match.path);
      });
    };

    useEffect(() => {
      const filtered = applyFilter(filteredProducts, selectedPaths);
      setFilteredProducts(filtered);
      setCurrentPage(1);
    }, [selectedPaths, filteredProducts]);
  
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleClick = (product) => {
    // localStorage.setItem(`product-${product.id}`, JSON.stringify(product));
    localStorage.setItem(`products`, JSON.stringify(product));
    navigate("/customer/machinery/cart-preview");
  };

  return (
    <>
      {/* <section className="">
          <NavigationBar onSearch={handleSearch} />
      </section> */}
      <section className="container relative mx-auto flex" style={{ scrollbarGutter: 'stable' }}>
        {/* Sidebar */}
        <MachinerySideNav onFilterChange={setSelectedPaths} isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)} />

        {/* Main Content */}
        <div className="flex-1 container flex-col mt-3 sm:mt-0 px-3">
          {/* <CategoryNavGrid /> */}
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {currentProducts.map((product) => (
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleClick(product);
                }}
                onClick={() => handleClick(product)}
                key={product.id}
                className="bg-white border border-gray-400 shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-32 object-cover rounded-lg"
                />

                {/* Product Info */}
                <h1 className="font-semibold text-lg text-gray-700 mt-4 w-full break-words">
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
          {/* Pagination Controls 
          <div className="flex justify-center items-center gap-4 my-8">
                <button
                  type="button"
                  className={`px-4 py-2 border border-gray-400 cursor-pointer rounded disabled:opacity-50
                    ${currentPage === 1 ? "disabled:opacity-50 bg-gray-500 text-white" : "text-white bg-[rgb(0,0,112)]"}`}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <span className="text-sm font-medium text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  type="button"
                  className={`px-4 py-2 border cursor-pointer hover:bg-blue-300 hover:text-gray-800 border-gray-400 rounded
                    ${currentPage === totalPages ? "disabled:opacity-50 bg-gray-500 text-white" : "text-white bg-[rgb(0,0,112)]"}`}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
            </div>
            */}
              
            <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                handleRowsPerPageChange={handleRowsPerPageChange}
                handlePrev={handlePrev}
                handleNext={handleNext}
                filteredProducts={filteredProducts}
            />
        </div>
        <SidebarToggleButton onClick={() => setIsOpen((prev) => !prev)} />
      </section>
    </>
  );
};

export default HireEquipments;
