import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DataAnalyticsSidebar from './DataAnalyticsSidebar';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { toast } from 'react-hot-toast';
import AdminNavigationBar from '../../components/Navigation/AdminNav';

const metrics = {
  'To Date': [
    { title: 'Total Users', value: 2500000, direction: 'up', change: '10%' },
    { title: 'Total Customers', value: 2200000, direction: 'up', change: '20%' },
    { title: 'Total Builders', value: 1400000, direction: 'down', change: '10%' },
    { title: 'Total Requests', value: 2000000, direction: 'down', change: '30%' },
    { title: 'Total Jobs', value: 1000000, direction: 'up', change: '5%' },
    { title: 'Total Orders', value: 1500000, direction: 'up', change: '10%' },
    { title: 'Total Web Traffic', value: 25000000 },
    { title: 'Total Sessions', value: 100000 },
    { title: 'Bounce Rate', value: '—' },
  ],
  '24h': [
    { title: 'Total Users', value: 2750, direction: 'up', change: '10%' },
    { title: 'Total Customers', value: 1200, direction: 'up', change: '20%' },
    { title: 'Total Builders', value: 15000, direction: 'down', change: '10%' },
    { title: 'Total Requests', value: 16000, direction: 'down', change: '30%' },
    { title: 'Total Jobs', value: 5000, direction: 'up', change: '5%' },
    { title: 'Total Orders', value: 1575, direction: 'up', change: '10%' },
    { title: 'Total Web Traffic', value: 20000 },
    { title: 'Total Sessions', value: 0 },
    { title: 'Bounce Rate', value: '—' },
  ],
  '1w': [
    { title: 'Total Users', value: 5550, direction: 'up', change: '10%' },
    { title: 'Total Customers', value: 3200, direction: 'up', change: '20%' },
    { title: 'Total Builders', value: 15900, direction: 'down', change: '10%' },
    { title: 'Total Requests', value: 21000, direction: 'down', change: '30%' },
    { title: 'Total Jobs', value: 3000, direction: 'up', change: '5%' },
    { title: 'Total Orders', value: 1675, direction: 'down', change: '10%' },
    { title: 'Total Web Traffic', value: 21000 },
    { title: 'Total Sessions', value: 5 },
    { title: 'Bounce Rate', value: '—' },
  ],
  '1m': [
    { title: 'Total Users', value: 3750, direction: 'down', change: '10%' },
    { title: 'Total Customers', value: 2200, direction: 'up', change: '20%' },
    { title: 'Total Builders', value: 9000, direction: 'down', change: '10%' },
    { title: 'Total Requests', value: 18000, direction: 'down', change: '30%' },
    { title: 'Total Jobs', value: 9000, direction: 'up', change: '5%' },
    { title: 'Total Orders', value: 2575, direction: 'up', change: '10%' },
    { title: 'Total Web Traffic', value: 10000 },
    { title: 'Total Sessions', value: 20 },
    { title: 'Bounce Rate', value: '—' },
  ],
  '1y': [
    { title: 'Total Users', value: 212750, direction: 'down', change: '10%' },
    { title: 'Total Customers', value: 113200, direction: 'up', change: '20%' },
    { title: 'Total Builders', value: 151000, direction: 'down', change: '10%' },
    { title: 'Total Requests', value: 116000, direction: 'up', change: '30%' },
    { title: 'Total Jobs', value: 55000, direction: 'up', change: '5%' },
    { title: 'Total Orders', value: 11575, direction: 'down', change: '10%' },
    { title: 'Total Web Traffic', value: 27000 },
    { title: 'Total Sessions', value: 900 },
    { title: 'Bounce Rate', value: '—' },
  ]
};

const generateDummyData = (range) => {
  const now = new Date();
  const result = [];

  switch (range) {
    case '24h':
      for (let i = 0; i < 24; i++) {
        result.push({
          name: `${i}:00`,
          value: Math.floor(Math.random() * 100) + 100,
        });
      }
      break;
    case '1w':
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        result.push({
          name: date.toLocaleDateString('en-US', { weekday: 'short' }),
          value: Math.floor(Math.random() * 100) + 150,
        });
      }
      break;
    case '1m':
      for (let i = 29; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        result.push({
          name: date.getDate().toString(),
          value: Math.floor(Math.random() * 100) + 200,
        });
      }
      break;
    case '1y':
      for (let i = 11; i >= 0; i--) {
        const date = new Date(now);
        date.setMonth(now.getMonth() - i);
        result.push({
          name: date.toLocaleString('default', { month: 'short' }),
          value: Math.floor(Math.random() * 100) + 300,
        });
      }
      break;
    case '5y':
      for (let i = 4; i >= 0; i--) {
        const year = now.getFullYear() - i;
        result.push({
          name: `${year}`,
          value: Math.floor(Math.random() * 100) + 400,
        });
      }
      break;
    case 'To Date':
    default:
      for (let i = 60; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        result.push({
          name: `${date.getMonth() + 1}/${date.getDate()}`,
          value: Math.floor(Math.random() * 100) + 250,
        });
      }
      break;
  }

  return result;
};


export default function AnalyticsDashboard() {
  const [selected, setSelected] = useState('24h');
  const [selectedRange, setSelectedRange] = useState('To Date');
  const [dummyChartData, setDummyChartData] = useState(generateDummyData('To Date'));

  const handleFilterChange = (range) => {
    setSelectedRange(range);
    // setDummyChartData(generateDummyData(range));
    const toastId = toast.loading(`Loading data for ${range}...`);

    setTimeout(() => {
      const newData = generateDummyData(range);
      setDummyChartData(newData);
      toast.success(`${range} data loaded`, { id: toastId });
    }, 800);
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <DataAnalyticsSidebar />

      <AdminNavigationBar/>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6 mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Summary</h2>
          {/* Filter Date Tabs */}
          <div className="space-x-2">
            {['To Date', '24h', '1w', '1m', '1y'].map(range => (
              <button
                key={range}
                onClick={() => setSelected(range)}
                className={`px-4 py-2 cursor-pointer rounded-lg 
                  ${selected === range
                  ? 'bg-[rgb(0,0,112)] text-white'
                  : 'hover:text-gray-700 bg-blue-300'}`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {metrics[selected].map((metric, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200 cursor-pointer"
            >
              <h3 className="text-sm font-medium text-gray-500 mb-1">{metric.title}</h3>
              <p className="text-2xl font-semibold">{metric.value}</p>
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

        {/* Chart Section */}
        <div className="mt-10 bg-white rounded-lg shadow p-6">
          <div className="flex space-x-4 items-center mb-6">
            <h3 className="text-lg font-semibold">Traffic Overview</h3>
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
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart 
              data={dummyChartData} 
              animationDuration={800}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              {/* Gradient for smooth fill */}
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0071c5" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#0071c5" stopOpacity={0.2} />
                </linearGradient>
              </defs>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              {/* Filled area under the line */}
              <Area
                type="monotone" // smooth curve
                dataKey="value"
                stroke="#0071c5" // line color
                strokeWidth={2} // line thickness
                fill="url(#colorValue)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
