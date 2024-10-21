import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import logo from "../assets/ef-image.jpg"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

function Header() {
    const [isOpen, setIsOpen] = useState(false)

  const MenuItems = ({ mobile = false }) => (
    <>
      <a 
        className={`text-sm font-medium hover:text-yellow-500 transition-colors ${mobile ? 'block py-2' : ''}`} 
        href="#" onClick={() => setIsOpen(false)}
      >
        Inicio
      </a>
      <a 
        className={`text-sm font-medium hover:text-yellow-500 transition-colors ${mobile ? 'block py-2' : ''}`} 
        href="#" onClick={() => setIsOpen(false)}
      >
        Cursos
      </a>
      <a 
        className={`text-sm font-medium hover:text-yellow-500 transition-colors ${mobile ? 'block py-2' : ''}`} 
        href="#about" onClick={() => setIsOpen(false)}
      >
        Sobre Nosotros
      </a>
      <a 
        className={`text-sm font-medium hover:text-yellow-500 transition-colors ${mobile ? 'block py-2' : ''}`} 
        href="#social" onClick={() => setIsOpen(false)}
      >
        Contacto
      </a>
    </>
  )
    return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-black/75">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a className="flex items-center justify-center" href="#">
              <img src={logo} alt="EF 2.0 Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
              <span className="ml-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-gray-300 bg-clip-text text-transparent">
                Educación Financiera 2.0
              </span>
            </a>
            <nav className="hidden md:flex space-x-4">
              <MenuItems />
            </nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetTitle className="hidden">
              </SheetTitle>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white" aria-describedby={undefined}> 
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold">Menú</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Cerrar menú" className="text-gray-400 hover:text-white">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col">
                  <MenuItems mobile />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>)
}

export default Header