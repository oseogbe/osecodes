"use client"

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"

const Form = () => {
    return (
        <form className="flex flex-col gap-y-4" action="">
            <div className="relative flex items-center">
                <Input type="text" id="name" placeholder="Name" />
                <User className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea id="message" placeholder="Type your message here" />
                <MessageSquare className="absolute right-6 top-4" size={20} />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]">Let&apos;s Talk <ArrowRightIcon size={20} /></Button>
        </form>
    )
}

export default Form