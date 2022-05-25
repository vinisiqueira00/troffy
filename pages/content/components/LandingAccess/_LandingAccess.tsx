import React from 'react'

import MarkdownGroup01 from '../../../../public/svgs/markdown-group-01.svg'
import MarkdownGroup02 from '../../../../public/svgs/markdown-group-02.svg'
import MarkdownGroup03 from '../../../../public/svgs/markdown-group-03.svg'
import MarkdownGroup04 from '../../../../public/svgs/markdown-group-04.svg'
import BigLogotypeiIcon from '../../../../public/svgs/big-logotype.svg'

import styles from '../../../../styles/landing-access.module.css'

interface LandingAccessProps {}

const LandingAccess: React.FC<LandingAccessProps> = (props: LandingAccessProps) => {
    return (
        <div className={styles.landingAccess}>
            <div className={styles.landingAccessMarks}>
                <div className={styles.landingAccessMark01}>
                    <MarkdownGroup01 />
                </div>
                <div className={styles.landingAccessMark02}>
                    <MarkdownGroup02 />
                </div>
                <div className={styles.landingAccessMark03}>
                    <MarkdownGroup03 />
                </div>
                <div className={styles.landingAccessMark04}>
                    <MarkdownGroup04 />
                </div>
            </div>

            <div className={styles.landingAccessContent}>
                <BigLogotypeiIcon />
                <p className={styles.landingAccessContentText}>Sua loja de tênis com <br/>qualidade e preço.</p>
            </div>
        </div>
    )
}

export default LandingAccess
