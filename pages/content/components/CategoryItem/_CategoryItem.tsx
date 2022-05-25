import React from 'react'
import Image from 'next/image'

import ArrowRightIcon from '../../../../public/svgs/arrow-right-white.svg'

import styles from '../../../../styles/category-item.module.css'

interface CategoryItemProps {
    category: categoryListItem
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }: CategoryItemProps) => {
    return (
        <div className={styles.categoryItem}>
            <Image className={styles.categoryItemImage} src={category.image} alt={ category.name } layout='fill' />

            <div className={styles.categoryItemLayer}>
                <h4 className={styles.categoryItemName}>{ category.name }</h4>
                <a className={styles.categoryItemLink} href={category.image}>
                    <span>Ver mais</span>
                    <ArrowRightIcon />
                </a>
            </div>
        </div>
    )
}

export default CategoryItem
