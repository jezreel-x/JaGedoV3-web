const tableData = {
    All: {
      draftRequests: 25,
      requests: 80,
      activeJobs: 60,
      completedJobs: 40,
      reviewed: 30,
    },
    Individual: {
      draftRequests: 10,
      requests: 30,
      activeJobs: 20,
      completedJobs: 15,
      reviewed: 12,
    },
    Organization: {
      draftRequests: 15,
      requests: 50,
      activeJobs: 40,
      completedJobs: 25,
      reviewed: 18,
    },
};

import PropTypes from 'prop-types';

const TableCount = ({ selected }) => {
    
    const counts = tableData[selected];

    return (
        <>
        {/* Data Table */}
        <div className="border border-gray-200 rounded-lg">
            <table className="w-full bg-white rounded-lg overflow-hidden text-sm">
                <thead className='bg-gray-100 text-gray-600'>
                <tr className='border-b border-gray-100'>
                    <th className="p-2 text-left font-semibold whitespace-nowrap">Item</th>
                    <th className="p-2 text-left font-semibold whitespace-nowrap">Count</th>
                </tr>
                </thead>
                <tbody>
                <tr className='hover:bg-gray-100 cursor-pointer transition-colors duration-200'>
                    <td className='text-gray-600 p-2'>No. of Customers with Draft Requests</td>
                    <td className='text-gray-600 p-2'>{counts.draftRequests}</td>
                </tr>
                <tr className='hover:bg-gray-100 cursor-pointer transition-colors duration-200'><td className='text-gray-600 p-2'>No. of Customers with Requests</td><td className='p-3 text-gray-700'>{counts.requests}</td></tr>
                <tr className='hover:bg-gray-100 cursor-pointer transition-colors duration-200'><td className='text-gray-600 p-2'>No. of Customers with Active Jobs</td><td className='p-3 text-gray-700'>{counts.activeJobs}</td></tr>
                <tr className='hover:bg-gray-100 cursor-pointer transition-colors duration-200'><td className='text-gray-600 p-2'>No. of Customers with Completed Jobs</td><td className='p-3 text-gray-700'>{counts.completedJobs}</td></tr>
                <tr className='hover:bg-gray-100 cursor-pointer transition-colors duration-200'><td className='text-gray-600 p-2'>No. of Customers with Reviewed</td><td className='p-3 text-gray-700'>{counts.reviewed}</td></tr>
                </tbody>
            </table>
        </div>
        </>
    );
};

TableCount.propTypes = {
    selected: PropTypes.oneOf(['All', 'Individual', 'Organization']).isRequired,
};
export default TableCount;