'use client';
import React from 'react';
import styles from './Chance.module.css';
import Accordion from './Accordion';

const Chance: React.FC = () => {
  return (
    <div className={styles.chanceWrapper}>
      <section className={styles.chanceSection}>
        <div className={styles.chanceContainer}>
          <h2 className={styles.sectionTitle}>
            Nada acontece por acaso!
          </h2>
          <h3 className={styles.subtitle}>
            O encontro e o chamado
          </h3>
          <p className={styles.paragraphSmall}>
            A definição bíblica de casualidade é:
          </p>
          <p className={styles.paragraph}>“O conjunto providencial das circunstâncias por parte de Deus”.</p>
          <p className={styles.paragraphSmall}>
            Sabe o que isto significa? Que coincidência é a forma que Deus utiliza para se fazer presente na vida das pessoas.
          </p>
          <p className={styles.paragraphSmall}>
            Foi justamente assim que Ele me apresentou ao Antônio, um rapaz que vivia embaixo de um viaduto em Salvador. E que mesmo em situação de rua, não perdeu sua Fé.
          </p>

          <img src="/img/antonio-morando-na-rua.webp" alt="Antonio morando na rua" className={styles.image} />

          <p className={styles.paragraphSmall}>
            Era uma manhã de sábado quando eu o encontrei sentado em uma pedra, lendo a bíblia em "sua casa"…
          </p>
          <p className={styles.paragraph}>
            Ao vê-lo ali, algo tocou profundamente meu coração e decidi me aproximar para conhecer sua história.
          </p>
          <p className={styles.paragraphSmall}>
            Em Antônio, vi uma força de vontade imensa, uma determinação de vencer e um coração tão puro que resolvi lhe fazer uma proposta: mudar-se para São Paulo e aprender comigo tudo sobre o mercado de limpeza de sofás.
          </p>
          <h4 className={styles.lastTitle}>Para minha alegria, ele aceitou sem hesitar!</h4>
          <img src="/img/fritz-e-antonio.webp" alt="Fritz trazendo antonio para sede cnx industry" className={styles.image} />
          <p className={styles.paragraphSmall}>Durante algumas semanas, eu me dediquei a ensinar pessoalmente ao Antônio como mudar sua vida mesmo sem ter dinheiro, da mesma forma que mudei a minha.</p>
          <p className={styles.paragraph}>Aplicando os segredos que me tornaram o empreendedor mais premiado do segmento, o Antônio conseguiu faturar um valor que ele nunca imaginou ser possível (apenas em um final de semana)!</p>
          <p className={styles.paragraphSmall}>Tenho certeza de que você já se encontrou também neste caminho, pedindo uma luz, uma direção e uma resposta a Deus. Ela chegou agora!</p>
          <h4 className={styles.lastTitle}>No dia 02 de Setembro você vai receber seu CHAMADO e descobrir que sua inscrição no RECOMEÇO, não foi coincidência, nem obra do acaso.</h4>
          <Accordion />
        </div>
      </section>
    </div>
  );
};

export default Chance;
