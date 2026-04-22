"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

import type { VehicleImage } from "@/lib/site-data";

type Vehicle = {
  title: string;
  text: string;
  image: VehicleImage;
  gallery: VehicleImage[];
};

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  vehicles: Vehicle[];
  viewPhotoLabel: string;
  summary: string;
  closeLabel: string;
};

export function FleetGallery({
  eyebrow,
  title,
  lead,
  vehicles,
  viewPhotoLabel,
  summary,
  closeLabel,
}: Props) {
  const [activeVehicleIndex, setActiveVehicleIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const lastWheelAt = useRef(0);

  const activeGallery = useMemo(() => {
    if (activeVehicleIndex === null) return null;
    return vehicles[activeVehicleIndex];
  }, [activeVehicleIndex, vehicles]);

  const openGallery = (vehicleIndex: number) => {
    setActiveVehicleIndex(vehicleIndex);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setActiveVehicleIndex(null);
    setActiveImageIndex(0);
    document.body.style.overflow = "";
  };

  const showNextImage = () => {
    if (!activeGallery) return;
    setActiveImageIndex((current) => (current + 1) % activeGallery.gallery.length);
  };

  const showPreviousImage = () => {
    if (!activeGallery) return;
    setActiveImageIndex((current) => (current - 1 + activeGallery.gallery.length) % activeGallery.gallery.length);
  };

  return (
    <>
      <section className="slide slide-fleet" id="fleet">
        <div className="slide-inner">
          <div className="slide-intro">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="section-title">{title}</h1>
            <p className="lead">{lead}</p>
          </div>

          <div className="vehicle-grid">
            {vehicles.map((vehicle, vehicleIndex) => (
              <article key={vehicle.title} className="vehicle-card">
                <button
                  className="vehicle-media"
                  type="button"
                  aria-label={viewPhotoLabel}
                  onClick={() => openGallery(vehicleIndex)}
                >
                  <Image
                    src={vehicle.image.src}
                    alt={vehicle.image.alt}
                    width={960}
                    height={640}
                  />
                </button>
                <span className="service-index">{String(vehicleIndex + 1).padStart(2, "0")}</span>
                <h3>{vehicle.title}</h3>
                <p>{vehicle.text}</p>
                <button className="vehicle-photo-trigger" type="button" onClick={() => openGallery(vehicleIndex)}>
                  {viewPhotoLabel}
                </button>
              </article>
            ))}
          </div>

          <div className="fleet-summary">
            <strong>{summary}</strong>
          </div>
        </div>
      </section>

      {activeGallery ? (
        <div className="vehicle-lightbox">
          <button className="vehicle-lightbox-backdrop" type="button" onClick={closeGallery} aria-label={closeLabel} />
          <div className="vehicle-lightbox-dialog" role="dialog" aria-modal="true" aria-label={activeGallery.title}>
            <button className="vehicle-lightbox-close" type="button" onClick={closeGallery} aria-label={closeLabel}>
              ×
            </button>
            <div
              className="vehicle-lightbox-image-shell"
              tabIndex={0}
              onWheel={(event) => {
                const now = Date.now();
                if (now - lastWheelAt.current < 180) return;
                if (Math.abs(event.deltaY) < 6) return;

                event.preventDefault();
                lastWheelAt.current = now;
                if (event.deltaY > 0) {
                  showNextImage();
                  return;
                }
                showPreviousImage();
              }}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
                const deltaX = touchEndX - touchStartX.current;
                touchStartX.current = null;

                if (Math.abs(deltaX) < 40) return;
                if (deltaX < 0) {
                  showNextImage();
                  return;
                }
                showPreviousImage();
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  showNextImage();
                  return;
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  showPreviousImage();
                }
              }}
            >
              <Image
                className="vehicle-lightbox-image"
                src={activeGallery.gallery[activeImageIndex].src}
                alt={activeGallery.gallery[activeImageIndex].alt}
                width={1600}
                height={1000}
              />
            </div>
            <div className="vehicle-lightbox-dots" aria-label="Gallery pagination">
              {activeGallery.gallery.map((image, index) => (
                <button
                  key={`dot-${image.src}-${index}`}
                  type="button"
                  className={`vehicle-lightbox-dot${index === activeImageIndex ? " is-active" : ""}`}
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
            <div className="vehicle-lightbox-thumbs">
              {activeGallery.gallery.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  className={`vehicle-lightbox-thumb${index === activeImageIndex ? " is-active" : ""}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image src={image.src} alt={image.alt} width={240} height={160} />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
