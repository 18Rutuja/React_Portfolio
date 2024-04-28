import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Resume from "../resume/Resume";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rutuja </h1>
        <p className={styles.description}>
          I'm a Frontend developer using React Js.
        
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <Resume/>
      </div>
      <img
        src={getImageUrl("hero/Rutuja.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
