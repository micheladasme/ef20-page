import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MenuIcon, XIcon } from "lucide-react"
import logo from "../assets/ef-logo-2.png"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import Ticker from "./Ticker"

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const MenuItems = () => (
        <>
            <a
                className="text-md font-medium hover:text-yellow-500 transition-colors md:block py-2"
                href="#home" onClick={() => {setIsOpen(false)}}
            >
                Inicio
            </a>
            <Separator orientation="horizontal" className="lg:hidden" />
            <a
                className="text-md font-medium hover:text-yellow-500 transition-colors md:block py-2"
                href="#about" onClick={() => setIsOpen(false)}
            >
                Sobre Nosotros
            </a>
            <Separator orientation="horizontal" className="lg:hidden" />
            <a
                className="text-md font-medium hover:text-yellow-500 transition-colors md:block py-2"
                href="#teacher" onClick={() => setIsOpen(false)}
            >
                Profesor
            </a>
            <Separator orientation="horizontal" className="lg:hidden" />
            <a
                className="text-md font-medium hover:text-yellow-500 transition-colors md:block py-2"
                href="#mentoring" onClick={() => setIsOpen(false)}
            >
                Mentorias
            </a>
            <Separator orientation="horizontal" className="lg:hidden" />
            <a
                className="text-md font-medium hover:text-yellow-500 transition-colors md:block py-2"
                href="#videos" onClick={() => setIsOpen(false)}
            >
                Videos
            </a>
            <Separator orientation="horizontal" className="lg:hidden" />
            <a
                className="text-md font-medium hover:text-yellow-500 transition-colors md:block py-2"
                href="#contact" onClick={() => setIsOpen(false)}
            >
                Contacto
            </a>
            <Separator orientation="horizontal" className="lg:hidden" />
            <a
                className="text-md font-medium hover:text-yellow-500 transition-colors md:block py-2"
                href="#donation" onClick={() => setIsOpen(false)}
            >
                Donaciones
            </a>
        </>
    )
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-black/75">
            <div className="container mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a className="flex items-center justify-center" href="#">
                        <img src={logo} alt="EF 2.0 Logo" className="h-12 w-12 rounded-full" />
                        <span className="ml-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-gray-300 bg-clip-text text-transparent">
                            Educación Financiera 2.0
                        </span>
                    </a>
                    <nav className="hidden lg:flex space-x-4">
                        <MenuItems />
                    </nav>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                                <MenuIcon className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetTitle className="hidden">
                        </SheetTitle>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white" aria-describedby={undefined}>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-bold">Menú</span>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Cerrar menú" className="text-gray-400 hover:text-white">
                                        <XIcon className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                            </div>
                            <nav className="flex flex-col">
                                <MenuItems />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <Ticker></Ticker>
        </header>
        )
}

export default Header