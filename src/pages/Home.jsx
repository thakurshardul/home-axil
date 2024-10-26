import AboutComponent from "../components/AboutComponent"
import CatalogueSection from "../components/CatalogueSection"
import CatalogueSwiperSection from "../components/CatalogueSwiperSection"
import CompanySection from "../components/CompanySection"
import ContactSection from "../components/ContactSection"
import HeroSection from "../components/HeroSection"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <CompanySection/>
      <AboutComponent/>
      <CatalogueSection/>
      <CatalogueSwiperSection/>
      <ContactSection/>
    </>
  )
}

export default Home
