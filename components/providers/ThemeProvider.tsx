"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: { children: React.ReactNode } & ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}