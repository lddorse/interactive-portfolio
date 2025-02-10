import { useState } from "react";
import Link from "next/link"; // Import Next.js Link component
import styles from "../styles/gridsections.module.css";

export default function GridSections() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (id) => setHovered(id);
  const handleMouseLeave = () => setHovered(null);

  const sections = [
    { id: "projects", label: "Projects", link: "/projects" },
    { id: "about", label: "About", link: "/about" },
    { id: "featured", label: "Featured Work", link: "/featured" },
    { id: "contact", label: "Contact", link: "/contact" },
  ];

  return (
    <div className={styles.gridContainer} id="gridContainer">
      {sections.map(({ id, label, link }) => (
        <Link key={id} href={link} passHref legacyBehavior>
          <a
            className={styles.section}
            id={id}
            style={{
              backgroundColor: hovered === id ? getColor(id) : "black",
              transition: "background-color 0.5s ease-in-out",
            }}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            {label}
          </a>
        </Link>
      ))}
    </div>
  );
}

const getColor = (id) => {
  const colors = {
    projects: "#ff4757",
    about: "#1e90ff",
    featured: "#2ed573",
    contact: "#ffa502",
  };
  return colors[id] || "black";
};
