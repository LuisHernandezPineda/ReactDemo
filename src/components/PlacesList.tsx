import React, { useState, useEffect } from 'react';
import { searchCities } from '../utils/api';

type City = {
  id: string;
  name: string;
  country: string;
  region: string;
};

const PlacesList: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const results = await searchCities('New'); // Busca ciudades que comiencen con "New"
        setCities(results);
      } catch (error) {
        console.error('Error al cargar ciudades:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  if (loading) return <p className="text-center">Cargando ciudades...</p>;

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md p-6 rounded-lg transition-colors">
      <h2 className="text-2xl font-semibold mb-4">Ciudades Populares</h2>
      <ul className="space-y-4">
        {cities.map((city) => (
          <li key={city.id} className="flex items-center space-x-3">
            <div>
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400">
                {city.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {city.region}, {city.country}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesList;
