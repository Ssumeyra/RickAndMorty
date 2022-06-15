import axios from 'axios';
export const baseUrl = 'https://rickandmortyapi.com/api/';

export const getEpisodes = async (page) => {
    console.log("page",page);
    const configurationObject = {
      method: 'get',
      url: `${baseUrl}/episode?page=${page}`,
    };
    const response = await axios(configurationObject);
    console.log(response.data);
    return response.data;
  };
  export const getEpisode = async (id) => {
      const configurationObject = {
        method: 'get',
        url: `${baseUrl}/episode/${id}`,
      };
      const response = await axios(configurationObject);
      console.log(response.data);
      return response.data;
    };
    export const getCharacterDetail = async (id) => {
        const configurationObject = {
          method: 'get',
          url: `${baseUrl}/character/${id}`,
        };
        const response = await axios(configurationObject);
        console.log(response.data);
        return response.data;
      };