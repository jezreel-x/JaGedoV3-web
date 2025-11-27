// import { useCart } from "./useCart";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const ShopAppNavbar = ({ onSearch }) => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const {getCartCount} = useCart();

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        // const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalItems = cart.length;
        setCartCount(totalItems);
        };

        updateCartCount();

        // Optional: add storage listener for sync across tabs
        window.addEventListener("storage", updateCartCount);
        return () => window.removeEventListener("storage", updateCartCount);
    }, []);

  const handleSearchChange = (e) => {
    const { value } = e.target.value;
    setSearchQuery(value);
    onSearch?.(value); // Call parent's handler
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-white fixed top-0 left-0 z-50 shadow-md px-4 py-3 w-full">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <img src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" alt="Logo" className="w-40 md:w-36 lg:w-36 h-auto" />

        {/* Center - Search (hidden on small screens) 
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
       */}

        <div className="relative hidden md:flex w-[60%]">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* You can replace this with your preferred icon set */}
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search by Name, Price, Product Description"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right - Icons */}
        <div className="hidden sm:flex items-center gap-10 text-xl text-gray-700">
            <div>
                <button
                    onClick={() => navigate("/hardware_shop/hardware-products/cart-preview/cart")}
                    type="button" 
                    className="relative hover:text-[rgb(0,0,112)] cursor-pointer"
                >
                    <FaShoppingCart size={30} />
                    {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                        {cartCount}
                    </span>
                     )}
                </button>
                {/*
                <span className="absolute top-0 right-0 text-sm bg-red-600 text-white rounded-full px-1">
                    {getCartCount()}
                </span>
                */}
            </div>
          <button 
            type="button"
            className="hover:text-[rgb(0,0,112)] cursor-pointer"
          >
            <FaUserCircle size={30} />
          </button>

          {/* Hamburger menu for mobile */}
          <button
            type="button"
            className="sm:hidden hover:text-green-600"
            onClick={handleClick}
          >
            {isOpen ? <X size={28} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile search toggle */}
      {isOpen && (
        <div className="mt-3 md:hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}
    </nav>
  );
}
ShopAppNavbar.propTypes = {
  onSearch: PropTypes.func,
};

export default ShopAppNavbar;
