"use client"

import { useState } from "react"

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

import { projectData } from "@/lib/data"

const ProjectsPage = () => {
    const [categories, setCategories] = useState([
        'all projects',
        ...new Set(projectData.map((project) => project.categoryText))
    ])
    const [category, setCategory] = useState('all projects')

    const filteredProjects = projectData.filter(project => category === 'all projects' ? project : project.categoryText === category)

    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className={`w-full grid h-full md:grid-cols-${categories.length} md:max-w-auto xl:max-w-[940px] mb-12 mx-auto md:border dark:border-none`}>
                        {
                            categories.map((category, i) => (
                                <TabsTrigger
                                    key={i}
                                    value={category}
                                    className="capitalize w-[162px] md:w-auto"
                                    onClick={() => setCategory(category)}
                                >
                                    {category}
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {
                            filteredProjects.map((project, i) => (
                                <TabsContent key={i} value={category}>
                                    <ProjectCard
                                        project={project}
                                    />
                                </TabsContent>
                            ))
                        }
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default ProjectsPage