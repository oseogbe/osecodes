"use client"

import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

import DevImg from "./DevImg"

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from "lucide-react"

const infoData = [
    {
        icon: User2,
        text: 'Osememen Ogbe',
    },
    {
        icon: PhoneCall,
        text: '+234 708 047 5424',
    },
    {
        icon: MailIcon,
        text: 'osememen.ogbe@gmail.com',
    },
    // {
    //     icon: Calendar,
    //     text: 'Born on 30 Jan, 1999',
    // },
    {
        icon: GraduationCap,
        text: 'BSc. Computing and Information Technologies',
    },
    {
        icon: HomeIcon,
        text: 'Abuja, Nigeria',
    },
]

const careerData = [
    {
        title: "education",
        data: [
            {
                institution: "University of Derby",
                certificate: "Bachelor of Science: Computing and Information Technologies",
                years: "2019 - 2020"
            },
            {
                institution: "Institute of Commercial Management",
                certificate: "Advanced Diploma: Professional Computing and Information Processing",
                years: "2018"
            },
            {
                institution: "Aptech Computer Education",
                certificate: "National Diploma: Computer Software Engineering",
                years: "2016 - 2018"
            },
        ]
    },
    {
        title: "certification",
        data: [
            {
                certificate: "",
                years: ""
            },
        ]
    },
    {
        title: "experience",
        data: [
            {
                company: "Legend",
                role: "Full-stack Developer",
                years: "May 2024 - Till present"
            },
            {
                company: "EFNetwork",
                role: "Backend Developer",
                years: "June 2023 - May 2024"
            },
            {
                company: "SiiTech",
                role: "Full-stack Developer",
                years: "Jan 2023 - Oct 2023"
            },
            {
                company: "Reimnet",
                role: "Back-end Developer",
                years: "Jul 2021 - Jun 2022"
            },
        ]
    }
]

const skillsData = [
    {
        title: "back-end",
        data: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'Nest.js']
    },
    {
        title: "front-end",
        data: ['Vue.js', 'React.js', 'Next.js']
    },
    {
        title: "databases",
        data: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
        title: "dev-ops",
        data: ['Git', 'Github Actions']
    },
]

const tools = [
    "/about/vscode.svg",
    "/about/figma.svg",
    "/about/notion.svg",
    "/about/wordpress.svg",
]

const About = () => {
    const getData = (arr: any[], title: string) => arr.find(item => item.title === title)

    return (
        <section className="xl:h-min-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="" />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="career">Career</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="heading-3 mb-4">Unmatched Service Quality for Over 4 years</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0 text-justify">Greetings! I&apos;m a diligent and analytical full-stack developer with a
                                            knack for designing high-performance web applications
                                            customized to fulfill clients&apos; diverse requirements. My passion lies in crafting digital solutions that not only meet your needs but also have the potential for monetization.
                                            Let&apos;s connect and collaborate to achieve success.</p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {
                                                infoData.map((item, i) => (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={i}>
                                                        <div className="text-primary">
                                                            <item.icon />
                                                        </div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="career">
                                    <div>
                                        <h3 className="heading-3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase className="mt-[2px]" />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(careerData, 'experience').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(careerData, 'experience').data.map((item: any, i: number) => (
                                                        <div className="flex gap-x-8 group" key={i}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{item.company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{item.role}</div>
                                                                <div className="text-base font-medium">{item.years}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} className="mt-[2px]" />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(careerData, 'education').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(careerData, 'education').data.map((item: any, i: number) => (
                                                        <div className="flex gap-x-8 group" key={i}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{item.institution}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{item.certificate}</div>
                                                                <div className="text-base font-medium">{item.years}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="heading-3 mb-8">Tools I Use Frequently</h3>
                                        <div className="flex flex-col gap-y-8">
                                            {/* <h4 className="text-xl font-semibold mb-2">Skills</h4> */}
                                            {
                                                skillsData.map((skill, i) => (
                                                    <div key={i}>
                                                        <h4 className="text-[22px] text-primary capitalize mb-4">{skill.title}</h4>
                                                        <div>
                                                            {
                                                                skill.data.map((item, i) => (
                                                                    <span key={i}>
                                                                        {item}
                                                                        {i + 1 < skill.data.length && ', '}
                                                                    </span>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About