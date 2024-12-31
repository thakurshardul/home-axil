import {TbArrowUpRight} from "react-icons/tb" 
import {Button} from "../components/ui/button"
import hallImage from "/images/image/hall.png"
import { descVariants, titleVariants ,tagVariants} from "../../utils/animation.js"
import {motion} from "framer-motion"
const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex  lg:justify-between">
        {/* left section */}
        <div className="lg:w-1/2 xl:py-14 lg:py-8"> 
            <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="tracking-widest uppercase">Offer for the best Interior </motion.p>
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={descVariants}
            className="h1">
                Make your home a <br/> piece of art
            </motion.h1>
            <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="pb-6 text-muted-foreground xl:pb-10">
                Change your views with the best interior design. We provide     the best interior design for your Home. Make every moment   beautiful with the best interior design. Change your view     with the best interior design.  We provide the best interior    design for your Home. Make every moment beautiful with the     best interior design. 
            </motion.p>
            <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            >
                <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                    Book now <TbArrowUpRight className="w-5 h-5 ml-2"/>
                </Button>
            </motion.div> 
        </div>
        {/* right image section */}
        <div className="w-1/2 flex justify-center items-center ml-4"> 
            <img src={hallImage}
            width={800}
            height={500}
            className="absolute xl:right-20 2xl:h-[448px] 2xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"/>
        </div>
    </div>
  )
}

export default HeroSection
