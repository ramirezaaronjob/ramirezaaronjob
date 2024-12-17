import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                 I have front development experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs. As well as building databases and back end features
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img  src={getImageUrl("about/analyst.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>MIS Analyst</h3>
              <p>
              As an MIS Analyst, I optimize business processes by designing, analyzing, and maintaining information systems. I create reports, analyze data using tools like SQL and Power BI, and provide insights to support decision-making.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
