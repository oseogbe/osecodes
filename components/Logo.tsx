import Link from "next/link"

import { spartan } from "@/app/fonts"

const Logo = () => {
    return (
        <Link href="/" className={`text-3xl lg:text-4xl ${spartan.className} font-bold tracking-tighter`}>ose<span className="text-primary">codes</span>.</Link>
    )
}

export default Logo