import React from 'react'
import Link from 'next/link'

import styles from '../../../../styles/footer.module.css'

import Logotype from '../../../../public/svgs/logotype.svg'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogotype}>
                    <Logotype />
                </div>

                <div className={styles.footerMenu}>
                    <ul className={styles.footerMenuList}>
                        <li className={styles.footerMenuListTitle}>
                            <span className={styles.footerMenuListTitleText}>Plataforma</span>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Home</a>
                            </Link>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Sacola</a>
                            </Link>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Institucional</a>
                            </Link>
                        </li>
                    </ul>

                    <ul className={styles.footerMenuList}>
                        <li className={styles.footerMenuListTitle}>
                            <span className={styles.footerMenuListTitleText}>Acesso restrito</span>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Minha conta</a>
                            </Link>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Meus endereços</a>
                            </Link>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Meus pedidos</a>
                            </Link>
                        </li>
                    </ul>

                    <ul className={styles.footerMenuList}>
                        <li className={styles.footerMenuListTitle}>
                            <span className={styles.footerMenuListTitleText}>Controle</span>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Entrar</a>
                            </Link>
                        </li>
                        <li className={styles.footerMenuListLink}>
                            <Link href="/temp">
                                <a className={styles.footerMenulistLinkText}>Criar minha conta</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerNewsletter}>
                    <p className={styles.footerNewsletterText}>Vamos, cadastre-se para receber nossas ofertas sensacionais! Está esperando o que, hein?! :D</p>
                    <form action="/" className={styles.footerNewsletterForm}>
                        <input className={styles.footerNewsletterFormInput} type="email" placeholder="Ex: exemplo@email.com"/>
                        <button className={styles.footerNewsletterFormButton} type="button">Enviar</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer
