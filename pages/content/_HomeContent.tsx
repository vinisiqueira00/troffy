import { useContext } from 'react'
import type { NextPage } from 'next'

import Header from './components/Header/_Header'
import MenuDrawer from './components/MenuDrawer/_MenuDrawer'
import LinearEffectWords from './components/LinearEffectWords/_LinearEffectWords'
import HighlightsProducts from './components/HighlightsProducts/_HighlightsProducts'

import { MenuDrawerContext } from '../../context/MenuDrawerContext'

import styles from '../../styles/home.module.css'

const HomeContent: NextPage = () => {
    const { opened } = useContext(MenuDrawerContext)

    return (
        <>
            <MenuDrawer />

            <div className={`${styles.page} ${opened && styles.menuDrawerOpened}`}>
                <Header />
                <LinearEffectWords />
                <HighlightsProducts />
            </div>
        </>
    )
}

export default HomeContent
