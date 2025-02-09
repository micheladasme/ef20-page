import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
function Social() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-black to-gray-900" id="social">
    
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Síguenos en Redes Sociales
        </h2>
        <p className="text-center text-gray-400 mb-8 mx-2">
          Únete a nuestra comunidad y accede a nuestro contenido más reciente.
        </p>
        <div className="flex justify-center space-x-3 md:space-x-8">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-red-600 text-white hover:bg-red-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full outline outline-white"
                  onClick={() => window.open('https://www.youtube.com/@EducacionFinanciera2.0', '_blank')}
                  aria-label="Canal de YouTube"
                >
                  <img className="h-7 max-w-7" src="https://cdn.simpleicons.org/youtube/white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={9}>
                <p>@EducacionFinanciera2.0</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-white text-white hover:bg-gray-300 w-14 h-14 sm:w-16 sm:h-16 px-0 rounded-full outline outline-white"
                  onClick={() => window.open('https://t.me/educacionfinancieratelegram', '_blank')}
                  aria-label="Canal de Telegram"
                >
                  <img className="h-16 w-16" src="https://cdn.simpleicons.org/telegram/[#26A5E4]/white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={9}>
                <p>educacionfinancieratelegram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-black text-white hover:bg-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full outline outline-white"
                  onClick={() => window.open('https://x.com/rafaelponton', '_blank')}
                  aria-label="Canal de X"
                >
                  <img className="h-7 max-w-7" src="https://cdn.simpleicons.org/x/white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={9}>
                <p>@rafaelponton</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-black text-white hover:bg-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-t-[#08f7f0] border-l-[#08f7f0] border-b-[#ff0855] border-r-[#ff0855]"
                  onClick={() => window.open('https://www.tiktok.com/@educacionfinanciera2.0', '_blank')}
                  aria-label="Canal de TikTok"
                >
                  <img className="h-7 max-w-7" src="https://cdn.simpleicons.org/tiktok/white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={9}>
                <p>@educacionfinanciera2.0</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="hover:bg-gray-300 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full outline outline-white"
                  onClick={() => window.open('https://www.instagram.com/educacionfinanciera2_0/', '_blank')}
                  aria-label="Canal de Instagram"
                >
                  <img className="h-7 max-w-7" src="https://cdn.simpleicons.org/instagram/white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={9}>
                <p>educacionfinanciera2_0</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
    </section>
  )
}

export default Social

