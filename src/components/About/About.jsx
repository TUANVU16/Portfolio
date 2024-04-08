import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/diploma2.png")}
          alt='Me with the foods'
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduate.ico")} alt='Graduate icon' />
            <div className={styles.aboutItemText}>
              <h3>Nguyen Tat Thanh 大学</h3>
              <p>金融都銀の流れについて勉強しました</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduate.ico")} alt='Graduate icon' />
            <div className={styles.aboutItemText}>
              <h3>早稲田文理専門学校</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificate2.ico")} alt='UI icon' />
            <div className={styles.aboutItemText}>
              <h3>資格</h3>
              <p>
                中国語：HSK5 <br />
                英語：TOIEC 785 <br />
                日本語：JLPT N2
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
