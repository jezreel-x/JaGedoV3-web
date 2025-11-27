import { useState } from 'react';
import DataAnalyticsSidebar from './DataAnalyticsSidebar';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import TableCount from './TableCount';
import barChartData from './BarChartData';
import AdminNavigationBar from '../../components/Navigation/AdminNav';

const pieData = {
  'To Date': [
    { name: "Individual", value: "800,000" },
    { name: "Organization", value: Math.floor(Math.random() * 100000) },
  ],
  '24h': [
    { name: "Individual", value: "200" },
    { name: "Organization", value: "400" },
  ],
  '1w': [
    { name: "Individual", value: "2,510" },
    { name: "Organization", value: "3,435" },
  ],
  '1m': [
    { name: "Individual", value: "63,980" },
    { name: "Organization", value: "43,533" },
  ],
  '1y': [
    { name: "Individual", value: "213,909"},
    { name: "Organization", value: '112,907' },
  ],
  '5y': [
    { name: "Individual", value: "777,892" },
    { name: "Organization", value: '672,000' },
  ],
};

const pieRegions = {
  'To Date': [
    { name: "KE", value: "800,000" },
    { name: "South Africa", value: Math.floor(Math.random() * 1000000) },
    { name: "Nigeria", value: Math.floor(Math.random() * 1000000) },
    { name: "Uganda", value: Math.floor(Math.random() * 1000000) },
    { name: "Tanzania", value: Math.floor(Math.random() * 1000000) },
    { name: "Germany", value: Math.floor(Math.random() * 1000000) },
    { name: "Australia", value: Math.floor(Math.random() * 1000000) },
    { name: "US", value: Math.floor(Math.random() * 1000000) },
    { name: "UK", value: Math.floor(Math.random() * 1000000) },
    { name: "Canada", value: Math.floor(Math.random() * 1000000) },
  ],
  '24h': [
    { name: "KE", value: "113" },
    { name: "South Africa", value: Math.floor(Math.random() * 1000) },
    { name: "Nigeria", value: Math.floor(Math.random() * 1000) },
    { name: "Uganda", value: Math.floor(Math.random() * 1000) },
    { name: "Tanzania", value: Math.floor(Math.random() * 1000) },
    { name: "Germany", value: Math.floor(Math.random() * 1000) },
    { name: "Australia", value: Math.floor(Math.random() * 1000) },
    { name: "US", value: Math.floor(Math.random() * 1000) },
    { name: "UK", value: Math.floor(Math.random() * 1000) },
    { name: "Canada", value: Math.floor(Math.random() * 1000) },
  ],
  '1w': [
    { name: "KE", value: "2,300" },
    { name: "South Africa", value: Math.floor(Math.random() * 10000) },
    { name: "Nigeria", value: Math.floor(Math.random() * 10000) },
    { name: "Uganda", value: Math.floor(Math.random() * 10000) },
    { name: "Tanzania", value: Math.floor(Math.random() * 10000) },
    { name: "Germany", value: Math.floor(Math.random() * 10000) },
    { name: "Australia", value: Math.floor(Math.random() * 10000) },
    { name: "US", value: Math.floor(Math.random() * 10000) },
    { name: "UK", value: Math.floor(Math.random() * 10000) },
    { name: "Canada", value: Math.floor(Math.random() * 10000) },
  ],
  '1m': [
    { name: "KE", value: "80,000" },
    { name: "South Africa", value: Math.floor(Math.random() * 100000) },
    { name: "Nigeria", value: Math.floor(Math.random() * 100000) },
    { name: "Uganda", value: Math.floor(Math.random() * 100000) },
    { name: "Tanzania", value: Math.floor(Math.random() * 100000) },
    { name: "Germany", value: Math.floor(Math.random() * 100000) },
    { name: "Australia", value: Math.floor(Math.random() * 100000) },
    { name: "US", value: Math.floor(Math.random() * 100000) },
    { name: "UK", value: Math.floor(Math.random() * 100000) },
    { name: "Canada", value: Math.floor(Math.random() * 100000) },
  ],
  '1y': [
    { name: "KE", value: "300,000" },
    { name: "South Africa", value: Math.floor(Math.random() * 1000000) },
    { name: "Nigeria", value: Math.floor(Math.random() * 1000000) },
    { name: "Uganda", value: Math.floor(Math.random() * 1000000) },
    { name: "Tanzania", value: Math.floor(Math.random() * 1000000) },
    { name: "Germany", value: Math.floor(Math.random() * 1000000) },
    { name: "Australia", value: Math.floor(Math.random() * 1000000) },
    { name: "US", value: Math.floor(Math.random() * 1000000) },
    { name: "UK", value: Math.floor(Math.random() * 1000000) },
    { name: "Canada", value: Math.floor(Math.random() * 1000000) },
  ],
  '5y': [
    { name: "KE", value: "3,700,000" },
    { name: "South Africa", value: Math.floor(Math.random() * 10000000) },
    { name: "Nigeria", value: Math.floor(Math.random() * 10000000) },
    { name: "Uganda", value: Math.floor(Math.random() * 10000000) },
    { name: "Tanzania", value: Math.floor(Math.random() * 10000000) },
    { name: "Germany", value: Math.floor(Math.random() * 10000000) },
    { name: "Australia", value: Math.floor(Math.random() * 10000000) },
    { name: "US", value: Math.floor(Math.random() * 10000000) },
    { name: "UK", value: Math.floor(Math.random() * 10000000) },
    { name: "Canada", value: Math.floor(Math.random() * 10000000) },
  ],
};

