import React, { useState } from 'react';
import { calculateDistance } from '../utils/api';

const DistanceCalculator: React.FC = () => {
  const [originId, setOriginId] = useState('Q60'); // Place ID de Origen
  const [destinationId, setDestinationId] = useState('Q61'); // Place ID de Destino
  const [distance, setDistance] = useState<number | null>(null); // Almacena la distancia como número
  const [error, setError] = useState<string | null>(null); // Maneja errores

  const handleCalculate = async () => {
    setError(null);
    setDistance(null);

    if (!originId || !destinationId) {
      setError('Por favor, ingresa ambos Place IDs.');
      return;
    }

    try {
      const result = await calculateDistance(originId, destinationId);
      setDistance(result.data); // La distancia está en el campo "data"
    } catch (err) {
      setError('Error al calcular la distancia. Revisa los Place IDs.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md p-6 rounded-lg transition-colors">
      <h2 className="text-2xl font-semibold mb-4">Calculadora de Distancia</h2>

      {/* Inputs para Place IDs */}
      <input
        type="text"
        placeholder="Place ID de Origen"
        value={originId}
        onChange={(e) => setOriginId(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
      />

      <input
        type="text"
        placeholder="Place ID de Destino"
        value={destinationId}
        onChange={(e) => setDestinationId(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
      />

      {/* Botón para calcular */}
      <button
        onClick={handleCalculate}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
      >
        Calcular Distancia
      </button>

      {/* Resultados o errores */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {distance !== null && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold">Resultados:</h3>
          <p className="text-2xl text-green-500">{distance} km</p> {/* Muestra la distancia */}
        </div>
      )}
    </div>
  );
};

export default DistanceCalculator;
