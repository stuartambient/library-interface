import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const useLibrary = type => {
  const [category, setCategory] = useState(undefined);
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Axios(
          `http://localhost:3001/api/v1/library/${type}/getTitles`
        );

        setEntries(res.data.documents);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getData();
  });
  return { entries };
};

export default useLibrary;
