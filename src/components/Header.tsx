import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-3xl font-bold">🌍 Explorador de Lugares</h1>
      </div>
    </header>
  );
};

export default Header;
