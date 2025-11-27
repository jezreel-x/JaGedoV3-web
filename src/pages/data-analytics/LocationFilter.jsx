import { useState } from "react";
const pieData = [
    { name: "KE", value: 3 },
    { name: "UG", value: 5 },
    { name: "NG", value: 5 },
    { name: "CN", value: 2 },
    { name: "SA", value: 3 },
    { name: "US", value: 2 },
    { name: "AUS", value: 1 },
    { name: "UK", value: 1 },
    { name: "GER", value: 1 }
];

const LocationFilter = () => {
    const [selectedLocation, setSelectedLocation] = useState("Kenya");

    return(
        <div className="ml-auto">
            <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                defaultValue="default" 
                className='w-60 px-4 py-3 border border-gray-500 rounded-lg'
            >
                <option value="default" disabled>Filter based on Location</option>
                {pieData.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
            ))}
            </select>
        </div>
    );
};

export default LocationFilter;