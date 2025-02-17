import Masonry from "react-masonry-css";
import styles from "../styles/gallery.module.css";
import Image from "next/image";

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
]; // Ensure these images exist in /public/images/

export default function Gallery() {
  return (
    <Masonry
      breakpointCols={{ default: 3, 768: 2, 480: 1 }} // Responsive column adjustments
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {allImages.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image 
            src={src} 
            alt={`Gallery Image ${index}`} 
            width={300} // Adjust based on your image size
            height={400} // Adjust based on your image size
            layout="intrinsic" // Ensures image maintains aspect ratio
            priority={index < 3} // Prioritize first few images for faster load
            className={styles.galleryImage}
          />
          <div className={styles.overlay}>
            <button className={styles.likeButton}>❤️</button>
            <button className={styles.commentButton}>💬</button>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
