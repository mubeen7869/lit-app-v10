import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
 
const Employee_Search = () => {
  const [searchCriteria, setSearchCriteria] = useState("");
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
 
  const handleInputChange = (e) => {
    setSearchCriteria(e.target.value);
  };
 
  const handleSearch = () => {
    // Call your API to fetch data based on criteria
 
    // For demonstration purposes, using static data
 
    const data = [
      { id: 1, name: "Nobel", phone: "123457890" },
 
      { id: 2, name: "Vasanth", phone: "9879803210" },
 
      { id: 3, name: "Kusuma", phone: "9876543210" },
 
      { id: 4, name: "Niharika", phone: "9871233210" },
 
      { id: 5, name: "Priyanka", phone: "9876543210" },
 
      // Add more data as needed
    ];
 
    // Filter data based on the provided criteria
 
    const filteredData = data.filter(
      (item) =>
        !searchCriteria ||
        item.id.toString().includes(searchCriteria) ||
        item.name.toLowerCase().includes(searchCriteria.toLowerCase()) ||
        item.phone.includes(searchCriteria)
    );
 
    setSearchResults(filteredData);
  };
 
  return (
    <div className="search-page-container">
      <h1>Data Search and Display</h1>
 
      <div className="search-bar-container">
      <div className="search-input-container">
        <input
          type="text"
          value={searchCriteria}
          onChange={handleInputChange}
          placeholder="Enter ID, Name, or Phone Number"
        />
 
        <button onClick={handleSearch}><IoSearch/></button>
      </div>
      </div>
      {searchResults.length > 0 && (
      <table className="result-table">
        <thead>
          <tr>
            <th>ID</th>
 
            <th>Name</th>
 
            <th>Phone Number</th>
          </tr>
        </thead>
 
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
 
              <td>{item.name}</td>
 
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
 
export default Employee_Search;
 