import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { MenuDrawerContext } from '../../../../context/MenuDrawerContext'

import styles from '../../../../styles/menu-drawer.module.css'

import Logotype from '../../../../public/svgs/logotype.svg'
import ArrowRightIcon from '../../../../public/svgs/arrow-right.svg'
import SearchGrayIcon from '../../../../public/svgs/search-gray.svg'
import SearchOrangeIcon from '../../../../public/svgs/search-orange.svg'
import ArrowRightGrayIcon from '../../../../public/svgs/arrow-right-gray.svg'

const MenuDrawer: React.FC = () => {
    const { opened, setOpened, searchFocused, setSearchFocused } = useContext(MenuDrawerContext)
    const [input, setInput] = useState<HTMLInputElement | null>(null)
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        input && input.focus()
    }, [input])

    const handleCloseMenu = () => {
        setOpened(false)
    }

    return (
        <div className={`${styles.menuDrawer} ${opened && styles.opened}`}>
            <div className={styles.menuDrawerOverlay} onClick={handleCloseMenu}></div>

            <nav className={styles.menuDrawerContent}>
                <header className={styles.menuDrawerHeader}>
                    <Logotype />

                    <button className={styles.menuDrawerCloseButton} onClick={handleCloseMenu}>
                        <ArrowRightIcon />
                    </button>
                </header>

                <form className={styles.menuDrawerSearch}>
                    <span className={`${styles.menuDrawerSearchEdge} ${searchFocused && styles.show}`}></span>

                    <input
                        className={styles.menuDrawerSearchInput}
                        type="text"
                        name="query"
                        placeholder="Ex: Nike ACG Air Max"
                        ref={(input) => { setInput(searchFocused ? input : null) }}
                        onClick={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <button className={styles.menuDrawerSearchSubmit} type="button">
                        {searchFocused ? <SearchOrangeIcon /> : <SearchGrayIcon />}
                    </button>
                </form>

                <ul className={styles.menuDrawerLinks}>
                    <li className={styles.menuDrawerLink}>
                        <p className={styles.menuDrawerLinkText}>Boots</p>
                        <ArrowRightGrayIcon />
                    </li>

                    <li className={styles.menuDrawerLink}>
                        <p className={styles.menuDrawerLinkText}>Lifestyle</p>
                        <ArrowRightGrayIcon />
                    </li>

                    <li className={styles.menuDrawerLink}>
                        <p className={styles.menuDrawerLinkText}>Running</p>
                        <ArrowRightGrayIcon />
                    </li>

                    <li className={styles.menuDrawerLink}>
                        <p className={styles.menuDrawerLinkText}>Skateboarding</p>
                        <ArrowRightGrayIcon />
                    </li>

                    <li className={`${styles.menuDrawerLink} ${styles.linkHighlight}`}>
                        <p className={styles.menuDrawerLinkText}>Promoções</p>
                    </li>
                </ul>

                <footer className={styles.menuDrawerAuthArea}>
                    <p className={styles.menuDrawerAuthText}>Venha e torne-se um colaborador troffy e aproveite todas as nossas ofertas.</p>
                    <div className={styles.menuDrawerAuthButtons}>
                        <button className={styles.menuDrawerAuthRegister}>Cadastrar-me</button>
                        <button className={styles.menuDrawerAuthLogin}>Entrar</button>
                    </div>
                </footer>
            </nav>

            <section className={`${styles.menuDrawerSearchResult} ${opened && inputValue.length > 4 && styles.searchResultOpened}`}>
                <h5 className={styles.menuDrawerSearchResultQuery}>Resultado da pesquisa “{inputValue}”</h5>
            </section>
        </div>
    )
}

export default MenuDrawer
