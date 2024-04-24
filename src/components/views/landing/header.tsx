import React from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, TerminalIcon } from "@/components/icons"

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <TerminalIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Onboardly</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex gap-4 md:hidden">
          <Button size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
    )
}

export default Header;