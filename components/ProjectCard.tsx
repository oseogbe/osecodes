import Link from "next/link"
import Image from "next/image"

import { Card, CardHeader } from "./ui/card"
import { Link2Icon } from "lucide-react"
import { RiGithubLine } from "react-icons/ri"

import { Badge } from "./ui/badge"

interface ProjectCardProps {
    project: {
        image: string
        category: string[]
        name: string
        description: string
        link: string
        github: string
    }
}

const badgeColors = ['bg-black', 'bg-primary']

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="group overflow-hidden relative selection:none">
            <CardHeader className="p-0">
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={project.image}
                        width={320}
                        height={320}
                        alt=''
                        priority
                    />
                    <div className="flex gap-x-4 mt-12">
                        <Link
                            href={project.link}
                            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                        >
                            <Link2Icon className="text-white" />
                        </Link>
                        <Link
                            href={project.github}
                            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                        >
                            <RiGithubLine className="text-white text-2xl" />
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <div className="flex items-center gap-x-3 mb-2 absolute top-4 left-5">
                    {
                        project.category.map((category, i) => (
                            <Badge key={i} className={`${badgeColors[i]} uppercase text-xs font-medium`}>{category}</Badge>
                        ))
                    }
                </div>
                <h4 className="heading-4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
        </Card>
    )
}

export default ProjectCard