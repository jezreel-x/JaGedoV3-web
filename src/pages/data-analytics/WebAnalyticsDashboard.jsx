import { useState } from "react";
import DataAnalyticsSidebar from "./DataAnalyticsSidebar";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import AdminNavigationBar from "../../components/Navigation/AdminNav";

const countryData = [
  { name: "United States", iso2: "US", value: 40 },
  { name: "Canada", iso2: "CA", value: 20 },
  { name: "Germany", iso2: "DE", value: 15 }, // Correct ISO2: "DE" not "GER"
  { name: "South Africa", iso2: "ZA", value: 5 }, // ISO2: "ZA"
  { name: "United Kingdom", iso2: "GB", value: 5 },
  { name: "Australia", iso2: "AU", value: 5 }, // Correct spelling + ISO2: "AU"
];

// Color scale based on value
const getFillColor = (iso2) => {
  const country = countryData.find((c) => c.iso2 === iso2);
  if (!country) return "#E2E8F0"; // light gray fallback
  const alpha = 0.3 + (country.value / 100) * 0.7; // scale opacity
  return `rgba(0, 174, 255, ${alpha})`;
};

const metrics = {
    'To Date': [
        { title: 'Total Visitors', value: 3000, direction: 'up', change: '10%' },
        { title: 'Active Users', value: 1500, direction: 'up', change: '20%' },
        { title: 'Conversion Rate', value: "23.20%", direction: 'down', change: '10%' },
        { title: 'Bounce Rate', value: "12.89%", direction: 'down', change: '30%' },
        { title: 'Total Sessions', value: 6000, direction: 'up', change: '5%' },
        { title: 'Sessions per week', value: 1800, direction: 'up', change: '10%' },
        { title: 'User Engagement Rate', value: "63.20%", direction: 'up', change: '10%' },
        { title: 'User Engagement Duration', value: "45000 hrs" },
    ],
    '24h': [
        { title: 'Total Visitors', value: 2750, direction: 'up', change: '10%' },   
        { title: 'Active users', value: 1200, direction: 'up', change: '20%' },
        { title: 'Conversion Rate', value: "33.3%", direction: 'down', change: '10%' },
        { title: 'Bounce Rate', value: "45.33%", direction: 'down', change: '30%' },
        { title: 'Total Sessions', value: 5000, direction: 'up', change: '5%' },
        { title: 'Sessions per week', value: 1575, direction: 'up', change: '10%' },
        { title: 'User Engagement rate', value: "23.48%", direction: 'up', change: '10%' },
        { title: 'User Engagement Duration', value: "30 hrs" },
    ],
    '1w': [
        { title: 'Total Visitors', value: 5550, direction: 'up', change: '10%' },
        { title: 'Active Users', value: 3200, direction: 'up', change: '20%' },
        { title: 'Conversion Rate', value: "22.89%", direction: 'up', change: '20%' },
        { title: 'Bounce Rate', value: "42.0%", direction: 'down', change: '30%' },
        { title: 'Total sessions', value: 3000, direction: 'up', change: '5%' },
        { title: 'Sessions per week', value: 1675, direction: 'down', change: '10%' },
        { title: 'User Engagement Rate', value: "51.11%", direction: 'down', change: '10%' },
        { title: 'User Engagement Duration', value: "300 hrs" },
    ],
    '1m': [
        { title: 'Total Visitors', value: 3750, direction: 'down', change: '10%' },
        { title: 'Active Users', value: 2200, direction: 'up', change: '20%' },
        { title: 'Conversion Rate', value: "43.53%", direction: 'up', change: '60%' },
        { title: 'Bounce Rate', value: "28.93%", direction: 'down', change: '30%' },
        { title: 'Total sessions', value: 9000, direction: 'up', change: '5%' },
        { title: 'Sessions per week', value: 2575, direction: 'up', change: '10%' },
        { title: 'User Engagement Rate', value: "36.93%", direction: 'up', change: '10%' },
        { title: 'User Engagement Duration', value: "2500 hrs" },
    ],
    '1y': [
        { title: 'Total Visitors', value: 212750, direction: 'down', change: '10%' },
        { title: 'Active Users', value: 113200, direction: 'up', change: '20%' },
        { title: 'Conversion Rate', value: "42.34%", direction: 'down', change: '20%' },
        { title: 'Bounce Rate', value: "64.31%", direction: 'up', change: '30%' },
        { title: 'Total sessions', value: 55000, direction: 'up', change: '5%' },
        { title: 'Sessions per week', value: 11575, direction: 'down', change: '10%' },
        { title: 'User Engagement Rate', value: "13.30%", direction: 'up', change: '10%' },
        { title: 'User Engagement Duration', value: "10000 hrs" },
    ],
    '5y': [
        { title: 'Total Visitors', value: 500000, direction: 'up', change: '10%' },
        { title: 'Active Users', value: 300000, direction: 'up', change: '20%' },
        { title: 'Conversion Rate', value: "43.33%", direction: 'up', change: '30%' },
        { title: 'Bounce Rate', value: "35.98%", direction: 'down', change: '30%' },
        { title: 'Total sessions', value: 100000, direction: 'up', change: '5%' },
        { title: 'Sessions per week', value: 20000, direction: 'up', change: '10%' },
        { title: 'User Engagement Rate', value: "65.34%", direction: 'up', change: '10%' },
        { title: 'User Engagement Duration', value: "50000 hrs" },
    ]
};

