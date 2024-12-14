import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DistanceCalculator from './components/DistanceCalculator';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Calculadora de Distancia</h1>
        <DistanceCalculator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
