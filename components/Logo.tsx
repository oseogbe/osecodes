import { spartan } from "@/app/fonts"

const Logo = () => {
    return (
        <div className={`text-3xl lg:text-4xl ${spartan.className} font-bold tracking-tighter`}>ose<span className="text-primary">codes</span>.</div>
    )
}

export default Logo