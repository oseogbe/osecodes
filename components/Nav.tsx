"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { motion } from "framer-motion"

interface NavProps {
    containerStyles: string
    linkStyles: string
    underlineStyles: string
}

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' }
]

const Nav: React.FC<NavProps> = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname()

    return (
        <div className={`${containerStyles}`}>
            {links.map((link, i) => {
                return (
                    <Link href={link.path} key={i} className={`capitalize ${linkStyles}`}>
                        {link.path === path && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId="underline"
                                className={`${underlineStyles}`}
                            />
                        )}
                        <span className={`${link.path === path ? 'text-primary' : ''}`}>{link.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default Nav