"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import Logo from "./Logo"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
    const [header, setHeader] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const scrollYPos = () => window.scrollY > 50 ? setHeader(true) : setHeader(false)

        window.addEventListener('scroll', scrollYPos)

        return () => window.removeEventListener('scroll', scrollYPos)
    }, [])

    return (
        <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <Nav
                            containerStyles="hidden xl:flex items-center gap-x-8"
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggle />
                        <div className="xl:hidden">
                            <NavMobile />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header