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
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores inventore magnam, sint voluptates consequuntur amet tenetur minima ab iure enim qui nemo pariatur tempore vitae deserunt doloribus architecto doloremque voluptatum.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Mobile Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi aliquam illum molestiae, inventore quasi sunt accusamus, fugiat corporis ea ipsum consectetur possimus officiis corrupti, ipsa in quibusdam rem rerum suscipit.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Dev-Ops',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis vel consectetur. Excepturi quia laudantium placeat accusamus eius voluptas sit veniam officiis incidunt veritatis.'
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