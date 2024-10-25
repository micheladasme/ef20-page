import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import Rafael from "../assets/rafa-transparent.webp"
// import { HandCoinsIcon, BriefcaseIcon, ChartCandlestick } from "lucide-react"
function Teacher() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-black to-gray-900" id="teacher">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
                        Rafael Ponton
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                        <div className="w-full max-w-[250px]">
                            <AspectRatio ratio={1 / 1}>
                                <img
                                    src={Rafael}
                                    alt="Imagen de Rafael Ponton"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </AspectRatio>
                        </div>
                        <Separator className="hidden md:block bg-gray-500" orientation="vertical" />
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg text-white">
                                <strong>Rafael Ponton</strong> es el creador y profesor del canal <strong>Educación Financiera 2.0</strong> con más de 8 años de experiencia en el mundo de las criptomonedas, el cual demuestra todo su conocimiento en todo el contenido realizado desde el año 2014.
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teacher