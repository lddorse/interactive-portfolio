import { useState } from "react";
import styles from "../styles/gridsections.module.css";

export default function GridSections() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: "origin",
      label: "Origin",
      content: (
        <div>
          <h2></h2>
          <p>
          Elo Goodington was born out of necessity—an identity forged in a crowded place where individuality had to be claimed. In that space, everyone had to carve out their own place, and Elo became mine.<br /><br />

From the start, Elo was more than just a name—it was a creative force, a pursuit of artistry across mediums. While studying Art Technology, I explored the intersections of digital and physical art, mastering a range of disciplines: audio production, video editing, 2D and 3D design, digital illustration, printmaking, stained glass, and street art. Creativity was never confined to one form—it was an evolving process, constantly shifting between mediums, techniques, and technologies.<br /><br />

Street art played a defining role in shaping Elo’s aesthetic. What started as an underground creative outlet became a visual language, a way to interact with space and culture. Over time, Elo Goodington’s work found its way from the streets to gallery walls, featured in three group art shows and three independent exhibitions.<br /><br />

Today, Elo Goodington continues as an ever-expanding creative identity—one that blends art, technology, and immersive experiences. Whether through visual storytelling, interactive media, or multimedia installations, the goal remains the same: to create work that leaves an impact, that engages, and that resonates beyond the moment.</p>
        </div>
      ),
    },
    {
      id: "evolution",
      label: "Evolution",
      content: (
        <div>
          <h2></h2>
          <p>
          Elo Goodington was born out of necessity—an identity forged in a crowded place where individuality had to be claimed. In that space, everyone had to carve out their own place, and Elo became mine.<br /><br />
</p>
        </div>
      ),
    },
    {
      id: "method",
      label: "Method",
      content: (
        <div>
          <h2></h2>
          <p>
          Elo Goodington was born out of necessity—an identity forged in a crowded place where individuality had to be claimed. In that space, everyone had to carve out their own place, and Elo became mine.<br /><br />
</p>
        </div>
      ),
    },
    {
      id: "impact",
      label: "Impact",
      content: (
        <div>
          <h2></h2>
          <p>
          Elo Goodington was born out of necessity—an identity forged in a crowded place where individuality had to be claimed. In that space, everyone had to carve out their own place, and Elo became mine.<br /><br />
</p>
        </div>
      ),
    },
    {
      id: "shop",
      label: "Shop",
      content: (
        <div>
          <h2>Get in Touch</h2>
          <p>Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
          <form className={styles.contactForm}>
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />

            <label>Email:</label>
            <input type="email" placeholder="Your Email" />

            <label>Message:</label>
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      ),
    },
  ];

  const handleSectionClick = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className={styles.gridContainer}>
      {sections.map(({ id, label, content }) => (
        <div key={id} className={styles.gridItem} id={id}>
          <div
            className={`${styles.section} ${expandedSection === id ? styles.active : ""}`}
            onClick={() => handleSectionClick(id)}
          >
            {label}
          </div>

          {/* Expandable Content Below */}
          <div className={`${styles.expandedContent} ${expandedSection === id ? styles.show : ""}`}>
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}
