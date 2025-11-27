import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomSideNav } from './CustomSideNav';
// import { CustomizeDesign } from './CustomizeDesign';
import toast from 'react-hot-toast';
import AllCustoms from '../../../../../data/AllCustoms';
import SidebarToggleButton from '../SidebarToggleButton';
import Pagination from '../Pagination';
// import QuantitySelector from '../../../../../data/QuantitySelector';
// import NavigationBar from '../../../../../components/Navigation/NavigationBar';

const AllCustomProducts = () => {

  const navigate = useNavigate();

  const filteredProducts = AllCustoms;
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedQty, setSelectedQty] = useState(1);
  const [isOpen, setIsOpen] = useState(false); // For toggling the sidebar
  const [productsPerPage, setProductsPerPage] = useState(8);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
    setAllProducts(currentProducts);
  }, [currentPage, productsPerPage, filteredProducts]);


  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleRowsPerPageChange = (e) => {
    setProductsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handleAddToCart = (product, goToCheckout = false) => {
    const cartItem = {
      ...product,
      quantity: 1, // Default quantity to 1
    };

    // Get existing cart or start fresh
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // If cart has items AND this product is already in the cart, prevent adding
    const productExists = existingCart.some(item => item.id === product.id);
    if (productExists) {
        toast.error("This product is already in your cart.");
        return;
    } 

    if (existingCart.length === 1) {
        toast.error("Cannot add more than one item per cart!");
        return;
    }

    existingCart.push(cartItem);

  // Save updated cart
    localStorage.setItem("cart", JSON.stringify(existingCart));
    // 🎉 Show success toast based on action
    if (goToCheckout) {
      toast.success("Product added. Redirecting to checkout...");
    } else {
      toast.success("Product added to cart.");
    }

    setTimeout(() => {
      // toast.dismiss(loadingToast); // Dismiss loading toast before navigating

      if (goToCheckout) {
        navigate("/customer/custom-products/checkout");
      } else {
        navigate("/customer/custom-products/cart");
      }
      // navigate("/cart");
    }, 2000);
  };
  
  const handleThumbnailClick = (productId, thumbKey) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newMainImage = product[thumbKey];
          return {
            ...product,
            [thumbKey]: product.image,
            image: newMainImage,
          };
        }
        return product;
      })
    );
  };
  

  // const handleSearch = (term) => {
  //   const lower = term.toLowerCase();

  //   if (lower.trim() === "") {
  //     setFilteredProducts(filteredProducts);
  //     return;
  //   }
    
  //   const result = filteredProducts.filter((p) => {
  //     return (
  //       p.name.toLowerCase().includes(lower) ||
  //       p.description.toLowerCase().includes(lower) ||
  //       p.price.toString().includes(lower)
  //     );
  //   });
  //   setFilteredProducts(result);

  // };

  const handleClick = (product) => {
    // localStorage.setItem(`product-${product.id}`, JSON.stringify(product));
    localStorage.setItem(`products`, JSON.stringify(product));
    navigate("/customer/custom-products/cart-preview");
  };

  return (
    <React.Fragment>
      {/* <NavigationBar onSearch={handleSearch} /> */}
      <section className='container relative mx-auto flex' style={{ scrollbarGutter: 'stable' }}>
        <CustomSideNav isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)} />

        <main className="flex-1 mx-5">
          <section className="">
            {allProducts.map((product) => (
            <div 
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick(product);
            }}
            key={product.id}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl p-6 border-3 border-gray-400 sm:space-x-6 gap-8 md:gap-0 mb-6 w-[350px] sm:w-full">

            {/* Image Gallery Section */}
            <div className="lg:col-span-3 md:w-1/2 w-full space-y-4">
              <div className='flex gap-3'>
                {/* Main Image */}
                <div className="relative md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden group">
                  <img
                    src={product.image}
                    alt="Main property view"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Thumbnail Grid */}
                <div className="w-full md:w-2/3 grid grid-rows-2 gap-3">
                  <div 
                    onClick={() => handleThumbnailClick(product.id, 'thumbnail1')}
                    className="h-[190px] relative rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={product.thumbnail1 || product.image}
                      alt="Property view 1"
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div
                    onClick={() => handleThumbnailClick(product.id, 'thumbnail2')}
                    className="h-[190px] relative rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={product.thumbnail2 || product.image}
                      alt="Property view 2"
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                 
                </div>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="flex flex-col h-full w-full md:w-1/2">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
                <h3 className="text-3xl lg:text-4xl font-semibold text-green-600">KSH {product.price}</h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed my-4">
              {product.description}
              </p>

              {/* Property Features */}
              <div className="grid">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6">
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-gray-600 mb-2"><b>SKU:</b> {product.sku || 'N/A'}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-gray-600 mb-2"><b>BID:</b> {product.bid || 'N/A'}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-gray-600 mb-2"><b>Material:</b> {product.material || 'N/A'}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-gray-600 mb-2"><b>Size:</b> {product.size || 'N/A'}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-gray-600 mb-2"><b>Color:</b> {product.color || 'N/A'}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-sm font-semibold text-gray-600 mb-2"><b>UOM:</b> {product.uom || 'N/A'}</h1>
                    </div>
                  </div>
              </div>
              

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                {/* <QuantitySelector onChange={(qty) => setSelectedQty(qty)} /> */}
                {/* <CustomizeDesign /> */}
                <button 
                  type='button'
                  onClick={() => handleAddToCart(product)} 
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-[rgb(0,0,112)] text-[rgb(0,0,112)] font-semibold hover:bg-[rgb(0,0,112)] hover:text-white transition-colors cursor-pointer"
                >
                  Add To Cart
                </button>
                <button 
                  type='button'
                  onClick={() => handleAddToCart(product, true)} 
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-[rgb(0,0,112)] text-[rgb(0,0,112)] font-semibold hover:bg-[rgb(0,0,112)] hover:text-white transition-colors cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          ))}
        </section>


       <Pagination
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          filteredProducts={filteredProducts}
        />
      </main>
        <SidebarToggleButton onClick={() => setIsOpen((prev) => !prev)} />
      </section>
    </React.Fragment>
  )
}

export default AllCustomProducts;
