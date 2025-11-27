import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SideNavigation } from "../../../../../../components/Navigation/SideNavigation";
import cementProducts from "../../../../../../data/CementData";
import CategoryNavGrid from "../../../../../../data/CategoryNavGrid";
import ShopAppNavbar from "../../../../../../data/ShopAppNavbar";

const Cement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(cementProducts);

  const handleSearch = (term) => {
    const lower = term.toLowerCase();

    if (lower.trim() === "") {
      setFilteredProducts(filteredProducts);
      return;
    }
    
    const result = filteredProducts.filter((p) => {
      return (
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.price.toString().includes(lower)
      );
    });
    setFilteredProducts(result);

  };
  
  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);


   // Extract ?page= from URL
  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", currentPage);
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [currentPage]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleClick = (product) => {
    // localStorage.setItem(`product-${product.id}`, JSON.stringify(product));
    localStorage.setItem(`products`, JSON.stringify(product));
    navigate(`/hardware_shop/hardware-products/cement/cement-detail`);
  };

  return (
    <React.Fragment>
        <section className="">
          <ShopAppNavbar onSearch={handleSearch} />
        </section>
        <section className="flex">
          {/* Sidebar */}
          <SideNavigation />

          {/* Main Content */}
          <div className="flex flex-col w-full ml-[18rem] mt-20 px-4 md:px-8">
            <CategoryNavGrid />

            {/* Cement Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
              {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleClick(product)}
                    className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center 
                      transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                    {/* Image */}
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="w-28 h-32 object-cover rounded-lg"
                    />

                    {/* Product name */}
                    <h1 className="font-semibold text-lg text-gray-900 mt-4 w-full break-words">{product.name}</h1>

                    {/* Product Info */}
                    <h1 className="font-semibold text-lg text-gray-700 mt-4 w-full break-words">
                      {product.description}
                    </h1>

                    {/* Price & Rating */}
                    <div className="flex justify-center items-center w-full mt-2 px-2">
                      <p className="text-xl font-semibold text-gray-900">KSH{product.price}</p>
                    </div>
                  </div>
              ))}
            </div>
            {/* Pagination Controls */}
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
          </div>
        </section>
    </React.Fragment>
  );
};

export default Cement;
