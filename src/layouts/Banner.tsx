import { Button } from "@/components/ui/button"
import banner from "../assets/banner.jpeg"
function Banner() {
    return (
        <section className="w-full py-10 md:py-24 lg:py-32 xl:py-48 relative w-screen bg-cover bg-center bg-no-repeat bg-local bg-origin-content"
        style={{ backgroundImage: `url(${banner})`, }} id="home">
        <div className="absolute inset-0 bg-black/70" ></div>
            <div className="relative z-10 flex flex-col items-center space-y-8 text-center mx-auto">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Conoce el Mundo de las Criptomonedas
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Aprende todo sobre finanzas y criptomonedas con nuestros cursos <strong> gratuitos </strong> en YouTube.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-500 text-black md:text-lg hover:bg-yellow-70 lg:w-30 lg:h-10 rounded-full" onClick={() => window.open('https://www.youtube.com/@EducacionFinanciera2.0/playlists', '_blank')}>Ver Cursos</Button>
              </div>
            </div>
        </section>
    )
}

export default Banner