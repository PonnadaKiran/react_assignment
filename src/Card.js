import React, { useState } from 'react';

export default function Card({ data }){
  const [selected, setSelected] = useState(null);
  const [isShowing, setIsShowing] = useState(false);

  const toggleDetails = () => {
    setSelected(data);
    setIsShowing(!isShowing);
  };

  return (
    <div className="bg-white p-4 m-2 rounded-md">
      <div className="flex justify-between items-center">
        <div className="w-1/4">{data.company.name}</div>
        <div className="w-1/4">
          <h3 className="font-semibold">CONTACT</h3>
          <p>{data.name}</p>
        </div>
        <div className="w-1/4">
          <h3 className="font-semibold">CITY</h3>
          <p>{data.address.city}</p>
        </div>
        <div className="w-1/4">
          <h3 className="font-semibold">WEBSITE</h3>
          <p>{data.website}</p>
        </div>
        <button
          className="bg-red-500 text-white rounded-full px-3 py-1 cursor-pointer w-auto whitespace-nowrap"
          onClick={toggleDetails}
        >
          {isShowing ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {isShowing && selected?.id === data.id && (
        <div className="bg-white shadow-md p-4 rounded-md mt-4">
          <div style={{ marginBottom: '20px' }}>
            <h4 className="text-lg font-semibold">Description</h4>
            <p>{data.company.catchPhrase} {data.company.bs}</p>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <h4 className="text-lg font-semibold">Contact Person</h4>
              <p>{data.name}</p>
              <h4 className="text-lg font-semibold">Username</h4>
              <p>{data.username}</p>
              <h4 className="text-lg font-semibold">Email</h4>
              <p>{data.email}</p>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p>{data.phone}</p>
            </div>
            <div className="w-1/2">
              <h4 className="text-lg font-semibold">Address</h4>
              <p>{data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}</p>
              <h4 className="text-lg font-semibold">City</h4>
              <p>{data.address.city}</p>
              <h4 className="text-lg font-semibold">Location</h4>
              <p>latitude: {data.address.geo.lat} & longitude: {data.address.geo.lng}</p>
              <h4 className="text-lg font-semibold">Website</h4>
              <p>{data.website}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


