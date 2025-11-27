import { lazy, Suspense } from "react";
import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(
  () => import("../../../../components/Navigation/NavigationBar")
);

const Quote = () => {
  const products = [
    {
      id: 1,
      image: "/images/tile1.jpg",
      name: "Wall Tiles",
      quantity: 5,
      rate: 800,
    },
    {
      id: 2,
      image: "/images/tile2.jpg",
      name: "Floor Tiles",
      quantity: 3,
      rate: 1200,
    },
    {
      id: 3,
      image: "/images/tile3.jpg",
      name: "Bathroom Tiles",
      quantity: 7,
      rate: 650,
    },
    {
      id: 4,
      image: "/images/tile4.jpg",
      name: "Kitchen Tiles",
      quantity: 4,
      rate: 1000,
    },
  ];

  const calculateTotal = (quantity, rate) => quantity * rate;

  return (
     <>
          <Suspense fallback={<div>Loading navigation...</div>}>
            <NavigationBar />
          </Suspense>
          <br ></br>
<br ></br>
<br ></br>
    
          <ActiveFundiNav />
          <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
          <div className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
        

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-600 mt-6 mb-4">Order Specifications</h1>

        {/* Delivery Address Card */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Delivery Address</h2>
          <p className="text-gray-600">Kodele</p>
        </div>

        {/* Product List Card */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Product List</h2>
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
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                    </td>
                    <td className="px-4 py-3">{product.name}</td>
                    <td className="px-4 py-3">{product.quantity}</td>
                    <td className="px-4 py-3">{product.rate}</td>
                    <td className="px-4 py-3">{calculateTotal(product.quantity, product.rate)}</td>
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
