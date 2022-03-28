import React from 'react'
import Image from 'next/image'

import styles from '../../../../styles/highlights-products.module.css'

import Image01 from '../../../../public/images/nike-air-vapormax-plus.jpg'
import Image02 from '../../../../public/images/nike-acg-air-nasu-gore-tex.jpg'

const HighlightsProducts: React.FC = () => {
    return (
        <section className={styles.highlightsProducts}>
            <div className={styles.highlightProduct}>
                <Image className={styles.highlightProductImage} src={Image01} alt="Nike Air VaporMax Plus" />

                <div className={styles.highlightProductContent}>
                    <h4 className={styles.highlightProductContentTitle}>Mais acessado da semana</h4>
                    <h5 className={styles.highlightProductContentName}>Nike Air VaporMax Plus</h5>
                </div>

                <div className={styles.highlightProductButton}>
                    <button className={styles.highlightProductButtonElement}>Mais detalhes</button>
                </div>
            </div>

            <div className={styles.highlightProduct}>
                <Image className={styles.highlightProductImage} src={Image02} alt="Nike ACG Air Nasu GORE-TEX" />

                <div className={styles.highlightProductContent}>
                    <h4 className={styles.highlightProductContentTitle}>Mais comprado</h4>
                    <h5 className={styles.highlightProductContentName}>Nike ACG Air Nasu GORE-TEX</h5>
                </div>

                <div className={styles.highlightProductButton}>
                    <button className={styles.highlightProductButtonElement}>Mais detalhes</button>
                </div>
            </div>
        </section>
    )
}

export default HighlightsProducts
