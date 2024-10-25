import { GraduationCap, Users, TrendingUp, PiggyBank, Radio, Speech } from "lucide-react"
import { Button } from "@/components/ui/button"
function About() {
    return (
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="about">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                    ¿Por qué Educación Financiera 2.0?
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <GraduationCap className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Contenido de Calidad</h3>
                        <p className="text-gray-400">Cursos estructurados y actualizados regularmente.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Users className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Comunidad Activa</h3>
                        <p className="text-gray-400">Únete a cientos de estudiantes apasionados por las criptomonedas.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <TrendingUp className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Estrategias Probadas</h3>
                        <p className="text-gray-400">Aprende técnicas de inversión respaldadas por indicadores.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Radio className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Programas en VIVO</h3>
                        <p className="text-gray-400">Aprende en VIVO junto a Rafael de Lunes a Viernes. 19:00 Hora Colombia (-5 UTC).</p>
                        <Button className="bg-[#ea333d] hover:bg-[#ea333d]/80 mt-2" onClick={() => window.open('https://www.youtube.com/@EducacionFinanciera2.0/streams', '_blank')}>
                            Ir a Youtube
                        </Button>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Speech className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Conversatorio</h3>
                        <p className="text-gray-400">Conversa e interactúa con Rafael Ponton todos los Sábados. 19:00 Hora Colombia (-5 UTC).</p>
                        <Button className="bg-black hover:bg-black/80 border border-white mt-2" onClick={() => window.open('https://www.tiktok.com/@elponton', '_blank')}>
                            Ir a Tiktok
                        </Button>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <PiggyBank className="h-12 w-12 mb-4 text-yellow-500" />
                        <h3 className="text-xl font-bold mb-2">Educación Gratuita</h3>
                        <p className="text-gray-400">Todos los videos o lives están disponibles en Youtube de manera gratuita.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About