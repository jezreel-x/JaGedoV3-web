import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { 
    // BarChart, 
    // Bar, 
    // XAxis, 
    // YAxis, 
    // Legend, 
    // ResponsiveContainer 
} from 'recharts';
import DataAnalyticsSidebar from "./DataAnalyticsSidebar";
// import barChartBuildersData from "./BarChartBuildersData";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import AdminNavigationBar from "../../components/Navigation/AdminNav";

const cardData = {
    'Jobs' : {value: 300000, direction: 'up', change: '30%'},
    'Orders': {value: 150000, direction: 'down', change: '40%'},
    'All': {value: 450000, direction: 'up', change: '20%'}
};

const pieDataAll = [
    { name: "Managed by Self", value: Math.floor(Math.random() * 100) },
    { name: "Managed by JaGedo", value: Math.floor(Math.random() * 100) },
];

const pieDataRequests = [
    { name: "Jobs", value: Math.floor(Math.random() * 100) },
    { name: "Orders", value: Math.floor(Math.random() * 100) },
];

const COLORS = ["#36a2eb", "#ff6384"];

const AllRequestsAnalyticsDashboard = () => {
    const [selected, setSelected] = useState('To Date');
    const [category, setCategory] = useState("All");
    const [type, setType] = useState("Fundis");
    const [regionType, setRegionType] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const totalCount = cardData[category];

    const statusCounts = useMemo(() => {
        const itemLabels = [
            `Draft ${category}`,
            `New ${category}`,
            `${category} under Quotation`,
            `Active ${category}`,
            `Completed ${category}`,
            `Reviewed ${category}`, 
        ];
        return itemLabels.map((label) => ({
            status: label,
            number: Math.floor(Math.random() * 100 + 1), // Random number for demonstration
        }));
    }, [category]);

    return (
        <div className="flex">
            <DataAnalyticsSidebar />
            <AdminNavigationBar />
            <main className="flex-1 mt-20 ml-64 p-6 space-y-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Analytics - All Requests</h2>
                    {/* <div className="space-x-2">
                        {['24h', '1w', '1m', '1y'].map(range => (
                        <button
                            key={range}
                            onClick={() => setSelected(range)}
                            className={`px-6 py-3 border border-gray-300 cursor-pointer rounded-md 
                            ${selected === range
                            ? 'bg-[rgb(0,0,112)] text-white'
                            : 'hover:text-gray-700 bg-blue-300'}`}
                        >
                            {range}
                        </button>
                        ))}
                    </div> */}
                    <div className="px-4 py-3">
                        <button
                            type="button"
                            onClick={() => setIsFilterOpen(true)}
                            className="px-4 py-2 bg-[rgb(0,0,112)] font-semibold text-white rounded-lg hover:bg-blue-300 hover:text-gray-800 transition duration-200 cursor-pointer"
                        >
                            Filters
                        </button>
                    </div>
                </div>

                <div className="flex justify-around items-center p-4">
                    <div className="border rounded-lg border-gray-500 px-4 py-2 w-56 mb-6">
                        <h3 className='text-sm font-medium text-gray-500 mb-1'>
                        {category === 'All' && 'Total Requests'}
                        {category === 'Jobs' && 'Total Jobs'}
                        {category === 'Orders' && 'Total Orders'}
                        </h3>
                        <p className='text-2xl font-semibold'>{totalCount.value}</p>
                        <p className={`flex items-center space-x-1 text-sm font-semibold mt-1
                            ${totalCount.direction === "up" ? "text-green-600" : "text-red-600"}`}>
                            <span className='align-text-bottom'>{totalCount.direction === "up" ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}</span>
                            <span>{totalCount.change}</span>
                        </p>
                    </div>
                    {/* Conditional Pie Chart */}
                        {category === "Jobs" || category === "All" ? (
                        <PieChart width={400} height={200}>
                            <Pie
                                data={pieDataAll}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                // label={({ name, value }) => `${name}: ${value}%`}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                                const RADIAN = Math.PI / 180;
                                const radius = 25 + innerRadius + (outerRadius - innerRadius) / 2;
                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        
                                return (
                                <text
                                    x={x}
                                    y={y}
                                    fill="black"
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    fontSize={12}
                                    fontWeight="bold"
                                >
                                    {pieDataAll[index].name + " (" + (pieDataAll[index].value * 100 / pieDataAll.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                                </text>
                                );
                            }}
                            labelLine={false}
                        >
                            {pieDataAll.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    ) : (
                        <div></div>
                    )}

                    {/* Pie Chart */}
                    {category === "All" && (
                    <div className="flex justify-center items-center mb-6">
                        <PieChart width={400} height={200}>
                            <Pie
                                data={pieDataRequests}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                                    const RADIAN = Math.PI / 180;
                                    const radius = 25 + innerRadius + (outerRadius - innerRadius) /
                                    2;
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                    return (
                                        <text
                                            x={x}
                                            y={y}
                                            fill="black"
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                            fontSize={12}
                                            fontWeight="bold"

                                        >
                                            {pieDataRequests[index].name + " (" + (pieDataRequests[index].value
                                            * 100 / pieDataRequests.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                                        </text>
                                    );
                                }}
                                labelLine={false}
                            >
                                {pieDataRequests.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                    )}
                </div>
                <hr className="border border-gray-300 my-8" />

                {/* Bar Chart */}
                {/* <h3 className="text-lg font-semibold mb-4 mt-8">Role Distribution by Region</h3>
                <div className="overflow-auto border border-gray-500 rounded-md shadow-sm py-4 bg-white">
                    <div className="scroll-auto min-w-[1800px]">
                        <ResponsiveContainer width="100%" height={500}>
                            <BarChart 
                                data={barChartBuildersData} 
                                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                                barSize={50} 
                                barCategoryGap="30%"
                            >
                                <XAxis 
                                    dataKey="name" 
                                    angle={-55} 
                                    textAnchor="end" 
                                    interval={0} 
                                    height={70}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend 
                                    layout="horizontal"
                                    verticalAlign="top" // default
                                    align="center" // default
                                    iconType="circle"
                                    iconSize={10}
                                    wrapperStyle={{ marginTop: 0, marginBottom: 10 }}
                                />
                                <Bar dataKey="Fundis" stackId="a" fill="#0088FE" />
                                <Bar dataKey="Professionals" stackId="a" fill="#FF8042" />
                                <Bar dataKey="Contractors" stackId="a" fill="#00C49F" />
                                <Bar dataKey="Hardware" stackId="a" fill="#845EC2" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div> */}

                {/* Status Table */}
                <div className="border border-gray-400 rounded-lg">
                    <table className="w-full bg-white rounded-lg overflow-hidden text-sm">
                        <thead className="bg-gray-100 text-left">
                        <tr className="border-b border-gray-100">
                            <th className="p-2 text-left font-semibold whitespace-nowrap">Item</th>
                            <th className="p-2 text-left font-semibold whitespace-nowrap">Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {statusCounts.map(({ status, number }) => (
                            <tr key={status} className={`hover:bg-gray-300 hover:text-gray-900 cursor-pointer
                            ${statusCounts.indexOf(status) % 2 === 0 ? 'bg-gray-200' : ''}`}>
                                <td className="text-gray-600 p-2">{status}</td>
                                <td className="text-gray-600 p-2">{number}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Filter Drawer */}
            {isFilterOpen && (
                <div className="fixed top-0 right-2 h-full w-64 bg-white border-l shadow-lg z-50 p-4">
                    <h2 className="text-lg font-bold mb-4">Filters</h2>
                    <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-semibold mb-1">Type:</label>
                    <select
                            id="category"
                            className="border w-full border-gray-500 text-gray-500 rounded px-4 py-2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                        {["All", "Jobs", "Orders"].map((cat) => (
                            <option className="text-gray-500" key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Job categories:</label>
                        <select
                            id="category"
                            className="border w-full border-gray-500 rounded px-4 py-3 text-gray-500"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                        {["All", "Fundis", "Contractors", "Professionals", "Hardware"].map((cat) => (
                            <option className="text-gray-500" key={cat} value={cat}>{cat}</option>
                        ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Regions:</label>
                        <select
                            id="category"
                            className="border w-full border-gray-500 rounded px-4 py-3 text-gray-500"
                            value={regionType}
                            onChange={(e) => setRegionType(e.target.value)}
                        >
                        {[
                            "All", 
                            "Kenya", 
                            "South Africa", 
                            "Nigeria", 
                            "Uganda",
                            "Tanzania",
                            "Germany",
                            "US",
                            "UK", "Australia", "Canada"
                        ].map((cat) => (
                            <option className="text-gray-500" key={cat} value={cat}>{cat}</option>
                        ))}
                        </select>
                    </div>
                    <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Date Range</label>
                    <select 
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className='px-4 py-3 border border-gray-500 rounded-lg w-full'
                    >
                        <option value="To Date">To Date</option>
                        <option value="24h">24h</option>
                        <option value="1w">1w</option>
                        <option value="1m">1m</option>
                        <option value="1y">1y</option>
                        <option value="5y">5y</option>
                    </select>
                    </div>
                    <button type="button"
                    onClick={() => setIsFilterOpen(false)}
                    className="mt-2 px-4 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 w-full cursor-pointer transition duration-200"
                    >
                    Close Filters
                    </button>
                </div>
            )}
                
            </main>
        </div>
    )
};

export default AllRequestsAnalyticsDashboard;