import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import WelcomPopup from "@/components/WelcomPopup"

const page = () => {
  return (
    <>
      <Navbar />
      <WelcomPopup />
      <HeroSection />
      <Footer />
    </>
  )
}

export default page