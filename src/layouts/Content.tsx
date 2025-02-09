// import { AspectRatio } from "@/components/ui/aspect-ratio"
import { TikTokEmbed, YouTubeEmbed } from 'react-social-media-embed';
function Content() {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900" id="content">
            <h2 className="text-3xl font-bold mb-6 text-center">Contenido destacado</h2>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="bg-blue-500 p-4 rounded-lg">
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                        <TikTokEmbed url="https://www.tiktok.com/@elponton/video/7408534124270521605?is_from_webapp=1&sender_device=pc&web_id=7359393290788554245" width={325} />
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-4">
                    <div className="bg-green-500 p-4 rounded-lg">
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=jScPYxOxnDo&list=PL5nMKFabss73G4VGmo4YUjBHnVFjnF3MF" width={400} height={200} />
                    </div>
                    {/* Segunda fila de la segunda columna */}
                    <div className="bg-red-500 p-4 rounded-lg">
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=jScPYxOxnDo&list=PL5nMKFabss73G4VGmo4YUjBHnVFjnF3MF" width={400} height={200} />
                    </div>
                </div>
            </div>




        </section>
    )
}

export default Content