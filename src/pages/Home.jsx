import { useState ,useEffect} from "react"
import AboutComponent from "../components/AboutComponent"
import CatalogueSection from "../components/CatalogueSection"
import CatalogueSwiperSection from "../components/CatalogueSwiperSection"
import CompanySection from "../components/CompanySection"
import ContactSection from "../components/ContactSection"
import HeroSection from "../components/HeroSection"
import Loader from "../components/Loader"

const Home = () => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])

  return (
    <>{loading?<Loader/>:<><HeroSection/>
      <CompanySection/>
      <AboutComponent/>
      <CatalogueSection/>
      <CatalogueSwiperSection/>
      <ContactSection/></>}
      
    </>
  )
}

export default Home
