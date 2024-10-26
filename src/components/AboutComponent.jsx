import { descVariants, titleVariants,tagVariants } from "../../utils/animation"
import aboutfront from "/images/image/aboutfront.png"
import {motion} from "framer-motion"
const AboutComponent = () => {
    return (
        <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                >
                    <img src={aboutfront} alt="About" width={900} height={500}
                    className="max-md:hidden"/>
                </motion.div>
                <div className="items-center">
                    <motion.h2 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
                        We are awards Winning Company
                    </motion.h2>
                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={descVariants}
                    className="px-12 tracking-wider uppercase text-gray-400 mt-3">World Award</motion.p>
                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="px-12 pb-4 mt-4">
                        This is a company engaged in a field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have also received many awards from various countries for our work.  
                    </motion.p>
                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="px-12 pb-4">
                        This is a company engaged in a field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have also received many awards from various countries for our work.  
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
