function Footer() {
    return(
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Educación Financiera 2.0. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Términos de Servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Política de Privacidad
          </a>
        </nav>
      </footer>
    )
}

export default Footer