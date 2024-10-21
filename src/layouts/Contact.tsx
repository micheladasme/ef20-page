import { Button } from "@/components/ui/button"
function Contact(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900" id="social">
          <h2 className="text-3xl font-bold mb-6 text-center">Contactanos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#73c86a] hover:bg-[#73c86a]/80" onClick={() => window.open('https://wa.me/573122534196?text=Hola Rafael, estoy interesado en hablar contigo.', '_blank')} >
              Via Whatsapp
            </Button>
          </div>
        </section>
    )
}

export default Contact