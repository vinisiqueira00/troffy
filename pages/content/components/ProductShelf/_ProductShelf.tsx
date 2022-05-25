import React, { useEffect, useState } from 'react'

import ProductCard from '../ProductCard/_ProductCard'

import ArrowRightIcon from '../../../../public/svgs/arrow-right-white.svg'
import ArrowLeftIcon from '../../../../public/svgs/arrow-left-white.svg'

import styles from '../../../../styles/products-shelf.module.css'

interface ProductShelfProps {
    products: ProductShelfItem[]
    title?: string
}

const ProductShelf: React.FC<ProductShelfProps> = ({ products, title }: ProductShelfProps) => {
    const [ idRandom, setIdRandom ] = useState(0)
    const [ lastProductVisible, setLastProductVisible ] = useState(3)

    useEffect(() => {
        setIdRandom(Math.floor(Math.random() * 999999999))
    }, [])

    useEffect(() => {
        const element = document.querySelector(`.productShelfList__${idRandom}`)

        if (element) {
            const props = element.getBoundingClientRect()
            const widthCard = (props.width - 20) / 3

            element.scrollLeft = (lastProductVisible - 3) * (widthCard + 10)
        }
    }, [idRandom, lastProductVisible])

    const handlePrevProduct = () => {
        if (lastProductVisible > 3) {
            setLastProductVisible(lastProductVisible - 1)
        }
        else {
            setLastProductVisible(3)
        }
    }

    const handleNextProduct = () => {
        const element = document.querySelector(`.productShelfList__${idRandom}`)

        if (element) {
            const quantityProductCard = element.children.length

            if (lastProductVisible < quantityProductCard) {
                setLastProductVisible(lastProductVisible + 1)
            }
            else {
                setLastProductVisible(quantityProductCard)
            }
        }
    }

    return (
        <div className={styles.productShelf}>
            {
                title ? <h2 className={styles.productShelfTitle}>{ title }</h2> : <></>
            }

            <div className={styles.productShelfContent}>
                <div className={`${styles.productShelfList} productShelfList__${idRandom}`}>
                    { products.map((product: ProductShelfItem) => <ProductCard key={product.id} product={product} />) }
                </div>

                <button className={styles.productShelfButtonLeft} onClick={handlePrevProduct}>
                    <ArrowLeftIcon />
                    <ArrowLeftIcon />
                </button>

                <button className={styles.productShelfButtonRight} onClick={handleNextProduct}>
                    <ArrowRightIcon />
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    )
}

export default ProductShelf
