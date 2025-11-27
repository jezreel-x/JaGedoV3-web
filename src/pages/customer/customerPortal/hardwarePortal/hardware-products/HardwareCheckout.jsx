import { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import NavigationBar from '../../../../../components/Navigation/NavigationBar';
import ProductList from '../../ProductList';
import Pagination from '../Pagination';
import ContactDetailsModal from '../ContactDetailsModal';
import DeliveryDetailsModal from '../DeliveryDetailsModal';

const HardwareCheckout = () => {

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [productsPerPage, setProductsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@gmail.com");
    const [phoneNum, setPhoneNum] = useState("0722153890");
    const [showModal, setShowModal] = useState(false);
    const [showDeliveryDetailsModal, setShowDeliveryDetailsModal] = useState(false);

    const [deliveryAddress, setDeliveryAddress] = useState("Kondele, Kisumu");

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
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    // Get current page's items
    const startIdx = (currentPage - 1) * productsPerPage;
    const endIdx = startIdx + productsPerPage;
    const currentPageItems = cartItems.slice(startIdx, endIdx);

    // Subtotal for current page
    // const pageSubtotal = currentPageItems.reduce(
    //     (sum, item) => sum + item.price * item.quantity,
    //     0
    // );

    // Grand total (all cart items)
    const grandTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    
    const handleConfirmOrder = () => {
        toast.success("Order placed successfully!");

        // Clear the cart
        localStorage.removeItem("cart");

        setTimeout(() => {
            navigate("/customer/hardware_shop")
        }, 1500);
    };

    const handleShowModal = () => {
        setShowModal((prev) => !prev);
    };

    const handleShowDeliveryModal = () => {
        setShowDeliveryDetailsModal((prev) => !prev);
    };

    return (
        <div className="container mx-auto p-6">
            <NavigationBar />
            <h1 className="text-center text-2xl font-bold mt-20 mb-6">Place Your Order</h1>

            <section className="flex flex-col sm:flex-row justify-between gap-8">
                {/* Left Section */}
                <div className="w-full sm:w-2/3 bg-white p-6 rounded-lg shadow-md">

                    {/* Customer Address */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center mb-6 border-b pb-4">
                        <h2 className="self-start sm:self-center text-lg font-semibold mb-2">Contact details</h2>
                        <div>
                            <p className="font-semibold">{name}</p>
                            <p className="text-gray-600">{phoneNum}</p>
                            <p className="text-gray-600">Email: {email}</p>
                        </div>
                        <button 
                            type='button' 
                            className="text-[rgb(0,0,122)] self-start sm:self-center font-medium flex items-center gap-1 hover:underline sm:my-1.5 cursor-pointer"
                            onClick={handleShowModal}
                        >
                            <Pencil size={16} /> Change
                        </button>
                    </div>

                    {/* Delivery Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 items-center space-y-4 sm:space-y-0">
                        <h2 className="text-lg font-semibold mb-2">Delivery Details</h2> 
                        <div>
                            <p className="text-gray-700 sm:pl-20">{deliveryAddress}</p>
                        </div>
                        <button 
                            type='button' 
                            className="text-[rgb(0,0,122)] font-medium flex items-center gap-1 hover:underline sm:my-1.5 cursor-pointer sm:justify-self-end"
                            onClick={handleShowDeliveryModal}
                        >
                            <Pencil size={16} /> Change
                        </button>    
                    </div>

                    <hr className='my-6' />

                    <ProductList cartItems={currentPageItems} setCartItems={setCartItems} />

                    {/*

                    <div className="bg-white p-0 sm:mx-5 overflow-x-auto shadow-md">
                        <table className="w-full border-collapse rounded-lg table-auto">
                            <thead>
                            <tr className="bg-gray-300 text-gray-700">
                                <th>No</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Image</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Product Name</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Quantity</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Rate</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map((p, index) => {
                                return (
                                <tr
                                    key={p.id}
                                    className="border-b-2 border-gray-300 bg-gray-50 hover:bg-gray-200 transition duration-300 hover:cursor-pointer"
                                >
                                    <td className="border border-gray-300/30 p-4 text-lg">{index + 1}</td>
                                    <td className="flex justify-center border border-gray-300/30 p-4">
                                    
                                    {p.image && p.image.length > 0 ? (
                                        <img
                                            src={p.image}
                                            alt="thumbnail"
                                            className="w-14 h-14 object-cover rounded-full border"
                                        />
                                    ) : (
                                        <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500">
                                            No Image
                                        </div>
                                    )}
                                    </td>
                                    <td className="border border-gray-300/30 p-4 text-lg">{p.name}</td>
                                    <td className="border border-gray-300/30 p-4 text-lg text-center">{p.quantity || "N/A"}</td>
                                    <td className="border border-gray-300/30 p-4 text-lg">{p.price || "N/A"}</td>
                                    <td className="border border-gray-300/30 p-4 text-lg">{(p.quantity * p.price) || "N/A"}</td>
                                </tr>
                                );
                            })}
                            {cartItems.length === 0 && (
                                <tr>
                                <td colSpan="8" className="text-center py-4 text-gray-500">
                                    No products yet.
                                </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    */}
                    <Pagination 
                        currentPage={currentPage}
                        productsPerPage={productsPerPage}
                        handleRowsPerPageChange={handleRowsPerPageChange}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        filteredProducts={cartItems}
                    />
                </div>

                {/* Right Section - Order Summary */}
                <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-md self-start">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div>
                        {/* {cartItems.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between text-gray-700 border-b pb-2"
                                >
                                <p>Item Total ({item.quantity})</p>
                                <p className="font-semibold">Total: Ksh {(item.quantity * item.price).toLocaleString()}</p>
                            </div>
                            )})
                        } */}
                        {Array.from({ length: totalPages }, (_, pageIndex) => {
                            const start = pageIndex * productsPerPage;
                            const end = start + productsPerPage;
                            const pageItems = cartItems.slice(start, end);
                            const subtotal = pageItems.reduce(
                                (sum, item) => sum + item.price * item.quantity,
                                0
                            );

                            return (
                                <div
                                    key={pageIndex}
                                    className="flex justify-between text-gray-600 border-b py-1"
                                >
                                <p>Page {pageIndex + 1}</p>
                                <p className='font-semibold'>KES {subtotal.toLocaleString()}</p>
                                </div>
                            );
                        })}

                    </div>

                    <div className="flex justify-between text-gray-700 border-b pb-2 mt-2">
                        <p>Delivery fee</p>
                        <p className="font-semibold">TBD</p>
                    </div>

                    <div className="flex justify-between text-lg font-bold mt-4">
                        <p>Grand Total</p>
                        <p>KES {grandTotal.toLocaleString()}</p>
                    </div>

                    <p className='my-3 text-sm text-gray-600'>
                        <span className='font-bold text-gray-700'>Note: </span>
                        The delivery fee will be determined and inserted by the Hardware Supplier
                    </p>

                    <label className="flex items-center space-x-2 text-sm my-4">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="w-4 h-4"
                        />
                        <span>I agree to ShopApp Agreement</span>
                    </label>

                    <button 
                        disabled={!isChecked}
                        type='button' 
                        onClick={handleConfirmOrder}
                        className={`w-full py-4 rounded-md text-sm font-medium hover:opacity-90
                            ${isChecked ? "bg-[rgb(0,0,122)] text-white cursor-pointer" : "bg-gray-300 cursor-not-allowed"}`}
                    >
                        Confirm Order
                    </button>
                </div>


                {/* Modal/Section to Add Category */}
                {showModal && (
                    <ContactDetailsModal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        name={name}
                        email={email}
                        phoneNum={phoneNum}
                        setName={setName}
                        setEmail={setEmail}
                        setPhoneNum={setPhoneNum}
                    />
                )}

                {showDeliveryDetailsModal && (
                    <DeliveryDetailsModal
                        showDeliveryDetailsModal={showDeliveryDetailsModal}
                        setShowDeliveryDetailsModal={setShowDeliveryDetailsModal}
                        deliveryAddress={deliveryAddress}
                        setDeliveryAddress={setDeliveryAddress}
                    />
                )}

            </section>
        </div>
    );
};

export default HardwareCheckout;
