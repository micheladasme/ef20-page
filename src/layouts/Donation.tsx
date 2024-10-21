import { Button } from "@/components/ui/button"
function Donation(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900" id="social">
          <h2 className="text-3xl font-bold mb-6 text-center">Apoya a nuestro Canal</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0079C1] hover:bg-[#0079C1]/80" onClick={() => window.open('https://paypal.com/donate/?hosted_button_id=UGHG5VLXL3GML', '_blank')} >
              Donar via PayPal
            </Button>
            <Button className="bg-[#e7bb41] hover:bg-[#e7bb41]/80" onClick={() => window.open('https://binance.com/es-LA', '_blank')}>
              Donar via Binance
            </Button>
            <Button className="bg-[#54a282] hover:bg-[#54a282]/80" >
              Donar via USDT
            </Button>
          </div>
        </section>
    )
}

export default Donation