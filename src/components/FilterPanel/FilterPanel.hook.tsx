import { useEffect, useState, useCallback } from 'react';
import { getRockets, getLaunchpads } from '../../services/api';

export const useFilterPanel = ({ setQuery, setLaunchesData }: any) => {
  const [rockets, setRockets] = useState([]);
  const [launchpads, setLaunchpads] = useState([]);

  const handleSelectChange = (e: any) => {
    setLaunchesData([]);
    if (e.target.value === '0') {
      return setQuery((prev: any) => {
        if (!prev?.query[e.target.name]) return { ...prev };
        const query = JSON.parse(JSON.stringify(prev.query));
        for (const prop in query) {
          if (prop === e.target.name) {
            delete query[e.target.name];
          }
        }

        return {
          query: {
            ...query,
          },
        };
      });
    }

    setQuery((prev: any) => {
      return {
        query: {
          ...prev.query,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  const fetchRockets = useCallback(async () => {
    const response = await getRockets();
    setRockets(response);
  }, []);

  const fetchLaunchpads = useCallback(async () => {
    const response = await getLaunchpads();
    setLaunchpads(response);
  }, []);

  useEffect(() => {
    fetchRockets();
    fetchLaunchpads();
  }, [fetchRockets, fetchLaunchpads]);

  return { rockets, launchpads, handleSelectChange };
};
