import { useState } from "react";

const images = [
  "/miriam-and-jeo-pics/DSC05250.jpg",
  "/miriam-and-jeo-pics/DSC05282.jpg",
  "/miriam-and-jeo-pics/DSC05349.jpg",
  "/miriam-and-jeo-pics/DSC05425.jpg",
  "/miriam-and-jeo-pics/DSC05457.jpg",
  "/miriam-and-jeo-pics/DSC05511.jpg",
  "/miriam-and-jeo-pics/DSC05522.jpg",
  "/miriam-and-jeo-pics/DSC05534.jpg",
  "/miriam-and-jeo-pics/DSC05584.jpg",
  "/miriam-and-jeo-pics/DSC05694.jpg",
  "/miriam-and-jeo-pics/DSC05806.jpg",
  "/miriam-and-jeo-pics/main-1.jpg",
  "/miriam-and-jeo-pics/main-2.jpg",
  "/miriam-and-jeo-pics/main-3.jpg"
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="gallery">
      <h1 className="gallery-header">Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className="gallery-square"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            onClick={() => setActiveImage(src)}
          />
        ))}
      </div>

      {activeImage && (
        <div className="overlay" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Enlarged view" className="overlay-img" />
        </div>
      )}
    </div>
  );
}
