"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";

import type { Office } from "@/lib/site-data";

type Props = {
  offices: Office[];
  label: string;
};

export function OfficeMap({ offices, label }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const icon = L.divIcon({
      className: "",
      html: '<span class="office-marker"></span>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });

    const bounds: [number, number][] = [];

    offices.forEach((office) => {
      bounds.push(office.coords);
      L.marker(office.coords, { icon })
        .addTo(map)
        .bindPopup(
          `<div class="office-popup"><strong>${office.role}</strong><span>${office.city}</span><span>${office.address}</span></div>`
        );
    });

    if (bounds.length === 1) {
      map.setView(bounds[0], 11);
    } else {
      map.fitBounds(bounds, { padding: [36, 36] });
    }

    return () => {
      map.remove();
    };
  }, [offices]);

  return <div ref={mapRef} className="office-map" aria-label={label} />;
}
