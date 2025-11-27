// import { useParams } from "react-router-dom";
// import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";
// import { useCart } from "../../../../../../../data/useCart";
import { FcNext } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import QuantitySelector from "../../../../../data/QuantitySelector";
import NavigationBar from "../../../../../components/Navigation/NavigationBar";

export default function CartPreview() {
  // const { id } = useParams();

  // const { addToCart } = useCart();

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity: selectedQty,
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

    // Add new item
    existingCart.push(cartItem);

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success("Successfully added to cart!");

    setTimeout(() => {
        navigate("/customer/machinery/cart");
    }, 2000);
  };

  useEffect(() => {
    // const storedProduct = localStorage.getItem(`product-${id}`);
    const storedProduct = localStorage.getItem(`products`);
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="flex flex-col p-6 max-w-6xl mx-auto">
        <NavigationBar />
        <div className="flex mt-20 mb-8">
            <Link
            to="/customer/hardware_shop"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-lg sm:text-xl">
            Home{" "}
            <span>
                <FcNext />
            </span>
            </Link>
            {/* <Link to="">hardware-products/</Link> */}
            <Link
            to="/customer/machinery/cart-preview"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center justify-center text-lg sm:text-xl">
            Product Preview{" "}
            </Link>
        </div>
        

        <div className="relative border border-gray-400 shadow-lg w-full rounded-lg mt-2 bg-white mx-auto sm:px-6 lg:px-4 py-8">
            <div className="flex flex-col lg:flex-row mt-1">
                {/* Images Section */}
                <section className="w-full lg:w-1/2">
                    <div className="bg-white p-6 flex flex-col lg:flex-row gap-4">
                        {/* Main Image */}
                        <div className="w-full lg:w-3/4">
                            <img
                                src={product.image}
                                alt="Nguvu Cement main view"
                                className="w-full h-[200px] sm:h-[500px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="w-full lg:w-1/4 flex flex-col gap-4 justify-center">
                            <img
                                src={product.image}
                                alt="Back view"
                                className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            />
                            <img
                                src={product.image}
                                alt="Side view"
                                className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </div>
                    </div>
                </section>
            

                {/* Product Details Section */}
                <section className="w-full lg:w-1/2">
                    <div className="bg-white p-6 flex flex-col justify-between">
                        <div className="flex items-center gap-2 mb-4">
                                <h1 className="text-xl font-bold">Product Name:</h1>
                                <h2 className="text-gray-600 text-lg font-semibold">{product.name}</h2>
                        </div>

                        <div className="border-b border-gray-600" />

                            {/* Price */}
                        <div className="flex items-center gap-4 my-5">
                            <h1 className="text-xl font-bold">Price:</h1>
                            <h2 className="text-gray-600 text-lg font-semibold">Ksh {product.price}</h2>
                        </div>

                        <div className="border-b border-gray-600" />

                        {/* Product Title & Rating */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-600 gap-3 py-6">
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold">SKU:</h1> 
                                <h2 className="text-gray-600 text-lg font-semibold">{product.sku}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold">BID:</h1>
                                <h2 className="text-gray-600 text-lg font-semibold">{product.bid}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold">Material:</h1>
                                <h2 className="text-gray-600 text-lg font-semibold">{product.material}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold">Size:</h1>
                                <h2 className="text-gray-600 text-lg font-semibold">{product.size}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold">Color:</h1>
                                <h2 className="text-gray-600 text-lg font-semibold">{product.color}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold">UOM:</h1> 
                                <h2 className="text-gray-600 text-lg font-semibold">{product.uom}</h2>
                            </div>
                        </div>

                        <div className="border-b border-gray-600" />

                        {/* Description */}
                        <div className="pt-6 mb-4">
                            <h2 className="text-xl font-bold mb-4"><b>Product Description</b></h2>
                            <p className="text-gray-500 font-semibold leading-relaxed">
                                {product.description || 'N/A'}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <div className="flex items-center justify-center gap-4 sm:mb-0">
                                <QuantitySelector onChange={(qty) => setSelectedQty(qty)} />
                            </div>
                            <button
                                type="button" 
                                onClick={handleAddToCart}
                                className="flex-1 flex items-center cursor-pointer justify-center gap-2 bg-[rgb(0,0,112)] text-white py-4 px-6 font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
                            >
                            Add To Cart
                            </button>
                            <button 
                                type="button"
                                onClick={() => navigate("/hire-equipments-and-machinery/cart-preview/cart/checkout")} 
                                className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-green-600 hover:bg-green-500 text-white py-4 px-6 font-semibold rounded-xl transition duration-300 shadow-md"
                            >
                            Hire Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}
