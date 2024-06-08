"use client"

import Image from "next/image"

import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from "swiper/modules"

const reviewsData = [
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Sofia Jackson',
        job: 'Baker',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sapiente repellendus repellat possimus eligendi sequi!'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Jerry Parker',
        job: 'Manager, ABDelivery',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sapiente repellendus repellat possimus eligendi sequi!'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Adnan Bashir',
        job: 'Entrepreneur',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero omnis, vel quasi nobis repudiandae magni.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Teju Gbenga',
        job: 'CEO, Beauty&Spa',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi saepe vitae molestias illum deleniti.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Ali Sandam',
        job: 'CEO, EN Marketting',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic nulla enim voluptatum quas similique.'
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Esther Ogbe',
        job: 'CEO, DearFabricsNG',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem doloremque ipsam nostrum et odit.'
    },
]

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 3,
                        }
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000
                    }}
                    loop={true}
                    className="h-[350px]"
                >
                    {
                        reviewsData.map((person, i) => (
                            <SwiperSlide key={i}>
                                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                    <CardHeader className="p-0 mb-10">
                                        <div className="flex items-center gap-x-4">
                                            <Image
                                                src={person.avatar}
                                                width={70}
                                                height={70}
                                                alt=""
                                                priority
                                            />
                                            <div className="flex flex-col">
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className="text-lg text-muted-foreground">
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews