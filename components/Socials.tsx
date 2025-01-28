import Link from "next/link"

import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri"

interface SocialsProps {
    containerStyles: string
    iconStyles: string
}

const icons = [
    {
        path: 'https://github.com/oseogbe',
        name: <RiGithubFill />
    },
    {
        path: 'https://www.linkedin.com/in/osememen-ogbe',
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
                <Link
                    key={i}
                    href={icon.path}
                    target="_blank"
                    rel="noopener noreferrer"
                ><div className={`${iconStyles}`}>{icon.name}</div></Link>
            ))}
        </div>
    )
}

export default Socials