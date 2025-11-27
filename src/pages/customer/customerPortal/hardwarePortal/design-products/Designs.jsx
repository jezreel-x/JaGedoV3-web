import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DesignSideNav } from './DesignSideNav';
import toast from 'react-hot-toast';
// import { CustomizeDesign } from './CustomizeDesign';
import AllDesigns from '../../../../../data/AllDesigns';
import SidebarToggleButton from '../SidebarToggleButton';
import Pagination from '../Pagination';


const Designs = () => {

  const navigate = useNavigate();

  // const [filteredProducts, setFilteredProducts] = React.useState(AllDesigns);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [isOpen, setIsOpen] = useState(false); // For toggling the sidebar
  const filteredProducts = AllDesigns; // Assuming AllDesigns is already filtered based on some criteria
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const [allProducts, setAllProducts] = useState([]);


  const handleRowsPerPageChange = (e) => {
    setProductsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 on change
    // navigate(`/products?page=1`);
  };

  const handlePrev = () => {
    setCurrentPage((p) => Math.max(p - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((p) => Math.min(p + 1, totalPages))
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
    setAllProducts(currentProducts);
  }, [currentPage, productsPerPage, filteredProducts]);


  const handleAddToCart = (product, goToCheckout = false) => {
      const cartItem = {
        ...product,
        quantity: 1, // Default quantity for new items
      };
      // save cartItem to cart logic (localStorage, context, etc.)
      // addToCart(cartItem)
  
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

      // ⏳ Optional: show loading-like toast (using info or loading type)
      // const loadingToast = toast.loading("Redirecting...", { autoClose: false });
      // toast.success("Successfully added to cart!");
  
      setTimeout(() => {
        // toast.dismiss(loadingToast); // Dismiss loading toast before navigating

        if (goToCheckout) {
          navigate("/customer/designs/checkout");
        } else {
          navigate("/customer/designs/cart");
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
    localStorage.setItem(`designs`, JSON.stringify(product));
    navigate("/customer/designs/cart-preview");
  };

  return (
    <div>
      {/* <NavigationBar onSearch={handleSearch} /> */}
      <section className='container relative mx-auto flex' style={{ scrollbarGutter: 'stable' }}>
        <DesignSideNav isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)} />

        <main className="flex-1 gap-6 mx-5 w-full md:w-3/4 lg:w-2/3 xl:w-3/4">
          <section className="">
            {allProducts.map((product) => (
            <div 
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick(product);
            }}
            key={product.id}
            className="flex flex-col md:flex-row bg-white gap-3 rounded-2xl shadow-xl p-6 border-3 border-gray-400 space-x-6 xl:space-x-2 mb-6 w-[350px] xs:w-full">

            {/* Image Gallery Section */}
            <div className="lg:col-span-3  md:w-1/2 w-full space-y-4">
              <div className='flex gap-3'>
                {/* Main Image */}
                <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden group">
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

              <p className="text-gray-700 text-sm leading-relaxed my-4">
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

        {/*

        <section className=" mx-auto my-3.5">
          <div className="flex md:flex-raw bg-white rounded-2xl shadow-xl p-6">

            {/* Image Gallery Section 
            <div className="lg:col-span-3 w-1/2 space-y-4">
              <div className='flex gap-3'>
                {/* Main Image 
                <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden group">
                  <img
                    src="https://www.realestate.com.au/news-image/w_2000,h_1500/v1732489517/news-lifestyle-content-assets/wp-content/production/DFH10566_REA-blog-Oct-2024_2000x1000px_v1g.jpg?_i=AA"
                    alt="Main property view"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Thumbnail Grid 
                <div className="w-1/3 grid grid-rows-2 gap-3">
                  {["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWysPgNtlCQ0hHtYLWQCG70HsRwxxyybWdnlj7VGG7jgM-qwzvFuubrhC5W3bk8-w1-jI&usqp=CAU",
                    "https://boldliving.com.au/app/uploads/2022/09/Flemington-352-Scandi-Facade-01-1140x806.jpg"]
                    .map((src, index) => (
                      <div key={index} className="h-[190px] relative rounded-xl overflow-hidden group cursor-pointer">
                        <img
                          src={src}
                          alt={`Property view ${index + 1}`}
                          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Property Details Section
            <div className="flex flex-col h-full w-1/2">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Flat Roof Apartment</h1>
                <h3 className="text-3xl lg:text-4xl font-semibold text-green-600">Ksh 1,500,000</h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur magnam quaerat quisquam corrupti id.
              </p>

              {/* Property Features 
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{ icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Floor Plan Area: 2000 sq ft" },
                { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Bedrooms: 3" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Number of Floors: 2" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Roof Type: Flat Roof" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Construction Material: Concrete & Steel" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons 
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                <CustomizeDesign />
                <button type='button' className="flex-1 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
        */}

          {/* Pagination Controls */}
          {/* <div className="flex justify-center items-center gap-4 my-8">
            <button
              type="button"
              className={`px-4 py-2 border border-gray-400 cursor-pointer rounded disabled:opacity-50
                ${currentPage === 1 ? "disabled:opacity-50 bg-gray-500 text-white" : "text-white bg-[rgb(0,0,112)]"}`}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span className="text-sm font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              className={`px-4 py-2 border cursor-pointer hover:bg-blue-300 hover:text-gray-800 border-gray-400 rounded
                ${currentPage === totalPages ? "disabled:opacity-50 bg-gray-500 text-white" : "text-white bg-[rgb(0,0,112)]"}`}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
            </div> */}
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
    </div>
  )
}

export default Designs
