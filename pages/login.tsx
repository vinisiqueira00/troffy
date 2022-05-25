import type { NextPage } from 'next'

import { MenuDrawerProvider } from '../context/MenuDrawerContext'

import LoginContent from './content/_LoginContent'

const Login: NextPage = () => {
    return (
        <MenuDrawerProvider>
            <LoginContent />
        </MenuDrawerProvider>
    )
}

export default Login
