"use client"

import { useEffect, useState } from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updateScrollPosition = () => {
            const currentProgress = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight

            if (scrollHeight) {
                setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
            }
        }

        window.addEventListener('scroll', updateScrollPosition)

        return () => window.removeEventListener('scroll', updateScrollPosition)
    }, [])


    return completion
}

export default useScrollProgress