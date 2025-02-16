import { useState } from "react";
import styles from "../styles/gridsections.module.css";

export default function GridSections() {
  const [expanded, setExpanded] = useState(null);

  const sections = [
    {
      id: "about",
      label: "Elo Goodington",
      content: (
        <div>
          <h2>About Me</h2>
          <p>
          One of the most influential philosophers in the history of Western philosophy. His contributions to metaphysics, epistemology, ethics, and aesthetics have had a profound impact on almost every philosophical movement that followed him.
<br></br>
“What can we know?” The answer, if it can be stated simply, is that our knowledge is constrained to mathematics and the science of the natural, empirical world.
          </p>
          <img src="/images/elo.png" alt="About Me" className={styles.sectionImage} />
        </div>
      ),
    },
    {
      id: "contact",
      label: "Contact",
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

  const handleClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className={styles.gridContainer}>
      {sections.map(({ id, label, content }) => (
        <div key={id} className={styles.gridItem}>
          <div
            className={`${styles.section} ${expanded === id ? styles.active : ""}`}
            onClick={() => handleClick(id)}
          >
            {label}
          </div>

          {/* Expandable Content Below */}
          <div className={`${styles.expandedContent} ${expanded === id ? styles.show : ""}`}>
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}
