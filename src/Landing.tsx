import Header from "./layouts/Header"
import Banner from "./layouts/Banner"
import About from "./layouts/About"
import Social from "./layouts/Social";
import Footer from "./layouts/Footer";
import Donation from "./layouts/Donation";
import Contact from "./layouts/Contact";
import Videos from "./layouts/Videos";
// import Content from "./layouts/Content";

import Mentoring from "./layouts/Mentoring";
import Teacher from "./layouts/Teacher";
function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header></Header>
      <main className="flex-1">
        <Banner />
        <About />
        <Teacher />
        <Mentoring/>
        <Videos/>
        {/* <Content /> */}
        <Contact />
        <Social />
        <Donation />
      </main>
     <Footer />
    </div>
  )
}

export default Landing;