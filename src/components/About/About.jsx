import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>B.Tech Student</h3>
              <p>
              I am Rutuja Prem Rathod, a third-year student majoring in Electronics and Telecommunication at 
              Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded. As a passionate web developer,
               I thrive on exploring the latest technologies and consistently seek opportunities to enhance my coding skills.
                I enjoy creating responsive, user-friendly websites, 
              and I'm driven by a genuine enthusiasm for learning and innovation in the field of web development and DSA in CPP.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>ReactJs Developer</h3>
              <p>
              I'm a frontend developer with experience in building responsive and optimized websites, and I'm also skilled in React development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solving</h3>
              <p>
              I have intermediate knowledge in Data Structures and Algorithms (DSA) in C++. I have solved over 500 questions on LeetCode and GeeksforGeeks, earning three badges from LeetCode and a 'Bag' award from GeeksforGeeks.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
