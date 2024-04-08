import React from "react";

import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>自己PR&志望動機</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          <li>
            自己PR
            <p>
              私はいつも何か新しいことを学ぼうとしています。例えば、ベトナムで勉強した年です。
              当時は暇だったのでスペイン語を勉強しようと思いましたが、一番難しいスペイン語は[R]の発音だったので、1週間後、昼夜を問わず発音[R]を練習しました、自分の努力でようやくスペイン語で[R]の音が出ました。私は中国などの東アジア諸国の歴史に興味を持っているので、戦国時代の生活についてもっと深く学ぶために、少し中国語（簡単な日常のコミュニケーション）を学びました。
            </p>
          </li>
          <li>
            志望動機
            <p>
              お客様及び社会に利益をもたらすものを作りの強い興味を持ち、人に喜んでもらえた時に一番満足感を感じ、ものづくりの原動力になっています。最高レベルのお客様の満足を実現することに良いものを作りたいと考え、志望させていただきました。持っている技術知識、経験、コミュニケーション能力を使って素晴らしいサービスにしようと思っております。貴社の仕事を通して皆に喜んでもらえるように良い仕組みを作り、お客様と良好な関係を築きたいと考えております。
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
