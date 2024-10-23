import {HandCoinsIcon, BriefcaseIcon, ChartCandlestick } from "lucide-react"
function Mentoring() {
    return (
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-black to-gray-900" id="mentoring">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                    Mentorias
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <HandCoinsIcon className="h-12 w-12 mb-4 mt-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Comprar Criptomonedas</h3>
                        <p className="text-gray-400">Mentoria 1 a 1 via Zoom para aprender a comprar criptomonedas</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <BriefcaseIcon className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Portafolio Criptomonedas</h3>
                        <p className="text-gray-400">Mentoria 1 a 1 via Zoom para crear un portafolio de criptomonedas.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ChartCandlestick className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Indicador MACD</h3>
                        <p className="text-gray-400">Aprende a usar el Indicador MACD para predecir el movimiento del precio de cada activo.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Mentoring