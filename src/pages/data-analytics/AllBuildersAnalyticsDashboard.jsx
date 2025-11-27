import { useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import DataAnalyticsSidebar from "./DataAnalyticsSidebar";
import AdminNavigationBar from "../../components/Navigation/AdminNav";

const pieRegions = [
    { name: "KE", value: 3 },
    { name: "UG", value: 5 },
    { name: "NG", value: 5 },
    { name: "TZ", value: 2 },
];

const statusLabels = [
  "Incomplete",
  "Complete",
  "Suspended",
  "Blacklisted",
  "Expired",
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FF8042",
  "#845EC2",
];

const categoryData = ["All", "Fundis", "Contractors", "Professionals", "Hardware"];

const barChartData = [
    {
      name: "KE",
      "Fundis": 18,
      Professionals: 10,
      Contractors: 20,
      Hardware: 8,
    },
    {
      name: "TZ",
      "Fundis": 22,
      Professionals: 18,
      Contractors: 20,
      Hardware: 19,
    },
    {
      name: "UG",
      "Fundis": 12,
      Professionals: 10,
      Contractors: 22,
      Hardware: 14,
    },

    {
        name: "NG",
        "Fundis": 28,
        Professionals: 16,
        Contractors: 12,
        Hardware: 24,
    }
];

const cardData = {
    'All' : {value: 5000000, direction: 'up', change: '40%'},
    'Fundis' : {value: 300000, direction: 'up', change: '30%'},
    'Contractors': {value: 150000, direction: 'down', change: '40%'},
    'Professionals': {value: 150000, direction: 'up', change: '20%'},
    'Hardware': {value: 150000, direction: 'up', change: '20%'}
};

const AllBuildersAnalyticsDashboard = () => {
    const [category, setCategory] = useState("Fundis");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
      // const counts = tableData[selected];
    const totalCount = cardData[category];
    const [selectedLocation, setSelectedLocation] = useState("Kenya");
    const [selected, setSelected] = useState('To Date');

    const pieData = categoryData.map((label) => ({
        name: label,
        value: Math.floor(Math.random() * 10 + 1),
    }));

    const statusCounts = useMemo(() => {
        return statusLabels.map((status) => ({
            status,
            number: Math.floor(Math.random() * 100 + 1), // Random number for each status
        }));
    }, []);
    

    console.log("Status Counts:", statusCounts);

  return (
    <div className="flex">
        <DataAnalyticsSidebar />

        <AdminNavigationBar />

        <main className="flex-1 ml-64 p-6 space-y-10 mt-20 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Analytics - All Builders</h2>
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

            <div className="flex font-bold">Builder Satisfaction Score: 
                <div className="flex space-x-1 text-yellow-400 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            
            <div className="flex justify-between items-center p-4">
                <div className="border rounded-lg border-gray-500 px-4 py-2 w-56 mb-6">
                    <h3 className='text-sm font-medium text-gray-500 mb-1'>
                    Total {category}
                    </h3>
                    <p className='text-2xl font-semibold'>{totalCount.value}</p>
                    <p className={`flex items-center space-x-1 text-sm font-semibold mt-1
                        ${totalCount.direction === "up" ? "text-green-600" : "text-red-600"}`}>
                        <span className='align-text-bottom'>{totalCount.direction === "up" ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}</span>
                        <span>{totalCount.change}</span>
                    </p>
                </div>

                {/* Pie Chart */}
                {category === "All" && (
                    <div className="flex justify-center">
                    <PieChart width={700} height={500}>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150} // radius of the pie-chart
                        // label={({ name, percent }) =>
                        //     `${name} (${(percent * 100).toFixed(0)}%)`
                        // }
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = 25 + innerRadius + (outerRadius - innerRadius) / 2;
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        
                            return (
                              <text
                                x={x}
                                y={y}
                                fill="#fff"
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize={12}
                                fontWeight="bold"
                              >
                                {pieData[index].name + " (" + (pieData[index].value * 100 / pieData.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                              </text>
                            );
                        }}
                        labelLine={false}
                    >
                        {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                </div>
                )}
            </div>

            {/* Bar Chart */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Role Distribution by Region</h3>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Fundis" fill="#0088FE" />
                    <Bar dataKey="Professionals" fill="#FF8042" />
                    <Bar dataKey="Contractors" fill="#00C49F" />
                    <Bar dataKey="Hardware" fill="#845EC2" />
                </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Status Table */}
            <table className="w-full bg-white rounded-lg overflow-hidden text-sm">
                <thead className="bg-gray-100 text-gray-600">
                <tr className="border-b border-gray-100">
                    <th className="p-2 text-left font-semibold whitespace-nowrap">Status</th>
                    <th className="p-2 text-left font-semibold whitespace-nowrap">Number</th>
                </tr>
                </thead>
                <tbody>
                {statusCounts.map(({ status, number }) => (
                    <tr key={status} className={`hover:bg-gray-100 cursor-pointer transition-colors duration-200
                        ${status % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="text-gray-600 p-2">{status}</td>
                        <td className="text-gray-600 p-2">{number}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Filter Drawer */}
            {isFilterOpen && (
              <div className="fixed top-0 right-2 h-full w-64 bg-white border-l shadow-lg z-50 p-4">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
                <div className="mb-4">
                 <label htmlFor="category" className="block text-sm font-semibold mb-1">Category:</label>
                  <select
                      id="category"
                      className="border rounded px-4 py-2 w-full"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                  >
                  {categoryData.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                  ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">Location</label>
                   <select 
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        defaultValue="default" 
                        className='w-full px-4 py-3 border border-gray-500 rounded-lg'
                    >
                        <option value="default" disabled>Filter based on Location</option>
                        {pieRegions.map((item) => (
                        <option key={item.name} value={item.name}>{item.name}</option>
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
  );
};

export default AllBuildersAnalyticsDashboard;
