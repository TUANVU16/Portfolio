import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          こんにちは！ {""}
          <ReactTyped strings={["ヴーです！！！"]} typeSpeed={150} />
        </h1>
        <p className={styles.description}>
          私の名前はファン・トゥアン・ヴーです。現在東京に住んで働いています。
        </p>
      </div>
      <img
        src={getImageUrl("hero/vu2.png")}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
