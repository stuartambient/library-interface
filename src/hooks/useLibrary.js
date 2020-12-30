import { useEffect, useState } from 'react';
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
        console.log(res.data.count.n);
        setEntries(res.data.documents);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    if (!entries) {
      getData();
    }
  });
  return { entries };
};

export default useLibrary;
