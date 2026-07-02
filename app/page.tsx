import { cn } from "@/lib/utils"
import { Mail } from "lucide-react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

export default function Page() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center"
      style={{
        backgroundColor: "#FFF",
        opacity: 0.8,
        backgroundImage: "radial-gradient(#1d4052 1px, #FFF 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <h1 className="sr-only">RAWN Consulting</h1>
      <div className="flex w-full flex-col items-center">
        <p
          className={cn(
            "absolute top-30 mb-5 text-center text-2xl font-bold tracking-widest uppercase md:mb-10 md:text-4xl"
          )}
          // style={{ fontFamily: "inter" }}
        >
          <span className="md:underline">Under</span>
          <span className="underline max-md:hidden"> </span>
          <br className="md:hidden" />
          <span className="underline">Construction</span>
        </p>
        <img src="/logo.png" className="max-w-50 md:max-w-xs" />
        <div className="mt-6 flex w-full max-w-2xl flex-col items-center gap-5">
          <p className="text-center text-xl md:text-3xl">
            Where Legal Meets{" "}
            <span className="font-bold text-[#1E3C4D] italic">Strategy</span>
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-around gap-y-3 md:flex-row">
            <Link
              target="_blank"
              href="mailto:info@rawnconsulting.com"
              className="flex items-center gap-2"
            >
              <Mail size={25} />
              <span className="text-[#1E3C4D]">info@rawnconsulting.com</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/rawn.consulting"
              className="flex items-center gap-2"
            >
              <FaInstagram size={25} />
              <span className="text-[#1E3C4D]">rawn.consulting</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
