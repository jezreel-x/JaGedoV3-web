import { useMemo, useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';
import { LineChart, Line, CartesianGrid, LabelList } from 'recharts';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DataAnalyticsSidebar from "./DataAnalyticsSidebar";
import revenueData from "./Revenue";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import AdminNavigationBar from "../../components/Navigation/AdminNav";

const metrics = {
    'To Date': [
        { title: 'Total Transaction Value', value: "Ksh 330,000", direction: 'up', change: '50%' },
        { title: 'Total Revenue', value: "Ksh 1,300,000", direction: 'up', change: '20%' },
        { title: 'Effective Commission Rate', value: "23.20%", direction: 'down', change: '5.49%' },
        { title: 'Revenue Growth Rate', value: "12.89%", direction: 'up', change: '30.22%' },
        { title: 'Annual Recurring Revenue', value: "Ksh 600,000", direction: 'up', change: '5.21%' },
        { title: 'Average Revenue Per User', value: "Ksh 18,000", direction: 'down', change: '11.27%' },
        { title: 'Customer Retention Rate', value: "63.20%", direction: 'up', change: '33.48%' },
        { title: 'Customer Churn Rate', value: "43.33%", direction: 'up', change: '30%' },
        { title: 'Customer Lifetime Value', value: "Ksh 60,000", direction: 'up', change: '5.98%' },
    ],
    '24h': [
        { title: 'Total Transaction Value', value: "Ksh 8,000", direction: 'up', change: '11%' },
        { title: 'Total Revenue', value: "Ksh 62,000", direction: 'up', change: '30%' },
        { title: 'Effective Commission Rate', value: "13.20%", direction: 'down', change: '5.49%' },
        { title: 'Revenue Growth Rate', value: "12.89%", direction: 'up', change: '13.22%' },
        { title: 'Annual Recurring Revenue', value: "Ksh 600,000", direction: 'up', change: '5.21%' },
        { title: 'Average Revenue Per User', value: "Ksh 4,000", direction: 'down', change: '19.27%' },
        { title: 'Customer Retention Rate', value: "23.20%", direction: 'down', change: '3.48%' },
        { title: 'Customer Churn Rate', value: "23.33%", direction: 'up', change: '30%' },
        { title: 'Customer Lifetime Value', value: "Ksh 10,000", direction: 'up', change: '9.98%' },
    ],
    '1w': [
        { title: 'Total Transaction Value', value: "Ksh 56,000", direction: 'up', change: '20%' },
        { title: 'Total Revenue', value: "Ksh 99,000", direction: 'down', change: '30%' },
        { title: 'Effective Commission Rate', value: "23.20%", direction: 'down', change: '5.77%' },
        { title: 'Revenue Growth Rate', value: "12.99%", direction: 'up', change: '12.22%' },
        { title: 'Annual Recurring Revenue', value: "Ksh 600,000", direction: 'up', change: '5.21%' },
        { title: 'Average Revenue Per User', value: "Ksh 63,000", direction: 'up', change: '11.27%' },
        { title: 'Customer Retention Rate', value: "13.20%", direction: 'down', change: '33.48%' },
        { title: 'Customer Churn Rate', value: "43.33%", direction: 'up', change: '30%' },
        { title: 'Customer Lifetime Value', value: "Ksh 122,000", direction: 'down', change: '5.98%' },
    ],
    '1m': [
        { title: 'Total Transaction Value', value: "Ksh 179,000", direction: 'down', change: '33.43%' },
        { title: 'Total Revenue', value: "Ksh 455,000", direction: 'up', change: '10%' },
        { title: 'Effective Commission Rate', value: "13.20%", direction: 'up', change: '9.49%' },
        { title: 'Revenue Growth Rate', value: "12.89%", direction: 'up', change: '23.22%' },
        { title: 'Annual Recurring Revenue', value: "Ksh 900,000", direction: 'up', change: '8.21%' },
        { title: 'Average Revenue Per User', value: "Ksh 113,980", direction: 'up', change: '1.27%' },
        { title: 'Customer Retention Rate', value: "13.20%", direction: 'up', change: '3.48%' },
        { title: 'Customer Churn Rate', value: "14.33%", direction: 'down', change: '10%' },
        { title: 'Customer Lifetime Value', value: "Ksh 233,760", direction: 'up', change: '5.98%' },
    ],
    '1y': [
        { title: 'Total Transaction Value', value: "Ksh 330,000", direction: 'up', change: '50%' },
        { title: 'Total Revenue', value: "Ksh 1,300,000", direction: 'up', change: '20%' },
        { title: 'Effective Commission Rate', value: "23.20%", direction: 'down', change: '5.49%' },
        { title: 'Revenue Growth Rate', value: "12.89%", direction: 'up', change: '30.22%' },
        { title: 'Annual Recurring Revenue', value: "Ksh 600,000", direction: 'up', change: '5.21%' },
        { title: 'Average Revenue Per User', value: "Ksh 18,000", direction: 'down', change: '11.27%' },
        { title: 'Customer Retention Rate', value: "63.20%", direction: 'up', change: '33.48%' },
        { title: 'Customer Churn Rate', value: "43.33%", direction: 'up', change: '30%' },
        { title: 'Customer Lifetime Value', value: "Ksh 60,000", direction: 'up', change: '5.98%' },
    ],
    '5y': [
        { title: 'Total Transaction Value', value: "Ksh 2,600,000", direction: 'up', change: '30%' },
        { title: 'Total Revenue', value: "Ksh 20,340,789", direction: 'up', change: '40%' },
        { title: 'Effective Commission Rate', value: "43.20%", direction: 'up', change: '18.49%' },
        { title: 'Revenue Growth Rate', value: "12.89%", direction: 'down', change: '10.22%' },
        { title: 'Annual Recurring Revenue', value: "Ksh 6,600,000", direction: 'down', change: '15.21%' },
        { title: 'Average Revenue Per User', value: "Ksh 300,000", direction: 'up', change: '31.27%' },
        { title: 'Customer Retention Rate', value: "21.20%", direction: 'up', change: '13.48%' },
        { title: 'Customer Churn Rate', value: "8.33%", direction: 'down', change: '2.04%' },
        { title: 'Customer Lifetime Value', value: "Ksh 893,860", direction: 'up', change: '15.98%' },
    ]
};

const builderData = ["Fundis", "Professionals", "Contractors", "Hardware"];

const managementData = ["Managed by JaGedo", "Managed by Self"];

const COLORS = ["#36a2eb", "#ff6384", "#9966ff", "#ff9f40", "#4caf50"];

const parseData = (data) =>
  data?.map((item) => ({
    ...item,
    value: Number(item.value.toString().replace(/,/g, "")),
  })) || [];

// const timePeriods = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
// ];

// const generateDummyData = (range) => {
//   const now = new Date();
//   const result = [];

//   switch (range) {
//     case '24h':
//       for (let i = 0; i < 24; i++) {
//         result.push({
//           name: `${i}:00`,
//         //   value: Math.floor(Math.random() * 100) + 100,
//         });
//       }
//       break;
//     case '1w':
//       for (let i = 6; i >= 0; i--) {
//         const date = new Date(now);
//         date.setDate(now.getDate() - i);
//         result.push({
//           name: date.toLocaleDateString('en-US', { weekday: 'short' }),
//         //   value: Math.floor(Math.random() * 100) + 150,
//         });
//       }
//       break;
//     case '1m':
//       for (let i = 29; i >= 0; i--) {
//         const date = new Date(now);
//         date.setDate(now.getDate() - i);
//         result.push({
//           name: date.getDate().toString(),
//         //   value: Math.floor(Math.random() * 100) + 200,
//         });
//       }
//       break;
//     case '1y':
//       for (let i = 11; i >= 0; i--) {
//         const date = new Date(now);
//         date.setMonth(now.getMonth() - i);
//         result.push({
//           name: date.toLocaleString('default', { month: 'short' }),
//         //   value: Math.floor(Math.random() * 100) + 300,
//         });
//       }
//       break;
//     case '5y':
//       for (let i = 4; i >= 0; i--) {
//         const year = now.getFullYear() - i;
//         result.push({
//           name: `${year}`,
//         //   value: Math.floor(Math.random() * 100) + 400,
//         });
//       }
//       break;
//     case 'To Date':
//     default:
//       for (let i = 60; i >= 0; i--) {
//         const date = new Date(now);
//         date.setDate(now.getDate() - i);
//         result.push({
//           name: `${date.getMonth() + 1}/${date.getDate()}`,
//         //   value: Math.floor(Math.random() * 100) + 250,
//         });
//       }
//       break;
//   }

//   return result;
// };


const SalesAnalyticsDashboard = () => {
    
    const navigate = useNavigate();

    const [selected, setSelected] = useState('To Date');
    const metricsData = metrics[selected];

    const [chartData, setChartData] = useState([]);

    const revenueByCounty = parseData(revenueData);

    const builders = useMemo(() => {
        return builderData.map((item) => ({
            name: item,
            value: Math.floor(Math.random() * 100) + 1,
        }));
    }, []);

    const management = useMemo(() => {
        return managementData.map((item) => ({
            name: item,
            value: Math.floor(Math.random() * 100) + 1,
        }));
    }, []);

    const generateTimeLabels = (filter) => {
    const now = new Date();

        switch (filter) {
            case "24h":
                return Array.from({ length: 24 }, (_, i) => `${i}:00`);
            case "1w":
                return Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
            case "1m":
                return Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
            case "1y":
                return Array.from({ length: 12 }, (_, i) => new Date(now.getFullYear(), i).toLocaleString('default', { month: 'short' }));
            case "5y":
                return Array.from({ length: 5 }, (_, i) => `${now.getFullYear() - 4 + i}`);
            case "To Date":
                return Array.from({ length: 5 }, (_, i) => `${now.getFullYear() - 4 + i}`);
            default:
            return Array.from({ length: 10 }, (_, i) => `Point ${i + 1}`);
        }
    };


    const generateLineData = (labels) => {
        let mjBase = 5;
        let msBase = 3;

        return labels.map((label) => {
            const mjGrowth = Math.floor(Math.random() * 20) + 10; // random growth between 10-30
            const msGrowth = Math.floor(Math.random() * 15) + 5;  // random growth between 5-20

            mjBase += mjGrowth;
            msBase += msGrowth;

            return {
            name: label,
            MJ: mjBase,
            MS: msBase,
            };
        });
    };

    useEffect(() => {
        const toastId = toast.loading(`Loading data for ${selected}...`);

        setTimeout(() => {
            const newData = generateLineData(labels);
            setChartData(newData);
            toast.success(`${selected} data loaded`, { id: toastId });
        }, 800);

        const labels = generateTimeLabels(selected);
        const data = generateLineData(labels);
        setChartData(data);
    }, [selected]);

   const handleNavigation = (indexOfItem) => {
        if (indexOfItem === 0 || indexOfItem === 1 || indexOfItem === 2) {
            navigate("/admin-sales-table")
        } else {
            return null;
        }
    }

    return (
        <div className="flex">
            <DataAnalyticsSidebar />
            <AdminNavigationBar />

            <main className="flex-1 ml-64 mt-20 p-6 space-y-6 overflow-y-auto bg-gray-100 text-gray-800 min-h-screen">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Analytics - Sales</h2>
                    <span>12/12/25</span>
                </div>

                {/* Date Filters */}
                <div className="flex space-x-4 items-center my-6">
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

                {/* Line Chart */}
                <h3 className="text-lg font-semibold mb-4">Sales Performance</h3>
                <div className="w-full my-6">
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={chartData} margin={{ top: 20, right: 50, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend
                            formatter={(value) => {
                                if (value === "MJ") return "□ Managed by JaGedo";
                                if (value === "MS") return "✕ Managed by Self";
                                return value;
                            }}
                            />
                            <Line
                            type="monotone"
                            dataKey="MJ"
                            stroke="#8884d8"
                            strokeDasharray="6 6"
                            dot={false}
                            />
                            <Line
                            type="monotone"
                            dataKey="MS"
                            stroke="#82ca9d"
                            strokeDasharray="4 4"
                            dot={{ stroke: '#000', strokeWidth: 2, r: 2 }} // keeps dots light
                            >
                            {/* X Label for each point */}
                            <LabelList
                                dataKey="MS"
                                content={({ x, y }) => (
                                <text x={x} y={y} dy={-6} textAnchor="middle" fill="#000">
                                    ✕
                                </text>
                                )}
                            />
                            </Line>
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="space-y-6">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {metricsData.map((metric, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 cursor-pointer"
                            onClick={() => handleNavigation(idx)}
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

                    {/* Builders and Management Data */}
                    <div className="flex w-full items-center px-4 mt-20 justify-around">
                        <PieChart width={400} height={200}>
                            <Pie
                                data={builders}
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
                                    {builders[index].name + " (" + (builders[index].value * 100 / builders.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                                </text>
                                );
                            }}
                            labelLine={false}
                            >
                                {builders.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>

                        <PieChart width={400} height={200}>
                            <Pie
                                data={management}
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
                                    {management[index].name + " (" + (management[index].value * 100 / management.reduce((acc, cur) => acc + cur.value, 0)).toFixed(0) + "%)"}
                                </text>
                                );
                            }}
                            labelLine={false}
                            >
                                {management.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>

                {/* Revenue by County */}
                {/* Bar Chart */}
                <h3 className="text-lg font-semibold mb-4 mt-20">Revenue by county</h3>
                <div className="overflow-auto border border-gray-500 rounded-md shadow-sm py-4 bg-white">
                    <div className="scroll-auto min-w-[1800px]">
                        <ResponsiveContainer width="100%" height={500}>
                            <BarChart 
                                data={revenueByCounty} 
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
                                <Bar dataKey="value" fill="#36a2eb">
                                    {revenueByCounty.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>


            </main>
        </div>
    )
};

export default SalesAnalyticsDashboard;