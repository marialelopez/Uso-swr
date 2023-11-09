import React from 'react';
import { Dog } from './Dog';

function App() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Imágenes de Perros</h1>
      <Dog />

      <button onClick={handleReload}>Cargar otra imagen</button>
    </div>
  );
}

export default App;

