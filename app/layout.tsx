import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

const inter = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rawnconsulting.com"),
  title: {
    template: "%s - RAWN",
    default: "RAWN Consulting",
  },
  description: "RAWN Consulting, Where Legal Meets Strategy",
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        {/* <ThemeProvider> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
