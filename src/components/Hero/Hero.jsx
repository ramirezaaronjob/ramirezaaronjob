import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Aaron</h1>
        <p className={styles.description}>
     An MIS Analyst and Software Engineer skilled in React, SQL, JavaScript, and Python. I hold a Bachelor’s in Computer Science from the University of Nevada, Reno, and am pursuing a Master’s in Computer Science at Georgia Tech.
        </p>
        <a href="mailto:aaron.job.ramirez@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
