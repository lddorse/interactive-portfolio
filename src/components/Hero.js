import { Parallax } from "react-scroll-parallax";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Parallax Background 
      <Parallax speed={-20} className={styles.parallaxBackground}>
        <div className={styles.pattern}></div>
      </Parallax>
      */}
      <Parallax speed={-5} scale={[.8, 1.2]}>
  <img src="/pop-art-bg.jpg" alt="Parallax Example" />
</Parallax>

      {/* Masked Text & Logo */}
      <div className={styles.maskedContent}>
        <h1 className={styles.title}></h1>
      </div>
    </section>
  );
}
