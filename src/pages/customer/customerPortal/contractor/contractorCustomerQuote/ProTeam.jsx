import { FaEye } from "react-icons/fa";

const today = new Date().toLocaleDateString();


const ProTeam = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 ">
            {/* Project Details Dropdown */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-all my-5">
                {/* Top Row */}
                <div className="grid grid-cols-4 gap-4 items-center mb-4">
                    <span className="font-medium text-gray-800">REQ #3635</span>
                    <span className="text-gray-600 font-medium">Managed by Jagedo</span>
                    <span className="text-gray-600 font-medium">Req Date: {today}</span>
                    <span className="text-[rgb(0,0,122)] font-medium justify-self-end">View detail</span>
                </div>

                <hr className="border-gray-200 my-3" />

                {/* Bottom Row */}
                <div className="grid grid-cols-4 gap-2 items-center">
                    <span className="text-gray-700 font-medium">Details</span>
                    <span className="text-gray-600 font-medium">Location: Utawala, Nairobi</span>
                    <span className="text-gray-600 font-medium">Start Date: {today}</span>
                    <div className="justify-self-end">
                        <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors mr-2" />
                    </div>
                </div>
            </div>

            {/* ProTeam Section */}
            <div className="mb-6">
                <h2 className="text-xl font-bold underline">Team</h2>
            </div>

            {/* Invite ProTeam Member Button */}
            <div className="mb-6 flex justify-end">
                <button type="button" className="px-4 py-2 bg-[rgb(0,0,122)] text-white rounded-lg shadow hover:bg-blue-900">
                    Invite team member
                </button>
            </div>

            {/* ProTeam Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 font-semibold">Title</th>
                            <th className="p-3 font-semibold">Email</th>
                            <th className="p-3 font-semibold">Name</th>
                            <th className="p-3 font-semibold">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-3 ">Lead</td>
                            <td className="p-3 ">professional@jagedo</td>
                            <td className="p-3 ">Professional One</td>
                            <td className="p-3 ">Professional</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3">Associate</td>
                            <td className="p-3">Pwergh@jagedo</td>
                            <td className="p-3">Professional Two</td>
                            <td className="p-3">Senior</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProTeam;
