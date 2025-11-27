import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcNext } from "react-icons/fc";
import toast from "react-hot-toast";
import NavigationBar from "../../../../../components/Navigation/NavigationBar";
import Pagination from "../Pagination";

const DesignCart = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [isActive, setIsActive] = useState(location.pathname);
  const [cartItems, setCartItems] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * 1,
    0
  );

  const totalPages = Math.ceil(cartItems.length / productsPerPage);

  const handlePrev = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleRowsPerPageChange = (e) => {
      setProductsPerPage(parseInt(e.target.value, 10));
      setCurrentPage(1); // Reset to page 1 on change
      // navigate(`/products?page=1`);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {
    setIsActive(location.pathname); 
  }, [location.pathname]);

  // Save and refresh cart
  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Remove item from cart
  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const handleCheckout = () => {
    // Optional: double-check cart data is up to date
    localStorage.setItem("cart", JSON.stringify(cartItems));
    navigate("/customer/designs/checkout");
  };

  return (
    <section className="container mx-auto mt-10">
      <NavigationBar />
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 mt-28">
        {/* Fundi hardware products */}
        <Link to="/hardware_shop/hardware-products">
          <div className={`flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4
            ${isActive.startsWith("/customer/hardware") ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-900"} transition`}>
            <img src="/hardwareShop.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Fundi" />
            <p className="mt-2 text-lg font-semibold">Hardware</p>
          </div>
        </Link>

        {/* Professional custom products */}

        <Link to="/hardware_shop/custom-products">
          {/* <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[rgba(0,0,122,0.4)] hover:bg-[rgba(0,0,122,0.7)] transition"> */}
          <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md bg-blue-200 hover:bg-opacity-70 p-4 transition">
            <img
              src="/customproducts.png"
              className="h-10 md:h-12 mr-2 md:mr-0"
              alt="Professional"
            />
            <p className="mt-2 text-lg font-semibold text-black">Custom Products</p>
          </div>
        </Link>

        {/* hire equipment and machine */}
        <Link to="/hardware_shop/hire-equipments-and-machinery">
          <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
            <img src="/machinery.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Contractor" />
            <p className="mt-2 text-lg font-semibold text-black">Machinery Hire</p>
          </div>
        </Link>

        {/* Hardware design */}
        <Link to="/hardware_shop/designs">
          <div className={`flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition hover:bg-opacity-70
            ${isActive.startsWith("/customer/designs") ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-900"}`}>
            <img src="/designs.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Hardware" />
            <p className="mt-2 text-lg font-semibold">Designs</p>
          </div>
        </Link>
      </nav>

      <div className="flex justify-between px-4 my-5">
        <div className="flex">
          <Link
            to="/customer/hardware_shop"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
            Home{" "}
            <span>
              <FcNext />
            </span>
          </Link>
          {/* <Link to="">hardware-products/</Link> */}
          <Link
            to="/customer/designs/cart-preview"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
            Product Preview{" "}
            <span>
              <FcNext />
            </span>
          </Link>
          <Link
            to="/customer/designs/cart"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-xl">
            Cart{" "}
            {/* <span>
              <FcNext />
            </span> */}
          </Link>
        </div>
        <button 
          type='button' 
          className="bg-[rgb(0,0,122)] text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-blue-600"
          onClick={() => toast.error("Cannot shop more than one product at a time! Please confirm order first.")}
        >
            Continue Shopping
        </button>
      </div>

      <section className="flex flex-col sm:flex-row justify-between items-start gap-6">
        {/* Left Side: Product List */}
        
        <div className="w-[90%] mx-auto sm:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md">
          {/* Product 1 */}
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-md shadow flex flex-col sm:flex-row sm:justify-between items-center"
                >
                  {/* Product Image and Name */}
                  <div className="flex self-start flex-col space-y-3 sm:w-48">
                    <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
                    <p className="font-semibold text-gray-700 text-lg">{item.name}</p>
                  </div>
                  <div className="flex self-start items-start my-8 sm:my-0 flex-col space-y-3">
                    <p className="font-semibold text-gray-700 text-lg">Price: Ksh {(item.price).toLocaleString()}</p>
                    <p className="text-gray-700 text-sm font-semibold">Subtotal: Ksh {(item.price * 1).toLocaleString()}</p>
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
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
            handlePrev={handlePrev}
            handleNext={handleNext}
            filteredProducts={cartItems}
          />
        </div>

        {/* Right Side: Cart Summary */}
        <div className="w-[90%] mx-auto sm:w-1/3 bg-white p-4 rounded-md shadow-md self-start my-4 sm:my-0">
          <h1 className="text-lg font-semibold mb-3">CART SUMMARY</h1>
          <p className="font-bold text-xl">Grand Total: Ksh {totalPrice.toLocaleString()}</p>

         
          <button 
            type="button" 
            className="mt-4 w-full bg-[rgb(0,0,122)] text-white py-4 rounded-md text-sm font-medium hover:opacity-90 cursor-pointer"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          
        </div>
      </section>
    </section>
  );
};

export default DesignCart;
