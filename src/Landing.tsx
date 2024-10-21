import Header from "./layouts/Header"
import Banner from "./layouts/Banner"
import About from "./layouts/About"
import Social from "./layouts/Social";
import Footer from "./layouts/Footer";
import Donation from "./layouts/Donation";
import Contact from "./layouts/Contact";
function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header></Header>
      <main className="flex-1">
        <Banner />
        <About />
        <Contact />
        <Social />
        <Donation />

      </main>
     <Footer />
    </div>
  )
}

export default Landing;