"use client"

import { motion } from "framer-motion";
import { GanttChartSquare, Blocks, Gem, BrainCircuit, Workflow, LayoutTemplate } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
    {
        icon: <LayoutTemplate size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Transform your ideas into fully functional and visually stunning websites. I specialize in creating responsive, user-friendly designs using modern frameworks and best practices to ensure your web presence stands out and performs seamlessly.'
    },
    // {
    //     icon: <Blocks size={72} strokeWidth={0.8} />,
    //     title: 'Mobile Development',
    //     description: 'Bring your app ideas to life with robust and intuitive mobile solutions for both Android and iOS platforms. I develop mobile applications tailored to your needs, focusing on performance, scalability, and a delightful user experience.'
    // },
    {
        icon: <Workflow size={72} strokeWidth={0.8} />,
        title: 'Dev-Ops',
        description: 'Streamline your development process and enhance operational efficiency. With expertise in CI/CD pipelines, cloud infrastructure, and automated workflows, I help bridge the gap between development and operations for faster, more reliable deployments.'
    },
    {
        icon: <BrainCircuit size={72} strokeWidth={0.8} />,
        title: 'AI Solutions',
        description: 'Leverage the power of artificial intelligence to transform your business. I design and implement AI-driven solutions, including machine learning models, natural language processing, and predictive analytics, to help you make data-driven decisions and automate complex tasks.'
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.5 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
    return (
        <motion.section className="mb-12 xl:mb-36" initial="hidden" whileInView="visible" variants={sectionVariants}>
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                    My Services
                </h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <Card className="w-full relative max-w-[424px] flex flex-col items-center pt-24 pb-10 xl:pt-16 xl:pb-0">
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex items-center justify-center">{item.icon}</div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mb-4">{item.title}</CardTitle>
                                    <CardDescription className="text-lg">{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Services