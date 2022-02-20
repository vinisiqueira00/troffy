import { useContext } from 'react'

import { MenuDrawerContext } from '../../../../context/MenuDrawerContext'

import styles from '../../../../styles/header.module.css'

import MenuIcon from '../../../../public/svgs/menu.svg'
import SearchIcon from '../../../../public/svgs/search.svg'
import Logotype from '../../../../public/svgs/logotype.svg'
import AccountIcon from '../../../../public/svgs/account.svg'
import BagIcon from '../../../../public/svgs/bag.svg'

const Header: React.FC = () => {
    const { setOpened, setSearchFocused } = useContext(MenuDrawerContext)

    const handleOpenMenu = () => {
        setSearchFocused(false)
        setOpened(true)
    }

    const handleOpenMenuFocused = () => {
        setSearchFocused(true)
        setOpened(true)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerMenuArea}>
                    <button className={styles.headerMenuButton} onClick={handleOpenMenu}>
                        <MenuIcon />
                    </button>
                </div>
                <div className={styles.headerSearchArea}>
                    <button className={styles.headerSearchButton} onClick={handleOpenMenuFocused}>
                        <SearchIcon />
                    </button>
                </div>
                <div className={styles.headerLogotype}>
                    <Logotype />
                </div>
                <div className={styles.headerAccountArea}>
                    <button className={styles.headerAccountButton}>
                        <AccountIcon />
                    </button>
                </div>
                <div className={styles.headerBagArea}>
                    <button className={styles.headerBagButton}>
                        <BagIcon />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
