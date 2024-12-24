"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Typed from 'typed.js';

import { Button } from "./ui/button"

import { Download, Send } from "lucide-react"
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri"

import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"

import { projectData } from "@/lib/data";

const Hero = () => {
    const rolesEl = useRef(null)

    useEffect(() => {
        const typed = new Typed(rolesEl.current, {
            strings: ['Full-stack Developer', 'Mobile Developer', 'Dev-Ops Engineer'],
            typeSpeed: 70,
            loop: true,
            smartBackspace: true,
            backSpeed: 70,
            backDelay: 50
        })

        return () => typed.destroy()
    }, [])

    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex flex-col justify-center max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                            <span ref={rolesEl} />
                        </div>
                        <h1 className="heading-1 mb-4">Hello, my name is Osememen</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey, and what I engage in professionally.</p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-2">Contact me <Send size={14} /></Button>
                            </Link>
                            <a download href="Osememen Ogbe CV.pdf">
                                <Button variant="secondary" className="gap-x-2">Download CV <Download size={18} /></Button>
                            </a>
                        </div>
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    <div className="hidden xl:flex relative">
                        <Badge
                            containerStyles="absolute top-[24%] -left-[5rem]"
                            icon={RiBriefcase4Fill}
                            endCountNum={4}
                            badgeText="Years of Experience"
                        />
                        <Badge
                            containerStyles="absolute top-[80%] -left-[1rem]"
                            icon={RiTodoFill}
                            endCountNum={projectData.length}
                            badgeText="Personal Projects"
                        />
                        <Badge
                            containerStyles="absolute top-[55%] -right-8"
                            icon={RiTeamFill}
                            endCountNum={2}
                            // endCountText="k"
                            badgeText="Certificates"
                        />
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImg
                            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                            imgSrc=""
                        />
                    </div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero