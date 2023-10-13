import React from 'react';

export default function PageButtons({ currentPage, pageNumbers, onPageChange }){
  return (
    <div className="flex justify-center items-center mt-8">
      <ul className="flex space-x-2">
        <li
          className="px-3 py-2 cursor-pointer"
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<"}
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${
              number === currentPage ? 'bg-red-500 text-white' : 'bg-white'
            } px-4 py-2`}
          >
            {number}
          </li>
        ))}
        <li
          className="px-3 py-2 cursor-pointer"
          onClick={() => onPageChange(currentPage + 1)}
        >
          {">"}
        </li>
      </ul>
    </div>
  );
};


