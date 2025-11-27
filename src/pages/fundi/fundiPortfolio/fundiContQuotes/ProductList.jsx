"use client";

import { lazy, Suspense, useState } from "react";
import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(() =>
  import("../../../../components/Navigation/NavigationBar")
);

const Quote = () => {
  const [products] = useState([
    {
      id: 1,
      image: "/Machinery & Equipments/Trucks and Vehicles/Fork lift.jpg",
      name: "Fork Lift",
      quantity: 1,
      rate: 800000,
    },
    {
      id: 2,
      image: "/Machinery & Equipments/Earthmoving/Bulldozer.jpg",
      name: "Bulldozer ",
      quantity: 1,
      rate: 1000000,
    },
  ]);

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

      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Product List</h2>

           {/* Product List */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-6">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Product List
            </h2>
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
                            alt="product"
                            className="w-12 h-12 rounded-md object-cover"
                          />
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-800">{product.name}</td>
                      <td className="px-4 py-3 text-gray-800">{product.quantity}</td>
                      <td className="px-4 py-3 text-gray-800">
                        KES {product.rate.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        KES {calculateTotal(product.quantity, product.rate).toLocaleString()}
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
