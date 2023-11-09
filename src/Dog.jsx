import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function Dog() {
  const apiUrl = "https://api.thedogapi.com/v1/images/search";
  const { data, error } = useSWR(apiUrl, fetcher);

  if (error) {
    return <div>Error al cargar la imagen del perro.</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  const imageUrl = data[0].url;

  return (
    <div>
      <h2>Imagen de un perro</h2>
      <img src={imageUrl} alt="Perro" />
    </div>
  );
}
