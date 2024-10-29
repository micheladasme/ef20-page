import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Check, Copy } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import qrBinance from "../assets/qrBinanceEF.png"
import qrWallet from "../assets/qrWalletEF.png"
import { useState } from "react"

function Donation() {
  const [isCopied, setIsCopied] = useState(false);
  const [inputWalletValue] = useState('TNjeeTYqCvU4rGJPrpXecXYXgoJ7SjPcZC');
  const iconClassCopy = isCopied ? "hidden" : "";
  const iconClassCheck = isCopied ? "" : "hidden";
  const handleClick = () => {
      navigator.clipboard.writeText(inputWalletValue);
      setIsCopied(!isCopied);
  };
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900" id="donation">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Apoya a nuestro Canal</h2>
      <p className="text-center text-gray-400 mb-8 mx-2">
          Apoya a Rafael para que siga creando <strong>contenido gratuito y de calidad.</strong>
        </p>
      <div className="flex flex-wrap justify-center gap-4">

        <Card className="bg-[#0079C1] hover:bg-[#0079C1]/80 border-0" onClick={() => window.open('https://paypal.com/donate/?hosted_button_id=UGHG5VLXL3GML', '_blank')}>
          <CardHeader>
            <img className="h-8 w-8" src="https://cdn.simpleicons.org/paypal/white" />
          </CardHeader>
          <CardContent>
            <p className="text-white font-medium">Donar via PayPal</p>
          </CardContent>
        </Card>
        <Dialog>
          <DialogTrigger className="flex flex-col">
            {/* <Button className="bg-[#e7bb41] hover:bg-[#e7bb41]/80">
              <img className="h-5 w-5" src="https://cdn.simpleicons.org/binance/white" />
              Donar via Binance
            </Button> */}
            <>
              <Card className="bg-[#e7bb41] hover:bg-[#e7bb41]/80 border-0">
                <CardHeader>
                  <img className="h-8 w-8" src="https://cdn.simpleicons.org/binance/white" />
                </CardHeader>
                <CardContent>
                  <p className="text-white font-medium">Donar via Binance</p>
                </CardContent>
              </Card>
            </>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Donación via Binance</DialogTitle>
              <DialogDescription>
                Escanea el QR para realizar una donación desde Binance.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center space-x-2">
              <img className="w-52 h-52" src={qrBinance} alt="" />
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cerrar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <>
              <Card className="bg-[#54a282] hover:bg-[#54a282]/80 border-0">
                <CardHeader>
                  <img className="h-8 w-8" src="https://cdn.simpleicons.org/tether/white" />
                </CardHeader>
                <CardContent>
                  <p className="text-white font-medium">Donar con USDT</p>
                </CardContent>
              </Card>
            </>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Billetera USDT/TRC20</DialogTitle>
              <DialogDescription>
                Escanea el QR o copia esta dirección y envía tus USDT por la red de <strong>TRON (TRC20)</strong> .
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center space-x-2">
              <img className="w-52 h-52" src={qrWallet} alt="" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <div>
                  <Input
                    id="link"
                    className="text-xs"
                    defaultValue={inputWalletValue}
                    readOnly
                  />
                </div>
              </div>
              <Button type="button" size="sm" className="px-3" onClick={handleClick}>
                <span className="sr-only">Copiar</span>
                <span className={iconClassCopy}><Copy className="h-4 w-4"/></span>
                <span className={iconClassCheck}><Check className="h-4 w-4 text-green-600"/></span>
              </Button>
            </div>
            <Label className="mt-2 text-xs text-muted-foreground">
              <strong className="text-black text-sm"> Red: TRON (TRC20)</strong>
            </Label>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cerrar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Donation