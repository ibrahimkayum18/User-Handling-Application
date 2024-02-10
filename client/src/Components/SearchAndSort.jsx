import { useState } from "react";

//Props---handleSearch and handleSort
const SearchAndSort = ({setSearchQuery, setSortBy, searchQuery, sortBy}) => {
  
  // console.log(`search: ${searchQuery} and Sort By ${sortBy}`);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // handleSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // handleSort(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center mb-8 px-5 justify-between">
      <div className="flex-1 md:mr-4 mb-2 md:mb-0">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Sort By</option>
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
          <option value="company">Sort by Company Name</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndSort;