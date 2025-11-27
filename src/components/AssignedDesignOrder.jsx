import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Pagination from "../pages/customer/customerPortal/hardwarePortal/Pagination";

const JobForm = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [productsPerPage, setproductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cartItems.length / productsPerPage);

  const updateCart = (updated) => {
  setCartItems(updated);
  localStorage.setItem("cart", JSON.stringify(updated));
}
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);
  const handleRowsPerPageChange = (e) => {
    setproductsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 on change
    // navigate(`/products?page=1`);
  };

  // Remove item from cart
  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  // Grand total (all cart items)
  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

 
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg relative border border-gray-200">
        {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <h1 className="text-2xl font-bold text-gray-800">REQ 254</h1>
        <span className="text-xs font-semibold bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-full shadow-sm">
          Restricted
        </span>
        <span className="text-xs font-semibold bg-[rgb(0,0,122)] text-white px-3 py-1 rounded-full shadow-sm">
          Bid Invited
        </span>

        <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
          Created: 1/5/2025
        </h2>
      </div>
  <br />
      {/* Customer Details */}
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
       

        {/* Card Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Customer Details
        </h2>

        {/* Customer Details Grid */}
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
      </div>
      {/* Fundi Details */}
      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Professional Details
        </h2>
        <div className="flex justify-between gap-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-4">
            {[
              { label: "Profession", value: "Architect" },
              { label: "Level", value: "Senior" },
              { label: "Status", value: "Started" },
              { label: "Location", value: "Kenya, Nairobi, Kasarani" },
              { label: "Start Date", value: "20/11/2024" },
              { label: "End Date", value: "12/12/2025" },
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
            <div className="flex items-center space-x-2 bg-green-50 p-4 rounded-lg cursor-pointer hover:bg-green-100 transition border border-gray-200">
              {/* Download Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
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
              <span className="text-green-700 font-medium">
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

      <div className="p-8 my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

           {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Contact Details
            </h3>
            <div className="space-y-4">
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
          </div>
          {/* Delivery Details */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Delivery Details
            </h3>
            <div className="space-y-4">
              {[
                { label: "Delivery Place", value: "Kondele, Kisumu" },
                
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 p-3 rounded-lg"
                >
                  <span className="font-semibold text-gray-800 w-40">
                    {item.label}:
                  </span>
                  <span className="text-gray-700">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>



      {/* Order Details */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-6 w-full">
        {/* Left Section - Order Details (Cart Items) */}
        <div className="w-full sm:w-2/3 bg-gray-100 p-4 rounded-lg">
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-md shadow flex flex-col sm:flex-row sm:justify-between items-center"
                >
                  <div className="flex self-start flex-col space-y-3">
                    <img
                      src="/Designs/Bungalows/bungalow-1.jpeg"
                      alt={item.name}
                      className="h-16 w-16 object-cover"
                    />
                    <p className="font-semibold text-gray-700 text-lg">
                      {item.name}
                    </p>
                  </div>

                  <div className="flex self-start items-start my-8 sm:my-0 flex-col space-y-3">
                    <p className="font-semibold text-gray-700 text-lg">
                      Price: Ksh {item.price.toLocaleString()}
                    </p>
                    <p className="text-gray-700 text-sm font-semibold">
                      Subtotal: Ksh {(item.price * 1).toLocaleString()}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="mt-2 text-sm text-red-500 font-medium cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
            handlePrev={handlePrev}
            handleNext={handleNext}
            filteredProducts={cartItems}
          />
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full sm:w-1/3 bg-white p-4 rounded-lg shadow-inner self-start">
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
            <p className="font-semibold">N/A</p>
          </div>

          <div className="flex justify-between text-lg font-bold mt-4">
            <p>Grand Total</p>
            <p>KES {grandTotal.toLocaleString()}</p>
          </div>

          <p className="my-3 text-sm text-gray-600">
            <span className="font-bold text-gray-700">Note: </span>
            The delivery fee will be determined and inserted by the Designs
            Supplier
          </p>
        </div>
      </div>

      {/* Admin Section */}
      <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
        {/* Admin Notes Static Display */}
        <div className="col-span-2 pr-6 border-r border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Notes</h2>
          <div className="p-6 border border-gray-200 rounded-md bg-gray-50 text-gray-800 leading-relaxed">
            The assigned fundi has prior experience with similar installations.
            Ensure materials are available at the site before the start date.
          </div>
        </div>

        {/* Files Display (No Upload Fields) */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Attachments</h2>

          <ul className="space-y-3">
            {[
              { name: "installation-guide.pdf", url: "#" },
              { name: "site-photo.jpg", url: "#" },
              { name: "receipt.pdf", url: "#" },
            ].map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-md border border-gray-200"
              >
                <span className="text-gray-700 truncate">{file.name}</span>
                <a
                  href={file.url}
                  download
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
