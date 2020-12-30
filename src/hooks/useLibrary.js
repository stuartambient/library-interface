import { useEffect, useState } from 'react';
import Axios from 'axios';

const useLibrary = type => {
  const [entries, setEntries] = useState(null);
  const [getLocations, setGetter] = useState(false);
  const [locations, setLocations] = useState(null);

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

  useEffect(() => {
    const getLocations = async () => {
      try {
        const res = await Axios(
          `http://localhost:3001/api/v1/library/music/getLocations`
        );
        if (res) console.log('locations: ', res);
      } catch (error) {
        throw new Error(error.message);
      }
    };
  });
  return { entries, locations, setGetter };
};
export default useLibrary;
