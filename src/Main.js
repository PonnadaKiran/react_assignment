import React, { useState } from 'react';
import Card from './Card';
import PageButtons from './PageButtons';

export default function Main({ data, pages }){
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const pageNumbers = [];

  const startIndex = (currentPage - 1) * pages;
  const endIndex = startIndex + pages;

  for (let i = 1; i <= Math.ceil(data.length / pages); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageNumbers.length) {
      setCurrentPage(newPage);
    }
  };

  const filteredData = data.filter((item) =>
    item.company.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="mb-3 ml-3 mt-1 flex items-center">
        <label className="mr-2 text-gray-700 font-medium">Company Name:</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md p-2 pl-3 pr-3 m-3 focus:outline-none focus:ring focus:ring-red-500"
        />
      </div>


      {filteredData.slice(startIndex, endIndex).map((data) => (
        <div
          key={data.id}
          className="border border-gray-300 p-4 m-2 rounded-md shadow-md"
        >
          <Card data={data} />
        </div>
      ))}

      <PageButtons
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        onPageChange={handlePageChange}
      />
    </div>
  );
};




