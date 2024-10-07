"use client"

import Link from "next/link"

import { Button } from "./ui/button"

const CTA = () => {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="heading-2 max-w-xl text-center mb-8">
                        Prepared to turn your ideas into reality? I&apos;m here to help
                    </h2>
                    <Link href="/contact"><Button>Contact me</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default CTA