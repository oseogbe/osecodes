"use client"

import Socials from "./Socials"

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="bg-secondary py-12 xl:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    <Socials
                        containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
                        iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
                    />
                    <div className="text-muted-foreground text-center max-w-[280px] md:max-w-max">
                        Copyright &copy; {year} Osememen Ogbe. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer