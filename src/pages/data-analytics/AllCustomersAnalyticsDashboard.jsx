import { useState } from 'react';
import DataAnalyticsSidebar from './DataAnalyticsSidebar';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import LocationFilter from './LocationFilter';
import TableCount from './TableCount';

const pieDataAll = [
    { name: "Individual", value: 20 },
    { name: "Organization", value: 80 },
];

const barData = [
  { country: "KE", value: 7 },
  { country: "UG", value: 7 },
  { country: "NG", value: 6 },
  { country: "CV", value: 6 },
  { country: "SA", value: 3 },
  { country: "US", value: 8 },
  { country: "AUS", value: 7 },
  { country: "UK", value: 4 },
  { country: "GER", value: 6 }
];

const cardData = {
  'All' : {value: 300000, direction: 'down', change: '30%'},
  'Individual': {value: 150000, direction: 'up', change: '40%'},
  'Organization': {value: 150000, direction: 'up', change: '20%'}
};

const COLORS = ["#36a2eb", "#ff6384"];

const AllCustomersAnalyticsDashboard = () => {

    const [selected, setSelected] = useState("All");
    const totalCount = cardData[selected];

  return (
    <div className="flex">
      <DataAnalyticsSidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Customers - {selected} Customers</h2>
          <span>12/12/25</span>
        </div>

        {/* Date Filters */}
        <div className="flex space-x-4 items-center">
          <div className="border border-gray-500 px-4 py-2 rounded-lg">24/11/11 - ???</div>
          <div className="space-x-2">
            <button className="bg-[rgb(0,0,112)] text-white hover:bg-blue-300 hover:text-gray-700 font-semibold px-4 py-2 rounded-lg cursor-pointer">Today</button>
            <button className="bg-[rgb(0,0,112)] text-white hover:bg-blue-300 hover:text-gray-700 font-semibold px-4 py-2 rounded-lg cursor-pointer">Yesterday</button>
            <button className="bg-[rgb(0,0,112)] text-white hover:bg-blue-300 hover:text-gray-700 font-semibold px-4 py-2 rounded-lg cursor-pointer">Last 7 days</button>
            <button className="bg-[rgb(0,0,112)] text-white hover:bg-blue-300 hover:text-gray-700 font-semibold px-4 py-2 rounded-lg cursor-pointer">Last 30 days</button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center">
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
          <LocationFilter />
        </div>

        <div className="font-medium">Customer Satisfaction Score: 5 (Ratings)</div>

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
        <div className="flex space-x-6">
          {/* Bar Chart */}
          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>

          {/* Conditional Pie Chart */}
          {selected === "All" && (
            <PieChart width={450} height={300}>
              <Pie
                data={pieDataAll}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {pieDataAll.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </div>

        {/* Data Table */}
        <TableCount selected={selected} />
      </main>
    </div>
  );
};

export default AllCustomersAnalyticsDashboard;
