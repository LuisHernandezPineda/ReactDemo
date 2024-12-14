import axios from 'axios';


const API_BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const API_KEY = import.meta.env.VITE_GEODB_API_KEY;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
});

/**
 * Calcula la distancia entre dos lugares
 * @param {string} placeId - ID del lugar de origen
 * @param {string} toPlaceId - ID del lugar de destino
 * @returns {Promise} - Distancia entre los lugares
 */
export const calculateDistance = async (placeId: string, toPlaceId: string) => {
  try {
    const response = await api.get(`/places/${placeId}/distance`, {
      params: { toPlaceId },
    });
    return response.data; // Devuelve la respuesta de la API
  } catch (error) {
    console.error('Error al calcular la distancia:', error);
    throw error;
  }
};
export const searchCities = async (name: string) => {
    try {
      const response = await api.get('/cities', {
        params: {
          namePrefix: name,
          limit: 10, // Opcional: limita los resultados
        },
      });
      return response.data.data; // Devuelve los datos
    } catch (error) {
      console.error('Error al buscar ciudades:', error);
      throw error;
    }
  };
  
