import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './Main';

export default function App(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-red-500">Loading Data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 font-bold text-2xl text-center">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="font-sans font-light min-h-screen">
      <Main data={data} pages={3} />
    </div>
  );
};