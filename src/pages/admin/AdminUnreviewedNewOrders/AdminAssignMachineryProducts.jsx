import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { Pencil } from "lucide-react";

import ProductList from "../../../pages/customer/customerPortal/ProductList";
import Pagination from "../../customer/customerPortal/hardwarePortal/Pagination";

const JobForm = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("Competitive");
  const methods = ["Competitive", "Restricted"];
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [productsPerPage, setproductsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cartItems.length / productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleRowsPerPageChange = (e) => {
    setproductsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 on change
    // navigate(`/products?page=1`);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Get current page's items
  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const currentPageItems = cartItems.slice(startIdx, endIdx);

  // Grand total (all cart items)
  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCancel = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmCancel = () => {
    // Logic to cancel the request goes here
    console.log("Request has been cancelled");
    setShowModal(false);
  };

  useEffect(() => {
    if (method === "Restricted") {
      // navigate("/admin-assign-hardware-product");
      navigate("/admin-assign-machinery-product-restricted-unreviwed");
    } else if (method === "Competitive") {
      navigate("/admin-assign-machinery-product-unreviwed");
    }
  }, [method, navigate]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg relative border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <span className="text-gray-700 font-semibold mr-2">Method:</span>
          <select
            className="border p-2 rounded-md shadow-sm"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            {methods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <br className="my-6 border-gray-200" />
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <h1 className="text-2xl font-bold text-gray-800">REQ 254</h1>
        <span className="text-xs font-semibold bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-full shadow-sm">
          Restricted
        </span>
        <span className="text-xs font-semibold bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-full shadow-sm">
          Unreviewed
        </span>

        <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
          Created: 1/5/2025
        </h2>
      </div>

      {/* Fundi Details */}
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Customer Details
        </h2>
        <div className="flex justify-between gap-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            {[
              { label: "First Name", value: "Leo " },
              { label: "Last Name", value: "Smith" },
              { label: "Phone", value: "071234567" },
              { label: " Email", value: "oY4dA@example.com" },
              { label: "Location", value: "Nairobi" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200"
              >
                <span className="font-semibold text-gray-800 w-24">
                  {item.label}:
                </span>
                <span className="text-gray-700">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-1/2 pl-8 border-l border-gray-200 space-y-4">
            {/* Download Receipt Section */}
            {/* Download Receipt Section */}
            <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg cursor-not-allowed opacity-60 border border-gray-300">
              {/* Download Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-6V4m-6 4l3 3 3-3"
                />
              </svg>
              <span className="text-gray-600 font-medium">
                Download Receipt
              </span>
            </div>

            {/* Managed by Jagedo Section */}
            <div className="bg-blue-50 p-4 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900">
                Managed by Jagedo
              </h3>
            </div>

            {/* Package Details Section */}
            <div className="bg-blue-50 p-4 rounded-2xl shadow-md mt-4 border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Package details
              </h3>
              <p className="text-lg font-semibold text-gray-800">
                Jagedo Oversees
              </p>

              <ul className="space-y-3 mt-4 text-gray-700">
                <li className="flex items-center">
                  <TiTick className="text-green-500 mr-2 text-xl" />
                  Arrival time
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500 mr-2 text-xl" />
                  Scope budget
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500 mr-2 text-xl" />
                  Workmanship for a day
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h2>

      <div className="grid grid-cols-2 gap-6">
        {[
          { label: "First Name", value: "Leo" },
          { label: "Last Name", value: "Libra" },
          { label: "Phone", value: "0722334455" },
          { label: "Email", value: "icodebetter@gmail.com" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 p-3 rounded-lg"
          >
            <span className="font-semibold text-gray-800 w-32">
              {item.label}:
            </span>
            <span className="text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>

      <br />
      <br />

      {/* Delivery Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 items-center space-y-4 sm:space-y-0">
        <h2 className="text-lg font-semibold mb-2">Delivery Details</h2>
        <div>
          <p className="text-gray-700 sm:pl-20">Kondele, Kisumu</p>
        </div>
        <button
          type="button"
          className="text-[rgb(0,0,122)] font-medium flex items-center gap-1 hover:underline sm:my-1.5 cursor-pointer sm:justify-self-end"
        >
          <Pencil size={16} /> Change
        </button>
      </div>

      <hr className="my-6" />
      {/* Order Details */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-6">
        {/* Product List Section */}
        <div className="w-full sm:w-2/3">
          {/* <h2 className="text-xl font-semibold mb-4">Product List</h2> */}
          {/* Product List Table */}
          <ProductList
            cartItems={currentPageItems}
            setCartItems={setCartItems}
          />
        </div>

        {/* Order Summary Section */}
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div>
            {Array.from({ length: totalPages }, (_, pageIndex) => {
              const start = pageIndex * productsPerPage;
              const end = start + productsPerPage;
              const pageItems = cartItems.slice(start, end);
              const subtotal = pageItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              );

              return (
                <div
                  key={pageIndex}
                  className="flex justify-between text-gray-600 border-b py-1"
                >
                  <p>Page {pageIndex + 1}</p>
                  <p className="font-semibold">
                    KES {subtotal.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between text-gray-700 border-b pb-2 mt-2">
            <p>Mobilization & De-mobilization fee</p>

            <p className="font-semibold">TBD</p>
          </div>

          <div className="flex justify-between text-lg font-bold mt-4">
            <p>Grand Total</p>
            <p>KES {grandTotal.toLocaleString()}</p>
          </div>

          <p className="my-3 text-sm text-gray-600">
            <span className="font-bold text-gray-700">Note: </span>
            The delivery fee will be determined and inserted by the Machinery
            Supplier
          </p>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        handleRowsPerPageChange={handleRowsPerPageChange}
        handlePrev={handlePrev}
        handleNext={handleNext}
        filteredProducts={cartItems}
      />

      <br />

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        {/* View Register Button */}
        <Link to="/register?skill=Mason">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Assign
          </button>
        </Link>

        {/* Cancel Request Button */}
        <button
          type="button"
          onClick={handleCancel}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close Order
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to close the request?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              >
                Close
              </button>
              <button
                onClick={handleConfirmCancel}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Yes, close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobForm;
