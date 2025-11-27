// import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileNavBar from "../fundi/fundiPortfolio/manageAccount/ProfileNavBar";
import Preview from "./Preview";
// import ParsedPreviewTable from "./ParsedPreviewTable";
// import { useSearchParams } from "react-router-dom";
/*
const navBarOptions = ["Hardware", "Custom Products", "Designs", "Hire Machinery & Equipments"];


const handleNavigation = (x) => {
  switch (x[index]) {
    case x[0]:
      navigate("/create-product");
      break;
    case x[1]:
      navigate("/fundi");
      break;
    case x[2]:
      navigate("/professional");
      break;
    case x[3]:
      navigate("/contractor");
      break;
    default:
      break;
  }
};


const roleToCategoryMap = {
  Hardware: "Hardware",
  Professional: "Designs",
  Contractor: "Hire Machinery & E",
  Fundi: "Custom Products",
};
*/

const BuilderProducts = () => {

  const [filter, setFilter] = useState('new');
  // const [category] = useState('hardware');
  const [products, setProducts] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRowClick = (product) => {
    setIsPreviewOpen((prevState) => !prevState);
    setSelectedProduct(product);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen((prevState) => !prevState);
    setSelectedProduct(null);
  };

  /*
  const [, setFormData] = useState({
    name: '',
    price: '',
    sku: '',
    bid: '',
    status: 'Pending Review',
  });
  

  const [, setIsEditing] = useState(false);
  */

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // const categories = ["Hardware", "Custom Products", "Designs", "Hire Machinery & E"];

  const navigate = useNavigate();
  const location = useLocation();

  // Read page number from URL
  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get('page'), 10) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 on change
    // navigate(`/products?page=1`);
  };

  // Fetch products from local storage or other sources
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, [location]);
  
  
  const filteredProducts = products
    .filter((product) =>
      filter === "new" 
      ? product.status === "Drafts" || product.status === "Pending Approval" 
      : product.status === "Approved"
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.bid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.status.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      const updatedList = products.filter((product) => product.id !== id);
      setProducts(updatedList);
      localStorage.setItem("products", JSON.stringify(updatedList));
    }
    // setProducts(prev => prev.filter(p => p.id !== id));
  };

  // const handleEdit = (product) => {
  //   navigate(`/create-product?edit=true&id=${product.id}`, { state: { role: product.fromPath, from: "/builder-products" } });
  // };

  //   const handleEdit = (product) => {
  //   let fromPath = "";
  //   switch (product.role) {
  //     case "Hardware":
  //       fromPath = "/hardwarePortal/products";
  //       break;
  //     case "Fundi":
  //       fromPath = "/fundi-portal/products";
  //       break;
  //     case "Professional":
  //       fromPath = "/professional/professional-products";
  //       break;
  //     case "Contractor":
  //       fromPath = "/contractorPortal/products";
  //       break;
  //     default:
  //       fromPath = "/fundi-portal/products";
  //   }

  //   navigate(`/create-product?edit=true&id=${product}`, {
  //     state: {
  //       role: product.role,
  //       from: fromPath,
  //     },
  //   });
  // };

    const handleEdit = (product) => {
      const fromPath = product.fromPath || "/fundi-portal/products"; // fallback
      navigate(`/create-product?edit=true&id=${product.id}`, {
        state: { from: fromPath }
      });
    };


  const handleNavigation = () => {
    navigate("/create-product");
  };
 
  /*
  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory.toLowerCase());
    setCurrentPage(1); // reset to first page when category changes
  };
  */

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block">
        <ProfileNavBar />
      </div>
      {/* Main Content */}
      <div className="w-[80%] ml-[320px] overflow-x-hidden mx-auto pb-3">
        {/* Add Product, New, and Approved Buttons */}
        <div className="my-4 px-5 flex justify-between">
          {/* Left-side buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter("new")}
              type="button"
              className={`cursor-pointer w-40 px-3 py-2 rounded-lg shadow-md transition duration-300 text-lg
                ${filter === 'new' ? 'bg-[rgb(0,0,112)] text-white' : 'bg-blue-200 text-black'}`
              }
            >
              New
            </button>
            <button
              onClick={() => setFilter("approved")}
              type="button"
              className={`cursor-pointer w-40 px-3 py-2 rounded-lg shadow-md transition duration-300 text-lg
                ${filter === 'approved' ? 'bg-[rgb(0,0,112)] text-white ' : 'bg-blue-300 text-black'}`}
            >
              <span>Approved</span>
            </button>
          </div>

          {/* Right-side button */}
          <div className="flex p-0 space-x-4">
            <button
              onClick={handleNavigation}
              type="button"
              className="bg-[rgb(0,0,112)] cursor-pointer text-white w-44 px-3 py-2 rounded-lg shadow-md hover:bg-blue-300 hover:text-black transition duration-300 text-lg"
            >
              + Add Product
            </button>
          </div>
        </div>
        <div className="relative ml-5 mb-4 max-w-[335px]">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* You can replace this with your preferred icon set */}
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search by Name, SKU, BID, Price, Status"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product List */}
        <div className="p-0 mx-5">
          <table className="w-full border-collapse rounded-lg overflow-hidden table-auto">
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th className="border border-gray-300/50 p-4 text-lg">No</th>
                <th className="border border-gray-300/50 p-4 text-lg">Thumbnail</th>
                <th className="border border-gray-300/50 p-4 text-lg">Name</th>
                <th className="border border-gray-300/50 p-4 text-lg">Price (KES)</th>
                <th className="border border-gray-300/50 p-4 text-lg">SKU</th>
                <th className="border border-gray-300/50 p-4 text-lg">BID</th>
                <th className="border border-gray-300/50 p-4 text-lg">Status</th>
                {currentProducts.status === "Pending Approval" || currentProducts.status === "Drafts"
                || filter === "new"
                ? (
                  <th className="border border-gray-300/50 p-4 text-lg">Actions</th>
                ) : ("")}
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((p, index) => {
                return (
                  <tr
                    key={p.id}
                    onClick={() => handleRowClick(p)}
                    className="border-b-2 border-gray-300 bg-gray-50 hover:bg-gray-200 transition duration-300 space-y-1 hover:cursor-pointer"
                  >
                    <td className="border border-gray-300/30 p-4 text-lg">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                    <td className="flex justify-center border border-gray-300/30 p-4">
                      {p.images && p.images.length > 0 ? (
                          <img
                            src={p.images[0].dataUrl}
                            alt={`${p.images[0].label || p.name} thumbnail`}
                            className="w-14 h-14 object-cover rounded-full border"
                          />
                        ) : (
                          <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                      )}
                    </td>
                    <td className="border border-gray-300/30 p-4 text-lg text-center">{p.name}</td>
                    <td className="border border-gray-300/30 p-4 text-lg text-center">{(p.price)?.toLocaleString("en-US") || "N/A"}</td>
                    <td className="border border-gray-300/30 p-4 text-lg text-center">{p.sku}</td>
                    <td className="border border-gray-300/30 p-4 text-lg text-center">{p.bid}</td>
                    <td className="border border-gray-300/30 p-4 font-semibold text-lg text-center">
                      {p.status}
                    </td>
                    {p.status === "Pending Approval" || p.status === "Drafts" ? (
                        <td className="p-2 align-middle">
                        <div className="flex items-center justify-center gap-2">
                          <button type="button" onClick={() => handleEdit(p)} className="text-white bg-[rgb(0,0,112)] py-2 px-3 rounded-lg hover:cursor-pointer">
                          Edit
                          </button>
                          <button type="button" onClick={() => handleDelete(p.id)} className="text-white bg-red-800 py-2 px-3 rounded-lg hover:cursor-pointer">
                          Delete
                          </button>
                        </div>
                      </td>
                    ) : ("")}
                  </tr>
                );
              })}
              {currentProducts.length === 0 && (
                <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                    No products yet.
                </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* <div className="mt-6">
              <ParsedPreviewTable />
          </div> */}
        </div>

        {isPreviewOpen && selectedProduct && (
          <Preview
            productData={selectedProduct}
            images={selectedProduct.images || []}
            handleEdit={handleClosePreview} // Also acts as a close button
            prodDescription={selectedProduct.productDesc || ""}
            saveProduct={() => {}}
            role={selectedProduct.role || "Fundi"}
          />
        )}

        
        {/* Pagination Controls */}
        <div className="flex justify-between mx-5 items-center mt-4">
          {/* Dropdown: Rows Per Page */}
          <div className="flex justify-end items-center gap-3">
            <label htmlFor="rows" className="text-sm font-medium">Rows per page:</label>
            <select
              id="rows"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="border rounded px-2 py-1 text-sm"
            >
              {[5, 10, 20, 30].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              onClick={handlePrev}
              // onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded cursor-pointer ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}
            >
              Prev
            </button>

            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={handleNext}
              // onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded cursor-pointer ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}
            >
              Next
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BuilderProducts;
