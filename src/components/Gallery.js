import { useState } from "react";
import Masonry from "react-masonry-css";
import styles from "../styles/gallery.module.css";
import Image from "next/image";

const allImages = [
  { src: "/images/img1.jpg", title: "Artwork 1", description: "A vibrant exploration of color and texture.", price: "$250" },
  { src: "/images/img2.jpg", title: "Artwork 2", description: "Inspired by urban landscapes.", price: "$300" },
  { src: "/images/img3.jpg", title: "Artwork 3", description: "A deep dive into surrealism.", price: "$400" },
  { src: "/images/img4.jpg", title: "Artwork 4", description: "Minimalist approach with bold contrasts.", price: "$500" },
  { src: "/images/img5.jpg", title: "Artwork 5", description: "Blending digital and traditional mediums.", price: "$600" }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.galleryContainer}>
      <Masonry
        breakpointCols={{ default: 3, 768: 2, 480: 1 }}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {allImages.map((image, index) => (
          <div key={index} className={styles.imageWrapper} onClick={() => setSelectedImage(image)}>
            <Image src={image.src} alt={image.title} width={300} height={400} className={styles.galleryImage} />
          </div>
        ))}
      </Masonry>

      {/* Pop-Up Modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage.src} alt={selectedImage.title} width={600} height={800} className={styles.modalImage} />
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <p className={styles.priceTag}>{selectedImage.price}</p>

            <div className={styles.modalButtons}>
              <button className={styles.commentButton}>💬 Comment</button>
              <button className={styles.audioButton}>🎧 Hear</button>
              <button className={styles.purchaseButton}>🛒 Purchase</button>
            </div>

            <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>✖ Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
