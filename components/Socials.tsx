import Link from "next/link"

import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri"

interface SocialsProps {
    containerStyles: string
    iconStyles: string
}

const icons = [
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
        name: <RiYoutubeFill />
    },
    {
        path: '/',
        name: <RiFacebookFill />
    },
    {
        path: '/',
        name: <RiInstagramFill />
    },
]

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, i) => (
                <Link key={i} href={icon.path}><div className={`${iconStyles}`}>{icon.name}</div></Link>
            ))}
        </div>
    )
}

export default Socials