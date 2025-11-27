import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  // BarChart,
  // Bar,
  // XAxis,
  // YAxis,
  // Legend,
  // ResponsiveContainer,
} from "recharts";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import DataAnalyticsSidebar from "./DataAnalyticsSidebar";
import AdminNavigationBar from "../../components/Navigation/AdminNav";

const pieRegions = [
    { name: "All", value: Math.floor(Math.random() * 100) },
    { name: "Kenya", value: Math.floor(Math.random() * 100) },
    { name: "South Africa", value: Math.floor(Math.random() * 100) },
    { name: "Uganda", value: Math.floor(Math.random() * 100) },
    { name: "Nigeria", value: Math.floor(Math.random() * 100) },
    { name: "Tanzania", value: Math.floor(Math.random() * 100) },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FFC75F",
  "#F9F871",
  "#2C73D2",
];

const categoryData = {
  All: ["Fundis", "Contractors", "Professionals", "Hardware"],
  Fundis: [
    "Interior Skimmer",
    "Mason",
    "Painter",
    "Plumber",
    "Roofer",
    "Steel Fixer",
    "Tile Fixer",
    "Welder",
    "Carpenter",
    "Electrician",
    "Fitter",
    "Foreman",
    "Glass/Aluminium Installer",
  ],
  Contractors: [
    "Water",
    "Mechanical",
    "Electrical",
    "Building Works",
    "Roads & Other Civil Works",
  ],
  Professionals: [
    "Project Manager",
    "Construction Manager",
    "Water Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Structural Engineer",
    "Roads Engineer",
    "Architect",
    "Land Surveyor",
    "Safety Officer",
    "Topo Surveyor",
    "Interior Designer",
    "Landscape Architect",
    "Hydrologist",
    "Geologist",
    "Environmental Officer",
  ],
  Hardware: [
    "Quary",
    "Steel",
    "Pipes & Fittings",
    "Aluminium",
    "Glass",
    "Roofing",
    "Timber",
    "Concrete Tools & Equipment",
    "Ceramics & Tiles",
  ],
};

const cardData = {
    'All' : { value: Math.floor(Math.random() * 1000000), direction: 'up', change: '60%' },
    'Fundis' : {value: 300000, direction: 'up', change: '30%'},
    'Contractors': {value: 150000, direction: 'down', change: '40%'},
    'Professionals': {value: 150000, direction: 'up', change: '20%'},
    'Hardware': {value: 150000, direction: 'up', change: '20%'}
};

const BuilderAnalyticsDashboard = () => {
    const [category, setCategory] = useState("All");
      // const counts = tableData[selected];
    const totalCount = cardData[category];
    const [selectedLocation, setSelectedLocation] = useState("Kenya");
    const [selected, setSelected] = useState('To Date');
    const [isFilterOpen, setIsFilterOpen] = useState(false);



  const pieData = categoryData[category].map((label) => ({
    name: label,
    value: Math.floor(Math.random() * 1000 + 1),
  }));

  // const barChartData = pieRegions.map((region) => {
  //   const data = {
  //     name: region.name,
  //   };  
  //   categoryData[category].forEach((item) => {
  //     data[item] = Math.floor(Math.random() * 1000 + 1); // Random value for each category
  //   });
  //   return data;
  // }
  // );

  return (
    <div className="flex">
        <DataAnalyticsSidebar />
        <AdminNavigationBar />
        <main className="flex-1 ml-64 p-6 space-y-6 mt-20">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Analytics - Builders</h2>
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
                <div className="border rounded-lg border-gray-500 px-4 py-2 w-60 mb-6">
                    <h3 className='text-sm font-medium text-gray-500 mb-1'>
                    Total {category === "All" ? "builders" : category}
                    </h3>
                    <p className='text-2xl font-semibold'>{totalCount.value}</p>
                    <p className={`flex items-center space-x-1 text-sm font-semibold mt-1
                        ${totalCount.direction === "up" ? "text-green-600" : "text-red-600"}`}>
                        <span className='align-text-bottom'>{totalCount.direction === "up" ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}</span>
                        <span>{totalCount.change}</span>
                    </p>
                </div>

                {/* Pie Chart */}
                <div className="flex justify-center">
                    <PieChart width={700} height={500}>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150} // radius of the pie-chart
                        // label={({ name }) => name}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = 25 + innerRadius + (outerRadius - innerRadius);
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        
                            return (
                              <text
                                x={x}
                                y={y}
                                fill="#000"
                                textAnchor="middle"
                                dominantBaseline="central"
                                fontSize={12}
                                fontWeight="bold"
                              >
                                {pieData[index].name}
                              </text>
                            );
                          }}
                    >
                        {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                </div>
            </div>

            {/* Bar Chart */}
            {/* <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Role Distribution by Region</h3>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {categoryData[category].map((item, index) => (
                        <Bar key={item} dataKey={item} fill={COLORS[index % COLORS.length]} />
                    ))}
                </BarChart>
                </ResponsiveContainer>
            </div> */}

            {/* Cards Section */}
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
                  {Object.keys(categoryData).map((cat) => (
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

export default BuilderAnalyticsDashboard;
