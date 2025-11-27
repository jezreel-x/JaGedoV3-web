import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { MdDashboard, MdRequestPage } from "react-icons/md";
import { FaUsers, FaHardHat, FaGlobe, FaChartLine } from "react-icons/fa";

const dataUsers = [
  { name: "Organization", value: 3 },
  { name: "Individuals", value: 23 },
];

const dataBuilders = [
  { name: "Professionals", value: 10 },
  { name: "Hardware", value: 7 },
  { name: "Fundis", value: 5 },
  { name: "Customers", value: 3 },
];

const dataJobs = [
  { name: "Fundi", value: 8 },
  { name: "Hardware", value: 6 },
  { name: "Contractor", value: 5 },
  { name: "Professional", value: 4 },
];

const dataOrders = [
  { name: "Hardware", value: 9 },
  { name: "Live Marketing", value: 7 },
  { name: "Customer Product", value: 6 },
  { name: "Design", value: 5 },
];

const colors = ["#6366F1", "#EC4899", "#22C55E", "#F59E0B"];

export default function AnalyticsDashboard() {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedSubcounty, setSelectedSubcounty] = useState("");
  const counties = ["Nairobi", "Mombasa", "Kisumu", "Nakuru"];
  const subcounties = {
    Nairobi: ["Westlands", "Kibra", "Langata"],
    Mombasa: ["Nyali", "Likoni"],
    Kisumu: ["Ahero", "Maseno"],
    Nakuru: ["Naivasha", "Gilgil"],
  };

  const sidebarItems = [
    { name: "Summary", icon: <MdDashboard size={20} /> },
    { name: "Customer", icon: <FaUsers size={20} /> },
    { name: "Builders", icon: <FaHardHat size={20} /> },
    { name: "Requests", icon: <MdRequestPage size={20} /> },
    { name: "Web", icon: <FaGlobe size={20} /> },
    { name: "Sales", icon: <FaChartLine size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white p-5">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <ul className="mt-4 space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.name} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="w-4/5 p-6">
        <div className="flex justify-between mb-4">
          <button type="button" className="bg-gray-300 px-4 py-2 rounded">To Date</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {["Total Users", "Total Customers", "Total Builders"].map((metric) => (
            <div key={metric} className="bg-white p-4 rounded shadow-md text-center font-semibold">
              {metric}
            </div>
          ))}
          {["Total Requests", "Jobs", "Orders"].map((metric) => (
            <div key={metric} className="bg-white p-4 rounded shadow-md text-center font-semibold">
              {metric}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-6">
          <button type="button" className="bg-gray-300 px-4 py-2 rounded shadow">To Date</button>
          <div>
            <select
className="bg-[rgb(0,0,122)] text-white px-4 py-2 rounded mr-2"
onChange={(e) => setSelectedCounty(e.target.value)}
              value={selectedCounty}
            >
              <option value="">Select County</option>
              {counties.map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
            <select
              className="bg-[rgb(0,0,122)] text-white px-4 py-2 rounded"
              onChange={(e) => setSelectedSubcounty(e.target.value)}
              value={selectedSubcounty}
              disabled={!selectedCounty}
            >
              <option value="">Select Subcounty</option>
              {selectedCounty && subcounties[selectedCounty].map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Summary Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {["Total Users: 1500", "Total Requests", "TTV", "Total Web Traffic"].map((metric) => (
            <div key={metric} className="bg-white p-4 rounded shadow-md text-center font-semibold">
              {metric}
            </div>
          ))}
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6">
          {[{ title: "Total Customers", data: dataUsers }, { title: "Total Builders", data: dataBuilders }].map(({ title, data }, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
                    {data.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-6">
          {[{ title: "Total Jobs", data: dataJobs }, { title: "Total Orders", data: dataOrders }].map(({ title, data }, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
                    {data.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
