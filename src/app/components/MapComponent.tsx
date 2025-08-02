// src/components/MapComponent.tsx
"use client"; // Esta diretiva é FUNDAMENTAL para que funcione no navegador

import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// Defina o tamanho padrão do mapa
const containerStyle = {
  width: "90%",
  height: "400px", // Ajuste a altura conforme sua necessidade
};

// Defina a localização central inicial do mapa
// Exemplo: Coordenadas da Tipan (você precisará ajustar para o endereço real)
const center = {
  lat: -23.56805320096787, // Latitude de São Paulo (ajuste para o seu local)
  lng: -46.69369933020885, // Longitude de São Paulo (ajuste para o seu local)
};

interface MapComponentProps {
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    // libraries: ['places'] // Adicione bibliotecas adicionais se precisar (ex: 'places' para autocompletar)
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // Você pode fazer algo com a instância do mapa aqui, se necessário
    // Por exemplo, ajustar o zoom, adicionar marcadores, etc.
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds); // Ajusta o mapa para o centro inicial
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  if (loadError) return <div>Erro ao carregar o mapa: {loadError.message}</div>;
  if (!isLoaded) return <div>Carregando Mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15} // Nível de zoom inicial
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        // Opcional: desabilita controles padrão para um mapa mais limpo
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
    ></GoogleMap>
  );
};

export default MapComponent;
