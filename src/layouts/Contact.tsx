import { Button } from "@/components/ui/button"
function Contact(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900" id="contact">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Contáctenos
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Si tienes cualquier duda, habla con Rafael.
        </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="transition ease-in-out delay-150 bg-[#73c86a] hover:-translate-y-1 hover:scale-110 hover:hover:bg-[#73c86a]/80 duration-300" onClick={() => window.open('https://wa.me/573122534196?text=Hola Rafael, estoy interesado en hablar contigo.', '_blank')} >
            <img className="h-5 w-5" src="https://cdn.simpleicons.org/whatsapp/white" />
              Via Whatsapp
            </Button>
          </div>
        </section>
    )
}

export default Contact