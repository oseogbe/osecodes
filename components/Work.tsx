"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/lib/data";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Work = () => {
    return (
        <motion.section className="relative mb-12 xl:mb-48 2xl:mb-56" initial="hidden" whileInView="visible" variants={sectionVariants}>
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Each project showcases my dedication to solving real-world problems with modern technology.</p>
                    <Link href="/projects"><Button>All projects</Button></Link>
                </div>
                <div className="xl:max-w-[1000px] 2xl:max-w-[1400px] xl:absolute right-0 top-0">
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                            1920: {
                                slidesPerView: 3
                            },
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
        </motion.section>
    )
}

export default Work