import Masonry from "react-masonry-css";
import styles from "../styles/gallery.module.css";

const allImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img10.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
]; // Replace with actual images

export default function Gallery() {
    return (
      <Masonry
        breakpointCols={{ default: 3, 768: 2, 480: 1 }} // Adjusts columns per screen size
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}
      >
        {allImages.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={src} alt={`Gallery ${index}`} className={styles.galleryImage} />
            <div className={styles.overlay}>
              <button className={styles.likeButton}>❤️</button>
              <button className={styles.commentButton}>💬</button>
            </div>
          </div>
        ))}
      </Masonry>
    );
  }