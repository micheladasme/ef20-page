import { PlayCircle } from 'lucide-react';

const videos = [
    {
        id: "1",
        title: "Evolución de las criptomonedas.",
        thumbnail: "https://i.ytimg.com/vi/jScPYxOxnDo/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=jScPYxOxnDo&list=PL5nMKFabss73G4VGmo4YUjBHnVFjnF3MF"
    },
    {
        id: "2",
        title: "¿Cómo registrarse y colocar los indicadores en tradingview?",
        thumbnail: "https://i.ytimg.com/vi/k545O-x7TWQ/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=k545O-x7TWQ"
    },
    {
        id: "3",
        title: "Proyectando el ATH de 216 monedas para el bullrun 2024-2025.",
        thumbnail: "https://i.ytimg.com/vi/TSJNEwtHfQo/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=TSJNEwtHfQo&list=PL5nMKFabss72DIuMuw_RJ4zOODyDEXIjR&index=3"
    }
];

function FeaturedVideos() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t  from-black via-gray-900 to-black" id="videos">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
                    Videos Destacados
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Aprende más sobre el mundo de las criptomonedas con nuestros videos educativos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div key={video.id} className="group relative">
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle className="w-16 h-16 text-white" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg text-center font-semibold text-yellow-400 mb-1">
                                        {video.title}
                                    </h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/@EducacionFinanciera2.0/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
                    >
                        <PlayCircle className="w-5 h-5 mr-2" />
                        Ver más videos
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FeaturedVideos;