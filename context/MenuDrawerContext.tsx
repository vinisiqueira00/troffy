import React, { createContext, useEffect, useState } from "react";

interface MenuDrawerContextProps {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
    searchFocused: boolean
    setSearchFocused: React.Dispatch<React.SetStateAction<boolean>>
}

const DEFAULT_VALUE = {
    opened: false,
    setOpened: () => {},
    searchFocused: false,
    setSearchFocused: () => {},
}

export const MenuDrawerContext = createContext<MenuDrawerContextProps>(DEFAULT_VALUE)

const MenuDrawerProvider: React.FC = ({ children }) => {
    const [opened, setOpened] = useState(DEFAULT_VALUE.opened)
    const [searchFocused, setSearchFocused] = useState(DEFAULT_VALUE.searchFocused)

    useEffect(() => {
        if (!opened) {
            setSearchFocused(false)
        }
    }, [opened])

    return (
        <MenuDrawerContext.Provider value={{ opened, setOpened, searchFocused, setSearchFocused }}>
            {children}
        </MenuDrawerContext.Provider>
    )
}

export { MenuDrawerProvider }
