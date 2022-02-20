import type { NextPage } from 'next'

import { MenuDrawerProvider } from '../context/MenuDrawerContext'

import HomeContent from './content/_HomeContent'

const Home: NextPage = () => {
    return (
        <MenuDrawerProvider>
            <HomeContent />
        </MenuDrawerProvider>
    )
}

export default Home
