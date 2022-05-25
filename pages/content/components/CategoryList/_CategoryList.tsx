import React from 'react'

import CategoryItem from '../CategoryItem/_CategoryItem'

import styles from '../../../../styles/category-list.module.css'

interface CategoryListProps {
    categories: categoryListItem[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }: CategoryListProps) => {
    return (
        <div className={styles.categoryList}>
            { categories.map((category: categoryListItem) => <CategoryItem key={category.id} category={category} />) }
        </div>
    )
}

export default CategoryList
