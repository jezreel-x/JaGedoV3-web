import PropTypes from "prop-types";

const ProductList = ({cartItems, setCartItems}) => {
    // const [cartItems, setCartItems] = useState([]);

    // Save and refresh cart
    const updateCart = (updatedCart) => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const handleQuantityChange = (id, delta) => {
        const updated = cartItems.map((item) =>
        item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        );
        updateCart(updated);
    };

    // Remove item from cart
    const handleRemove = (id) => {
        const updated = cartItems.filter((item) => item.id !== id);
        updateCart(updated);
    };
    
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
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

                  {/* Product Price */}
                  <div className="flex self-start items-start flex-col space-y-3 my-8 sm:my-0">
                    <p className="text-gray-500 text-sm">Product ID: {item.id}</p>
                    <p className="font-semibold text-gray-700 text-lg">Price: Ksh {item.price}</p>
                    <p className="text-gray-700 text-sm font-semibold">
                        Subtotal: {(item.price * item.quantity).toLocaleString("en-US", { style: "currency", currency: "Ksh" })}
                    </p>
                  </div>

                  {/* Quantity controls */}
                   <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-3 align-baseline">
                            <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg rounded cursor-pointer"
                            >
                                −
                            </button>
                            <span className="text-lg font-medium">{item.quantity}</span>
                            <button
                                type="button"
                                onClick={() => handleQuantityChange(item.id, 1)}
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg rounded cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                        <button 
                            type="button" 
                            onClick={() => handleRemove(item.id)}
                            className="mt-2 text-sm text-red-500 font-bold cursor-pointer"
                            >
                            Remove
                        </button>
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
    )
};

ProductList.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default ProductList;