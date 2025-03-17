"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion";
import Typed from 'typed.js';

import { Button } from "./ui/button"

import { Download, Send } from "lucide-react"
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri"

import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"

import { projectData } from "@/lib/data";

const Hero = () => {
    const rolesEl = useRef<HTMLSpanElement>(null)
    const leftDivRef = useRef<HTMLDivElement>(null)
    const rightDivRef = useRef<HTMLDivElement>(null)
    const leftDivControls = useAnimation()
    const rightDivControls = useAnimation()

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

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        }

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    leftDivControls.start("visible")
                    rightDivControls.start("visible")
                } else {
                    leftDivControls.start("exit")
                    rightDivControls.start("exit")
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        const leftDiv = leftDivRef.current;
        const rightDiv = rightDivRef.current;

        if (leftDiv) observer.observe(leftDiv)
        if (rightDiv) observer.observe(rightDiv)

        return () => {
            if (leftDiv) observer.unobserve(leftDiv)
            if (rightDiv) observer.unobserve(rightDiv)
        }
    }, [leftDivControls, rightDivControls])

    const leftDivVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    }

    const rightDivVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
    }

    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <motion.div
                        className="flex flex-col justify-center max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left"
                        initial="hidden"
                        animate={leftDivControls}
                        ref={leftDivRef}
                        variants={leftDivVariants}
                    >
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
                    </motion.div>
                    <motion.div
                        className="hidden xl:flex relative"
                        initial="hidden"
                        animate={rightDivControls}
                        ref={rightDivRef}
                        variants={rightDivVariants}
                    >
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
                    </motion.div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero