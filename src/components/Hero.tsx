// components/Hero.tsx
'use client';
import React from 'react';
import styles from './Hero.module.scss';
import Accordion from './Accordion';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.displayImg}>
          <img className={styles.imageAntonio} src="./img/antonio-antes-depois.webp" alt="Foto do Antonio de antes e depois com Fritz Paixao" />
          <img className={styles.logoHead} src="./img/head-line.png" alt="Logo de Head Line" />
        </div>
        <ul className={styles.list}>
          <li>
            <img src="./img/calendar.png" alt="Icone de calendario" />
            <p>02 de setembro</p>
          </li>
          <li>
            <img src="./img/clock.png" alt="Icone de calendario" />
            <p>A partir das 20H</p>
          </li>
        </ul>
        <h1 className={styles.heroTitle}>
          Os segredos que transformaram a vida deste <span>ex-morador de rua</span> usando apenas uma <span>escova de roupas e um detergente</span>
        </h1>
        <p className={styles.heroSubtitle}>E como isso vai poder te gerar uma renda extra de 1.000 a 4.000 reais trabalhando apenas aos finais de semana.</p>
        <Accordion />
      </div>
    </section>
  );
};

export default Hero;
