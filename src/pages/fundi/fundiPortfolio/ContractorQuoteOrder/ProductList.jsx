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
      rate: 100000,
    },
    {
      id: 2,
      image: "/Machinery & Equipments/Earthmoving/Bulldozer.jpg",
      name: "Bulldozer ",
      quantity: 1,
      rate: 80000,
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

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border">
              <thead className="bg-gray-100 text-gray-600 uppercase">
                <tr>
                  <th className="p-4 border">Image</th>
                  <th className="p-4 border">Product Name</th>
                  <th className="p-4 border">Quantity</th>
                  <th className="p-4 border">Rate (KES)</th>
                  <th className="p-4 border">Total (KES)</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="bg-white border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4 border">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-4 border font-medium">{product.name}</td>
                    <td className="p-4 border">{product.quantity}</td>
                    <td className="p-4 border">
                      {product.rate.toLocaleString()}
                    </td>
                    <td className="p-4 border font-semibold text-gray-900">
                      {calculateTotal(product.quantity, product.rate).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
