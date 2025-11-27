import PropTypes from "prop-types";

const Pagination = 
    ({ 
        filteredProducts, 
        productsPerPage, 
        handleRowsPerPageChange, 
        currentPage, 
        handleNext,
        handlePrev
    }) => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return(
        <>
            {/* Pagination Controls */}
            <div className="flex flex-col sm:justify-between sm:flex-row items-center my-8">
            {/* Dropdown: Rows Per Page */}
                <div className="flex justify-end items-center gap-3 sm:space-y-0 mb-5 sm:mb-0">
                    <label htmlFor="rows" className="text-sm font-medium">Products per page:</label>
                    <select
                        id="rows"
                        value={productsPerPage}
                        onChange={handleRowsPerPageChange}
                        className="border rounded px-2 py-1 text-sm align-middle"
                    >
                        {[8, 16, 24, 32, 40].map((num) => (
                        <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-3 items-center">
                    <button
                        type="button"
                        onClick={handlePrev}
                        // onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded cursor-pointer ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}
                    >
                        Prev
                    </button>

                    <span className="text-sm font-medium">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        type="button"
                        onClick={handleNext}
                        // onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded cursor-pointer ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
};

Pagination.propTypes = {
    filteredProducts: PropTypes.array.isRequired,
    productsPerPage: PropTypes.number.isRequired,
    handleRowsPerPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
};

export default Pagination;