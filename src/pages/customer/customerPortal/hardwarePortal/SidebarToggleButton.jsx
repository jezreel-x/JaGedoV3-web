import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';

const SidebarToggleButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-12 left-4 z-50 p-3 bg-gray-400 text-white rounded-lg md:hidden shadow-lg"
  >
    <FaBars size={24} />
  </button>
);

SidebarToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SidebarToggleButton;
