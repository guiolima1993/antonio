import React, { useEffect, useState } from 'react';
import Inputmask from 'inputmask';
import styles from './Accordion.module.css';

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://fritzpaixao.activehosted.com/f/embed.php?id=4';
      script.charset = 'utf-8';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const currentUrlParams = new URLSearchParams(window.location.search);

        const utmFieldNames: { [key: string]: string } = {
          'AQS-MSL-2024cap_source': 'field[23]',
          'AQS-MSL-2024cap_campaign': 'field[24]',
          'AQS-MSL-2024cap_medium': 'field[25]',
          'AQS-MSL-2024cap_term': 'field[27]',
          'AQS-MSL-2024cap_content': 'field[26]',
        };

        const fillUTMFields = () => {
          currentUrlParams.forEach((value, key) => {
            const fieldName = utmFieldNames[key];
            if (fieldName) {
              const hiddenInput = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
              if (hiddenInput) {
                hiddenInput.value = value;
              }
            }
          });
        };

        fillUTMFields();

        const phoneField = document.querySelector('input[name="field[22]"]') as HTMLInputElement;
        if (phoneField) {
          Inputmask("(99) 99999-9999").mask(phoneField);
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <div className={styles.accordionContainer}>
      {isOpen && (
        <div className={`${styles.formContainer} ${styles.accordionContent}`}>
          <div className="_form_4"></div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
