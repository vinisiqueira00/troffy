import React from 'react'

import ProductCard from '../ProductCard/_ProductCard'

import styles from '../../../../styles/products-shelf.module.css'

interface ProductShelfProps {
    products: ProductShelfItem[]
}

const ProductShelf: React.FC<ProductShelfProps> = ({ products }: ProductShelfProps) => {
    return (
        <div className={styles.productShelf}>
            <div className={styles.productShelfContent}>
                { products.map((product: ProductShelfItem) => <ProductCard key={product.id} product={product} />) }
            </div>
        </div>
    )
}

export default ProductShelf
