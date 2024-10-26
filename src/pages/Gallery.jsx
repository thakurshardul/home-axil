
import { motion } from "framer-motion"
import { titleVariants} from "../../utils/animation"
const Gallery = () => {
  return (
    <motion.div 
    initial="offscreen"
    whileInView={"onscreen"}
    variants={titleVariants}
    className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      
      <div
      className="flex flex-col gap-4 ">

        <div>
          <img src="/images/image/badroom.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/gallery2.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/gallery.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

      </div>

      <div
      className="flex flex-col gap-4 ">

        <div>
          <img src="/images/image/swiper1.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/gallery11.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/living.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

      </div>

      <div
      className="flex flex-col gap-4 ">

        <div>
          <img src="/images/image/gallery14.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/gallery15.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/gallery12.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

      </div>

      <div
      className="flex flex-col gap-4 ">

        <div>
          <img src="/images/image/gallery7.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/gallery11.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

        <div>
          <img src="/images/image/gallery3.jpg" className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" alt="" />
        </div>

      </div>

    </motion.div>
  )
}

export default Gallery