const cardData = {
  'All' : {value: 300000, direction: 'up', change: '30%'},
  'Individual': {value: 150000, direction: 'down', change: '40%'},
  'Organization': {value: 150000, direction: 'up', change: '20%'}
};

const parseData = (data) =>
  data?.map((item) => ({
    ...item,
    value: Number(item.value.toString().replace(/,/g, "")),
  })) || [];

const countries = ["All", "KE", "DIASPORA"];

const COLORS = ["#8884d8", "#8dd1e1", "#82ca9d", "#a4de6c", "#d0ed57", "#ffc658", "#ff8042", "#ffbb28", "#ff6384", "#36a2eb"];

const CustomerAnalyticsDashboard = () => {

  const [selected, setSelected] = useState("All");
  const [selectedRange, setSelectedRange] = useState("To Date");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All");

  const categoryData = parseData(pieData[selectedRange]) || [];
  const regionData = parseData(pieRegions[selectedRange])?.filter((item) =>
    selectedLocation === "DIASPORA" ? item.name !== "KE" : true
  ) || [];


  const shouldShowBoth = selected === "All" && selectedLocation === "All";
  const showCategoryOnly = selected !== "All"; // don't show the first pie-chart
  const showRegionsOnly = selectedLocation === "KE";
  const showRegionOnly = selected !== "All" && selectedLocation === "All";

  const handleFilterChange = (range) => {
    setSelectedRange(range);
    // Here you can add logic to update the chart data based on the selected range
    // For example, you might want to fetch new data or filter existing data
  };
  // const counts = tableData[selected];
  const totalCount = cardData[selected];

  console.log({ selected, selectedLocation, selectedRange, regionData });


  return (
    <div className="flex">
      <DataAnalyticsSidebar />

      <AdminNavigationBar/>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 space-y-10 mt-20 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Customers - {selected} Customers</h2>
          <span>12/12/25</span>
        </div>

        {/* Date Filters */}
        <div className="flex items-center mb-4 justify-between">
          <div className="flex items-center space-x-4">
            {['To Date', '24h', '1w', '1m', '1y', '5y'].map(range => (
                  <button
                      key={range}
                      onClick={() => {handleFilterChange(range)}}
                      className={`px-4 py-2 cursor-pointer rounded-lg ${selectedRange === range ? 'bg-[rgb(0,0,112)] text-white' : 'bg-blue-200 text-gray-800 hover:bg-blue-100'}`}
                  >
                      {range}
                  </button>
            ))}
          </div>
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

        {/* Filters */}
        {/* <div className="flex items-center">
          <select 
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            defaultValue="default" 
            className='w-60 px-4 py-3 border border-gray-500 rounded-lg'
          >
            <option value="default" disabled>Select a category</option>
            <option value="All">All</option>
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select>
        </div> */}

        <div className="flex font-bold">Customer Satisfaction Score: 
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

        <div className="border rounded-lg border-gray-500 px-4 py-2 w-56">
          <h3 className='text-sm font-medium text-gray-500 mb-1'>
            Total {selected === "All" ? "" : selected} Customers
          </h3>
          <p className='text-2xl font-semibold'>{totalCount.value}</p>
          <p className={`flex items-center space-x-1 text-sm font-semibold mt-1
              ${totalCount.direction === "up" ? "text-green-600" : "text-red-600"}`}>
              <span className='align-text-bottom'>{totalCount.direction === "up" ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}</span>
              <span>{totalCount.change}</span>
          </p>
        </div>

        {/* Charts Section */}
        <div className="flex flex-col space-y-6">
          {/* Pie Chart */}
          <div className='flex items-center justify-center w-full mx-auto gap-4'>
            {(shouldShowBoth || !showCategoryOnly) && (
              <div className="w-1/2 p-4">
                <PieChart width={300} height={300} className='mx-auto'>
                  <Pie 
                    data={categoryData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100}
                    // 
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
                          {categoryData[index].name + " (" + (categoryData[index].value * 100 / categoryData.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                      </text>
                      );
                  }}
                    labelLine={false}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            )}
            {(shouldShowBoth || showRegionOnly || !showRegionsOnly) && (
              <div className="w-1/2 p-4">
                <PieChart width={400} height={300} className='mx-auto'>
                  <Pie 
                    data={regionData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={100}
                    // label={({ name, value }) => `${name}: ${value}%`}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
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
                            {regionData[index].name + " (" + (regionData[index].value * 100 / regionData.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                        </text>
                        );
                    }}
                    labelLine={false}
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            )}
          </div>
        </div>


        {/* Bar Chart */}
        <h3 className="text-lg font-semibold mb-4 mt-8">Role Distribution by Region</h3>
        <div className="overflow-auto border border-gray-500 rounded-md shadow-sm py-4 bg-white">
            <div className="scroll-auto min-w-[1800px]">
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart 
                        data={barChartData} 
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
                        {selected === "Individual" && (
                          <Bar dataKey="individual" fill="#8884d8" />
                        )}
                        {selected === "Organization" && (
                          <Bar dataKey="organization" fill="#82ca9d" />
                        )}
                        {selected === "All" && (
                          <>
                            <Bar dataKey="individual" fill="#8884d8" />
                            <Bar dataKey="organization" fill="#82ca9d" />
                          </>
                        )}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Data Table */}
        <TableCount selected={selected} />

        {/* Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed top-0 right-2 h-full w-64 bg-white border-l shadow-lg z-50 p-4">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Category</label>
              <select 
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className='w-full px-4 py-3 border border-gray-500 rounded-lg'
              >
                <option value="default" disabled>Select a category</option>
                <option value="All">All</option>
                <option value="Individual">Individual</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Location</label>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className='px-4 py-3 border border-gray-500 rounded-lg w-full'
                >
                  <option value="default" disabled>Filter based on Location</option>
                  {countries.map((item) => (
                  <option key={item} value={item}>{item}</option>
              ))} 
            </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Date Range</label>
              <select 
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
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

export default CustomerAnalyticsDashboard;
