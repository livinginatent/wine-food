"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface MapFlyToProps {
  center: LatLngExpression;
  zoom: number;
}

export default function MapFlyTo({ center, zoom }: MapFlyToProps) {
  const map = useMap();
  
  useEffect(() => {
    if (center && map) {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [center, zoom, map]);
  
  return null;
}
