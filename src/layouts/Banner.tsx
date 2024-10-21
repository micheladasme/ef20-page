import { Button } from "@/components/ui/button"
function Banner() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Domina el Mundo de las Criptomonedas
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Aprende todo sobre finanzas y criptomonedas con nuestros cursos gratuitos en YouTube.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600" onClick={() => window.open('https://www.youtube.com/@EducacionFinanciera2.0', '_blank')}>Ver Cursos</Button>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Banner