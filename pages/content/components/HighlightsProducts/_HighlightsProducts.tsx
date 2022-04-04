import React from 'react'
import Image from 'next/image'

import styles from '../../../../styles/highlights-products.module.css'

interface HighlightsProducts {
    mostAccessed: HighlightsProductsItem
    mostPurchased: HighlightsProductsItem
}

const HighlightsProducts: React.FC<HighlightsProducts> = ({ mostAccessed, mostPurchased }: HighlightsProducts) => {
    return (
        <section className={styles.highlightsProducts}>
            <div className={styles.highlightProduct}>
                <Image className={styles.highlightProductImage} src={mostAccessed.image} layout="fill" objectFit="cover" objectPosition="center" alt={ mostAccessed.name } />

                <div className={styles.highlightProductContent}>
                    <h4 className={styles.highlightProductContentTitle}>Mais acessado da semana</h4>
                    <h5 className={styles.highlightProductContentName}>{ mostAccessed.name }</h5>
                </div>

                <div className={styles.highlightProductButton}>
                    <button className={styles.highlightProductButtonElement}>Mais detalhes</button>
                </div>
            </div>

            <div className={styles.highlightProduct}>
                <Image className={styles.highlightProductImage} src={mostPurchased.image} layout="fill" objectFit="cover" objectPosition="center" alt={ mostPurchased.name } />

                <div className={styles.highlightProductContent}>
                    <h4 className={styles.highlightProductContentTitle}>Mais comprado</h4>
                    <h5 className={styles.highlightProductContentName}>{ mostPurchased.name }</h5>
                </div>

                <div className={styles.highlightProductButton}>
                    <button className={styles.highlightProductButtonElement}>Mais detalhes</button>
                </div>
            </div>
        </section>
    )
}

export default HighlightsProducts
