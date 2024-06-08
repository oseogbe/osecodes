"use client"

import Link from "next/link"
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from "swiper/modules"

import ProjectCard from "./ProjectCard"

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur at debitis nisi cum minima, unde voluptates quae ab veritatis, aliquam deserunt! Ea ut minus voluptas nobis quas aliquid quo.',
        link: '/#',
        github: '/#'
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Greenflats Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur at debitis nisi cum minima, unde voluptates quae ab veritatis, aliquam deserunt! Ea ut minus voluptas nobis quas aliquid quo.',
        link: '/#',
        github: '/#'
    },
    {
        image: '/work/1.png',
        category: 'full-stack',
        name: 'Evolve Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur at debitis nisi cum minima, unde voluptates quae ab veritatis, aliquam deserunt! Ea ut minus voluptas nobis quas aliquid quo.',
        link: '/#',
        github: '/#'
    },
    {
        image: '/work/4.png',
        category: 'laravel',
        name: 'Ignite Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur at debitis nisi cum minima, unde voluptates quae ab veritatis, aliquam deserunt! Ea ut minus voluptas nobis quas aliquid quo.',
        link: '/#',
        github: '/#'
    },
    {
        image: '/work/3.png',
        category: 'node js',
        name: 'Sabway API',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur at debitis nisi cum minima, unde voluptates quae ab veritatis, aliquam deserunt! Ea ut minus voluptas nobis quas aliquid quo.',
        link: '/#',
        github: '/#'
    },
    {
        image: '/work/1.png',
        category: 'vue js',
        name: 'Weather3 Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur at debitis nisi cum minima, unde voluptates quae ab veritatis, aliquam deserunt! Ea ut minus voluptas nobis quas aliquid quo.',
        link: '/#',
        github: '/#'
    },
    {
        image: '/work/2.png',
        category: 'nest js',
        name: 'CryptoMask API',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur at debitis nisi cum minima, unde voluptates quae ab veritatis, aliquam deserunt! Ea ut minus voluptas nobis quas aliquid quo.',
        link: '/#',
        github: '/#'
    },
]

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href="/projects"><Button>All projects</Button></Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper
                        className="h-[640px] xl:h-[560px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            }
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {
                            projectData.slice(0, 4).map((project, i) => (
                                <SwiperSlide key={i}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work