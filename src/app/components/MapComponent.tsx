"use client";

import React, { useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// Defina o tamanho padrão do mapa
const containerStyle = {
  width: "90%",
  height: "400px",
};

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
  });

  // const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  if (loadError) return <div>Erro ao carregar o mapa: {loadError.message}</div>;
  if (!isLoaded) return <div>Carregando Mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent;
