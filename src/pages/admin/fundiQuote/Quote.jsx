"use client";

import { lazy, Suspense, useState } from "react";
import ActiveFundiNav from "./ActiveFundiNav";


const NavigationBar = lazy(() =>
  import("../../../components/Navigation/NavigationBar")
);


const Quote = () => {
  const [products] = useState([
    {
      id: 1,
      image: "/images/tile1.jpg",
      name: "Wall Tiles",
      quantity: 5,
      rate: 800,
    },
  ]);

  const [contact] = useState({
    name: "Jane Doe",
    phone: "+254712345678",
    email: "jane@example.com",
  });

  const calculateTotal = (quantity, rate) => quantity * rate;

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>

      <br />
      <br />
      <br />
      <br />

      <ActiveFundiNav />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
          <h1 className="text-2xl font-semibold text-gray-600 mt-6 mb-4">Order Specifications</h1>

          {/* Contact Details Card */}
          <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-700 mb-2">Contact Details</h2>
            <div className="space-y-2 text-gray-800">
              <p><strong>Full Name:</strong> {contact.name}</p>
              <p><strong>Phone Number:</strong> {contact.phone}</p>
              <p><strong>Email Address:</strong> {contact.email}</p>
            </div>
          </div>

          {/* Delivery Address Card */}
          <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-700 mb-2">Delivery Address</h2>
            <p className="text-gray-800">Kondele</p>
          </div>

          {/* Product List Card */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-700">Product List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
                  <tr>
                    <th className="px-4 py-3 text-left">Item No</th>
                    <th className="px-4 py-3 text-left">Image</th>
                    <th className="px-4 py-3 text-left">Product Name</th>
                    <th className="px-4 py-3 text-left">Quantity</th>
                    <th className="px-4 py-3 text-left">Rate (KES)</th>
                    <th className="px-4 py-3 text-left">Total (KES)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">
                        {product.image && (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-800">{product.name}</td>
                      <td className="px-4 py-3 text-gray-800">{product.quantity}</td>
                      <td className="px-4 py-3 text-gray-800">{product.rate}</td>
                      <td className="px-4 py-3 text-gray-800">
                        {calculateTotal(product.quantity, product.rate)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
