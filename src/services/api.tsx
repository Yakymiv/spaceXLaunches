import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

export const getLaunchesPage = async (options: object) => {
  const response = await api.post('/launches/query', options);
  return response.data;
};

export const getRockets = async () => {
  const response = await api.get('/rockets');
  return response.data;
};

export const getLaunchpads = async () => {
  const response = await api.get('/launchpads');
  return response.data;
};

export const getLaunch = async (id: string) => {
  const response = await api.get(`/launches/${id}`);
  return response.data;
};

export const getRocketName = async (id: string) => {
  const response = await api.get(`/rockets/${id}`);
  return response.data.name;
};