const trafficData = [
  { name: 'Mobile', value: 40 },
  { name: 'Tablet', value: 10 },
  { name: 'Desktop', value: 45 },
  { name: 'Other', value: 5 }
];

const sourceData = [
    { name: 'Facebook', value: 50 },
    { name: 'Instagram', value: 80 },
    { name: 'Tiktok', value: 77 },
    { name: 'X', value: 10 },
    { name: 'Google', value: 44 },
    { name: 'LinkedIn', value: 38 },
    { name: 'YouTube', value: 25 },
];

const deviceData = [
    { name: 'iPhones', value: 200 },
    { name: 'Samsung', value: 300 },
    { name: 'Oppo', value: 250 },
    { name: 'Nokia', value: 320 },
    { name: 'Tecno', value: 150 },
    { name: 'Infinix', value: 180 },
    { name: 'Huawei', value: 220 },
    { name: 'Xiaomi', value: 270 },
    { name: 'Realme', value: 160 },
    { name: 'Vivo', value: 190 }
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#FF6384', '#1f6da1', '#b84d4d'];


const WebAnalyticsDashboard = () => {
    const [selected, setSelected] = useState('To Date');
    const [tooltipContent, setTooltipContent] = useState("");
    const metricsData = metrics[selected];

    // useEffect(() => {
    //     ReactTooltip.rebuild(); // ensures tooltips attach after render
    // }, []);

    return (
        <div className="flex">
            <DataAnalyticsSidebar />
            <AdminNavigationBar />

            {/* Main Content */}
            <main className="flex-1 mt-20 ml-64 p-6 space-y-6 overflow-y-auto bg-gray-100 text-gray-800 min-h-screen">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Analytics - Web</h2>
                    <span>12/12/25</span>
                </div>

                {/* Date Filters */}
                <div className="flex space-x-4 items-center mb-6">
                    <div className="space-x-2">
                        {['To Date', '24h', '1w', '1m', '1y', '5y'].map(range => (
                            <button
                                key={range}
                                onClick={() => setSelected(range)}
                                className={`px-4 py-2 cursor-pointer rounded-lg ${selected === range ? 'bg-[rgb(0,0,112)] text-white' : 'bg-white text-gray-800 hover:bg-blue-300'}`}
                            >
                                {range}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white p-4 rounded shadow w-full max-w-2/3 mx-auto">
                    <h2 className="text-xl font-semibold mb-2">Top Countries</h2>
                    <ComposableMap
                        data-tip=""
                        projectionConfig={{ scale: 140 }}
                        width={800}
                        height={400}
                        className="mx-auto"
                    >
                        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                        {({ geographies }) =>
                            geographies.map((geo) => {
                            const iso2 = geo.properties.ISO_A2;
                            const data = countryData.find((c) => c.iso2 === iso2);
                            return (
                                <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={getFillColor(iso2)}
                                stroke="#ffffff"
                                strokeWidth={0.5}
                                onMouseEnter={() => {
                                    if (data) {
                                    setTooltipContent(`
                                        <div style='display: flex; align-items: center; gap: 8px;'>
                                        <img src='https://flagcdn.com/w40/${iso2.toLowerCase()}.png' alt='${data.name}' width='20' height='15' style='border-radius: 2px;' />
                                        <span>${data.name}: ${data.value}%</span>
                                        </div>
                                    `);
                                    }
                                }}
                                onMouseLeave={() => setTooltipContent("")}
                                style={{
                                    default: { outline: "none" },
                                    hover: { fill: "#4299E1", outline: "none" },
                                    pressed: { outline: "none" },
                                }}
                                />
                            );
                            })
                        }
                        </Geographies>
                    </ComposableMap>

                    {/* <ReactTooltip html={true} className="z-50 max-w-sm">
                        {tooltipContent}
                    </ReactTooltip> */}
                    <ReactTooltip
                        id="tooltip"
                        globalEventOff="click"
                        clickable={true}
                        delayShow={500}
                        delayHide={100}
                        place="top"
                        effect="solid"
                        className="bg-white text-gray-800 p-2 rounded shadow-lg z-50"
                        getContent={tooltipContent}
                    />

                    {/* Legend */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {countryData.map((c) => (
                        <div key={c.iso2} className="flex items-center gap-2">
                            <img
                            src={`https://flagcdn.com/w40/${c.iso2.toLowerCase()}.png`}
                            alt={`${c.name} flag`}
                            width="20"
                            height="15"
                            className="rounded"
                            />
                            <span className="text-sm text-gray-700">{c.name} <span className="font-semibold">{c.value}%</span></span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="space-y-6">
                    {/* Placeholder for charts and tables */}
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {metricsData.map((metric, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 cursor-pointer"
                        >
                            <h3 className="text-sm font-medium text-gray-500 mb-1">{metric.title}</h3>
                            <p className="text-2xl font-semibold">{metric.value || ""}</p>
                            {metric.change && (
                            <p className={`flex items-center space-x-1 text-sm font-semibold mt-1
                                ${metric.direction === "up" ? "text-green-600" : "text-red-600"}`}>
                                <span className='align-text-bottom'>{metric.direction === "up" ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}</span>
                                <span>{metric.change}</span>
                            </p>
                            )}
                        </div>
                        ))}
                    </div>

                    {/* Donut charts */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                            <h2 className="text-sm font-medium mb-2">Traffic Sources</h2>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                <Pie
                                    data={sourceData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    innerRadius={40}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {sourceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend
                                    iconSize={10}
                                    iconType="circle"
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="center"
                                    formatter={(value) => <span className="text-lg">{value}</span>}
                                />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                            <h2 className="text-sm font-medium mb-4">Device Usage</h2>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                <Pie
                                    data={trafficData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    innerRadius={40}
                                    fill="#82ca9d"
                                    dataKey="value"
                                    label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                                        const RADIAN = Math.PI / 180;
                                        const radius = 25 + innerRadius + (outerRadius - innerRadius) / 2;
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
                                            {trafficData[index].name + " (" + (trafficData[index].value * 100 / trafficData.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                                        </text>
                                        );
                                    }}
                                    labelLine={false}
                                >
                                    {trafficData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend 
                                    iconSize={10}
                                    iconType="circle"
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="center"
                                    wrapperStyle={{ paddingTop: '20px' }}
                                    formatter=
                                    {
                                        (value) => 
                                            <span className="text-lg">
                                                {value} 
                                            </span>
                                    }
                                />
                                <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Bar chart: Specific Devices */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-sm font-medium mb-4">Specific Devices</h2>
                        <div className="overflow-auto">
                            <div className="min-w-[1024px]">
                                <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={deviceData} barSize={40}>
                                    <XAxis dataKey="name" angle={-25} textAnchor="end" interval={0} height={60} />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#8884d8" />
                                </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default WebAnalyticsDashboard;
// This is a placeholder for the Web Analytics Dashboard component.