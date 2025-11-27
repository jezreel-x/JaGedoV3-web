// import React from "react";
import Sidebar from "../shop-app/Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import FileImportButton from "../shop-app/FileImportButton";
import Preview from "../shop-app/Preview";
import AdminNavigationBar from "../../components/Navigation/AdminNav";


const categories = ["Hardware", "Custom Products", "Designs", "Hire Machinery & E"];

const AdminProducts = () => {

  const [filter, setFilter] = useState('new');
  const [selectedParent, setSelectedParent] = useState("Hardware");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleRowClick = (product) => {
    setSelectedProduct(product);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setSelectedProduct(null);
  };

  //State for search query
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // const handleCategory = (selectedCategory) => {
  //   setSelectedParent(selectedCategory.toLowerCase());
  //   setCurrentPage(1); // reset to first page when category changes
  // };
  
  
  const filteredProducts = products
    .filter((product) => product.categoryType === selectedParent)
    // .filter(product => category.toLowerCase() === "all" || product.category?.toLowerCase() === category.toLowerCase())
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
    setTimeout(() => {
      toast.success("Product deleted successfully!");
    }, 1000);
    // Optionally, you can also remove the product from the local storage here  
    // setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleEdit = (product) => {
    /*
    const productToEdit = products.find((p) => p.id === product);
    setFormData(productToEdit);
    setIsEditing(true);
    navigate("/create-product", { state: { product: productToEdit } });
    // navigate("/create-product", { state: { product } });
    */
    navigate(`/create-admin-product?edit=true&id=${product}`, { state: { role: product.role, from: "/admin-products" } });
  };

  const handleNavigation = (cat) => {
    navigate("/create-admin-product", { state: { categoryType: cat } });
  }; 

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Primary Sidebar 
      <aside
        className={`${
          expanded ? "w-64" : "w-40"
        } bg-gray-500 text-white p-4 shadow-lg transition-all duration-300 flex flex-col items-center h-full`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        style={{ height: "170vh" }} // Explicitly set the height of the sidebar
      >
        <nav className="space-y-6 w-full">
          {[
            { icon: <FaHome size={30} /> },
            { icon: <FaBriefcase size={30} /> },
            { icon: <FaClipboardList size={30} />, label: "Orders" },
            {
              icon: <FaShoppingCart size={30} />,
              label: "Shopapp",
              action: () => setShowSecondarySidebar(!showSecondarySidebar),
            },
            { icon: <FaTools size={30} /> },
            { icon: <FaProjectDiagram size={30} /> },
            { icon: <FaUserShield size={30} /> },
            { icon: <FaChartPie size={30} /> },
          ].map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={item.action || null}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full text-xl"
            >
              <span className="text-white">{item.icon}</span>
              {expanded && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>
      
      {/* Secondary Sidebar 
      {showSecondarySidebar && (
        <aside 
        className="w-50 bg-gray-500 text-white p-6 shadow-lg min-h-screen transition-all duration-300"
        style={{ height: "170vh" }} 
        >
          <nav className="space-y-4">
            {[
              { icon: <FaHome size={30} />, label: "Home" },
              { icon: <FaBox size={30} />, label: "Products" },
              { icon: <FaUsers size={30} />, label: "Customer View" },
              { icon: <FaPlus size={30} />, label: "New Product" },
              { icon: <FaTags size={30} />, label: "Categories" },
              { icon: <FaCogs size={30} />, label: "Attributes" },
              { icon: <FaChartBar size={30} />, label: "Sales" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-4 px-5 py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-xl"
              >
                {item.icon} <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>
      )}
      */}
      <Sidebar />

      <AdminNavigationBar />


      {/* Main Content */}
      <div className="w-[75%] overflow-x-hidden mx-auto pb-3 pt-4 mt-20">
        {/* Header Navbar */}
        <div className="px-2.5 py-1 mb-4 flex items-center">
          <nav className="w-full flex space-x-4 px-2.5 items-center justify-between">
            {categories.map(
              (text, index) => {
                  // const lowerText = text.toLowerCase();
                  return (
                  <button
                    onClick={() => setSelectedParent(text)}
                    type="button"
                    key={index}
                    className={`px-5 py-3 w-60 cursor-pointer border rounded-lg bg-[rgb(0,0,112)] font-medium transition duration-300
                      ${selectedParent === text ? "bg-[rgb(0,0,112)] text-white" : "bg-blue-200 text-black border-none"}`}
                  >
                    {text}
                  </button>
                  )
                }
            )}
          </nav>
        </div>
        <div className="mx-6 border border-b-slate-100 my-3" />

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
                ${filter === 'approved' ? 'bg-[rgb(0,0,112)] text-white ' : 'bg-blue-200 text-black'}`}
            >
              <span>Approved</span>
            </button>
          </div>


          {/* Right-side buttons */}
          {/* File Import Button */}
          {selectedParent === "Hardware" || selectedParent === "Hire Machinery & E" ? (
            <div className="flex p-0 space-x-4">
              <div className=""> 
                  <FileImportButton />
              </div>
              <button
                onClick={() => handleNavigation(selectedParent)}
                type="button"
                className="bg-[rgb(0,0,112)] cursor-pointer text-white w-44 px-3 py-2 rounded-lg shadow-md hover:bg-blue-300 hover:text-black transition duration-300 text-lg"
              >
                + Add Product
              </button>
            </div>
          ) : (null)}
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
            className="w-full pl-10 bg-white pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product List */}
        <div className="bg-white p-0 mx-5 shadow-md">
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
                <th className="border border-gray-300/50 p-4 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/*
              {[...Array(10)].map((_, index) => {
                const status = active === 'new' ? "Pending Review" : "Approved";
                const statusColor = status === "Pending Review" ? "text-green-500" : "text-yellow-500";

                return (
                  <tr
                    key={index}
                    className="border-b border-gray-300/30 text-center bg-gray-50 hover:bg-gray-200 transition duration-300"
                  >
                    <td className="border border-gray-300/30 p-4 text-center text-lg">{index + 1}</td>
                    <td className="flex justify-center border border-gray-300/30 p-4">
                      <div className="w-14 h-14 bg-gray-300 rounded-full" />
                    </td>
                    <td className="border border-gray-300/30 text-center p-4 text-lg">Product {index + 1}</td>
                    <td className="border border-gray-300/30 text-center p-4 text-lg">${(index + 1) * 50}</td>
                    <td className="border border-gray-300/30 text-center p-4 text-lg">SKU-{index + 1}</td>
                    <td className="border border-gray-300/30 text-center p-4 text-lg">BID-{index + 1}</td>
                    <td className={`border border-gray-300/30 text-center p-4 ${statusColor} font-semibold text-lg`}>
                      {status}
                    </td>
                  </tr>
                );
              })}
              */}
              {currentProducts.map((p, index) => {
                return (
                  <tr
                    onClick={() => handleRowClick(p)}
                    key={p.id}
                    className="border-b-2 border-gray-300 bg-gray-50 hover:bg-gray-200 transition duration-300 hover:cursor-pointer"
                  >
                    <td className="border border-gray-300/30 p-4 text-lg">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                    <td className="flex justify-center border border-gray-300/30 p-4">
                      {/*
                      <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
                      */}
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
                    <td className="border border-gray-300/30 p-4 text-lg justify-center text-center">{p.price.toLocaleString("en-US") || "N/A"}</td>
                    <td className="border border-gray-300/30 p-4 text-lg text-center">{p.sku}</td>
                    <td className="border border-gray-300/30 p-4 text-lg text-center">{p.bid}</td>
                    <td className="border border-gray-300/30 p-4 font-semibold text-lg text-center">
                      {p.status}
                    </td>
                    <td className="p-2 align-middle">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          type="button" 
                          onClick={
                            (e) => {
                              e.stopPropagation(); // to prevent row click
                              handleEdit(p.id); 
                            }
                          } 
                          className="text-white bg-[rgb(0,0,112)] py-2 px-3 rounded-lg hover:cursor-pointer"
                        >
                        Edit
                        </button>
                        <button 
                          type="button" 
                          onClick={
                            (e) => {
                              e.stopPropagation(); // to prevent row click
                              handleDelete(p.id);
                            }
                          } 
                          className="text-white bg-red-800 py-2 px-3 rounded-lg hover:cursor-pointer"
                        >
                        Delete
                        </button>
                      </div>
                  </td>
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
        </div>

        {isPreviewOpen && selectedProduct && (
          <Preview
            productData={selectedProduct}
            images={selectedProduct.images || []}
            handleEdit={handleClosePreview} // Also acts as a close button
            prodDescription={selectedProduct.prodDescription || ""}
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
              className="border rounded bg-white px-2 py-1 text-sm"
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

export default AdminProducts;
