import React from "react";

import styles from "../../styles/linear-effect-words.module.css";

const LinearEffectWords: React.FC = () => {
    return (
        <section className={styles.linearEffectWords}>
            <h1 className={styles.wordsTitle}>
                <span className={styles.word}>Qualidade.</span>
                <span className={styles.word}>Beleza.</span>
                <span className={styles.word}>Preço.</span>
            </h1>

            <h3 className={styles.phrase}>
                Acreditamos no poder do esporte para unir e inspirar as pessoas
                a agirem em suas comunidades.
            </h3>
        </section>
    );
};

export default LinearEffectWords;
