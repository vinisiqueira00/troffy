import React from 'react'
import Image from 'next/image'

import styles from '../../../../styles/products-card.module.css'

interface ProductCardProps {
    product: ProductShelfItem
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.productCardHead}>
                <Image className={styles.productCardHeadImage} src={product.image} alt={ product.name } layout='fill' />

                <div className={styles.productCardHeadOverlay}>
                    <p className={styles.productCardHeadCategory}>{ product.category }</p>
                    <button className={styles.productCardHeadSave}>S2</button>
                </div>
            </div>
            <div className={styles.productCardContent}>
                <h3 className={styles.productCardContentName}>{ product.name }</h3>
                <h5 className={styles.productCardContentNewPrice}>{ product.price.new }</h5>
            </div>
        </div>
    )
}

export default ProductCard
