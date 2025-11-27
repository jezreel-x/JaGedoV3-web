import { useState } from "react";

const LocationSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <label htmlFor="location-search" className="block text-gray-700 font-semibold mb-1">
        Search Location:
      </label>
      <input
        id="location-search"
        type="text"
        placeholder="Type a city or town..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
      />
    </div>
  );
};

export default LocationSearch;
