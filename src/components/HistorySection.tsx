// src/components/HistorySection.tsx
"use client";
import React from 'react';
import styles from './HistorySection.module.css';
import Accordion from './Accordion';

const HistorySection: React.FC = () => {
  return (
    <section className={styles.historySection}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/img/fritz-paixao-new.webp" alt="Fritz Paixao foto" />
          <div className={styles.imgOverlay}></div>
        </div>
        <h6 className={styles.textsInfo}>A incrível história de como Fritz Paixão tem transformado a história de pessoas simples</h6>
        <p className={styles.text}>Prazer, meu nome é Fritz Paixão e eu larguei a carreira de apresentador de TV do multishow, para atuar apenas neste mercado…</p>

        <p className={styles.text}>Sou fundador da maior empresa do segmento, a Clean New, presente em mais de 4 continentes e 12 países…</p>

        <p className={styles.text}>E agora, pela primeira vez, você pode ter acesso a estratégia que me fez vender mais de 100 milhões de reais em serviços de higienizaçao de estofados!</p>

        <p className={styles.text}>Isso é a peça chave que está faltando pra você começar a lucrar muito nesse mercado que é um oceano azul…</p>
        <br></br>
        <Accordion />
      </div>
    </section>
  );
};

export default HistorySection;
