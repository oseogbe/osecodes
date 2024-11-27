"use client"

import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Transform your ideas into fully functional and visually stunning websites. I specialize in creating responsive, user-friendly designs using modern frameworks and best practices to ensure your web presence stands out and performs seamlessly.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Mobile Development',
        description: 'Bring your app ideas to life with robust and intuitive mobile solutions for both Android and iOS platforms. I develop mobile applications tailored to your needs, focusing on performance, scalability, and a delightful user experience.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Dev-Ops',
        description: 'Streamline your development process and enhance operational efficiency. With expertise in CI/CD pipelines, cloud infrastructure, and automated workflows, I help bridge the gap between development and operations for faster, more reliable deployments.'
    },
]

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                    My Services
                </h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, i) => (
                        <Card key={i} className="w-full relative max-w-[424px] flex flex-col items-center pt-24 pb-10 xl:pt-16 xl:pb-0">
                            <CardHeader className="text-primary absolute -top-[60px]">
                                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex items-center justify-center">{item.icon}</div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4">{item.title}</CardTitle>
                                <CardDescription className="text-lg">{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services