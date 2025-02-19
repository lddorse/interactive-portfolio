import { useState, useEffect } from "react";
import styles from "../styles/stickyMenu.module.css";
import Link from "next/link";

export default function StickyMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(true); // Show menu when scrolling down
      } else {
        setIsVisible(false); // Hide menu when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.stickyMenu} ${isVisible ? styles.show : styles.hide}`}>
      <ul>
        <li><Link href="#origin">Origin</Link></li>
        <li><Link href="#evolution">Evolution</Link></li>
        <li><Link href="#mediums">Methods</Link></li>
        <li><Link href="#exhibitions">Impact</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
