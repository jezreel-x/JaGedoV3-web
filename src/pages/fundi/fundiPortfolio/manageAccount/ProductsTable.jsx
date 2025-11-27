function ProductsTable() {
  const products = [
    {
      image: "https://image.made-in-china.com/202f0j00HObkImzKATqp/Luxury-Custom-Metal-Front-Door-Design-Exterior-Safety-Galvanized-Steel-Modern-Front-Entry-Steel-Door.webp",
      name: "Butterfly Door",
      status: "Active",
      category: "Steel Door",
      date: "7/07/2025",
    },
    {
      image: "https://www.theadvancedgroup.co.uk/wp-content/uploads/2016/03/UPVC-Windows-10.jpg",
      name: "Grazed Window",
      status: "Active",
      category: "Steel Window",
      date: "8/07/2025",
    },
    {
      image: "https://nccke.com/wp-content/uploads/2021/11/uganda-cement.png",
      name: "Simba Cement",
      status: "Active",
      category: "Cement",
      date: "9/07/2025",
    },
  ];

  return (
    <div className="ml-64 p-8 flex justify-center"> {/* Added flex and justify-center */}
      <div className="w-3/4 overflow-x-auto bg-white rounded-lg shadow-sm"> {/* Set width to 3/4 */}
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-[rgb(0,0,122)] text-white">
            <tr>
              <th className="p-4 text-left">Product Image</th>
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-16 object-cover rounded-md border"
                  />
                </td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4">
                  <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                    {product.status}
                  </span>
                </td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
