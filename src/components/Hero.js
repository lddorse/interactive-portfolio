import { Parallax } from "react-scroll-parallax"; // Import Parallax
import styles from "../styles/hero.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      {/* Background Image */}
      <img src="/images/bwide.jpg" alt="Hero Background" className={styles.heroImage} />

      {/* Parallax Logo filling the screen */}
      <Parallax speed={-20} className={styles.parallaxLogo}>
        <img src="/images/elowide.png" alt="Elo Goodington Logo" className={styles.fullscreenLogo} />
      </Parallax>
    </div>
  );
}
