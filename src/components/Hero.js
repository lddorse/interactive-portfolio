import { Parallax } from "react-scroll-parallax"; // Import Parallax
import Image from "next/image"; // Import Next.js Image
import styles from "../styles/hero.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      {/* Background Image */}
      <Image
        src="/images/e2.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority // Ensures it loads fast
        className={styles.heroImage}
      />

      {/* Parallax Logo filling the screen */}
      <Parallax speed={-20} className={styles.parallaxLogo}>
        <Image
          src="/images/elowide.png"
          alt="Elo Goodington Logo"
          layout="intrinsic"
          width={800} // Adjust for best fit
          height={400} // Adjust for best fit
          className={styles.fullscreenLogo}
        />
      </Parallax>
    </div>
  );
}
