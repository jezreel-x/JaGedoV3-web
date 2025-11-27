import { useState } from "react";
import PropTypes from "prop-types";

const QuantitySelector = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-xl rounded cursor-pointer"
      >
        −
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
        onClick={increment}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-xl rounded cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
QuantitySelector.propTypes = {
  onChange: PropTypes.func,
};

export default QuantitySelector;
