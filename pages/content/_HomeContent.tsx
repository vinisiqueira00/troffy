import { useContext } from 'react'
import type { NextPage } from 'next'

import Header from './components/Header/_Header'
import MenuDrawer from './components/MenuDrawer/_MenuDrawer'
import LinearEffectWords from './components/LinearEffectWords/_LinearEffectWords'
import HighlightsProducts from './components/HighlightsProducts/_HighlightsProducts'
import ProductShelf from './components/ProductShelf/_ProductShelf'

import { MenuDrawerContext } from '../../context/MenuDrawerContext'

import styles from '../../styles/home.module.css'

const HomeContent: NextPage = () => {
    const { opened } = useContext(MenuDrawerContext)

    const mostAccessed: HighlightsProductsItem = {
        id: '6',
        image: '/images/products/000004/003.jpg',
        name: 'Nike Air VaporMax Plus',
        link: '/nike-air-vapormax-plus',
    }

    const mostPurchased: HighlightsProductsItem = {
        id: '7',
        image: '/images/products/000005/003.jpg',
        name: 'Nike ACG Air Nasu GORE-TEX',
        link: '/nike-acg-air-nasu-gore-tex',
    }

    const productsList: ProductShelfItem[] = [
        {
            id: '1',
            image: '/images/products/000001/001.jpg',
            name: 'Air Jordan 1 Mid',
            category: 'Lifestyle',
            link: '/air-jordan-1-mid',
            price: {
                new: 115.00,
            },
        },
        {
            id: '2',
            image: '/images/products/000002/001.jpg',
            name: 'Jordan Zoom Trunner Advance',
            category: 'Running',
            link: '/jordan-zoom-trunner-advance',
            price: {
                new: 110.00,
            },
        },
        {
            id: '3',
            image: '/images/products/000003/001.jpg',
            name: 'Nike SB Shane',
            category: 'Skateboarding',
            link: '/nike-sb-shane',
            price: {
                new: 80.00,
            },
        },
        {
            id: '4',
            image: '/images/products/000002/001.jpg',
            name: 'Jordan Zoom Trunner Advance',
            category: 'Running',
            link: '/jordan-zoom-trunner-advance',
            price: {
                new: 110.00,
            },
        },
        {
            id: '5',
            image: '/images/products/000001/001.jpg',
            name: 'Air Jordan 1 Mid',
            category: 'Lifestyle',
            link: '/air-jordan-1-mid',
            price: {
                new: 115.00,
            },
        },
    ]

    return (
        <>
            <MenuDrawer />

            <div className={`${styles.page} ${opened && styles.menuDrawerOpened}`}>
                <Header />
                <LinearEffectWords />
                <HighlightsProducts mostAccessed={mostAccessed} mostPurchased={mostPurchased} />
                <ProductShelf products={productsList} />
            </div>
        </>
    )
}

export default HomeContent
