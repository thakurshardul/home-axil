import { motion } from "framer-motion"
import { tagVariants,descVariants,titleVariants } from "../../utils/animation"

const Projects = () => {
  const projects=[
    {
      id:1,
      name:'Drawing room for family time',
      description:'Drawing room with a clean and comfortable design for your family. Charming whit a modern design.',
      image:'/images/image/project3.jpg',
      link:'',
    },
    {
      id:2,
      name:'Kitchen look modern and clean',
      description:'Kitchen look modern and clean. Charming whit a modern design.',
      image:'/images/image/project2.jpg',
      link:'',
    },
    {
      id:3,
      name:'Perfect living room for family time',
      description:'Bedroom with a clean and comfortable design for your family. Charming whit a modern design.',
      image:'/images/image/project4.png',
      link:'',
    },
    
  ]
  return (
    <div>
      <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={titleVariants}
      className="bg-[url('/images/image/backgroundproject.jpg')] bg-center bg-cover">
        <motion.h1 
        initial="offscreen"
        whileInView={"onscreen"}
        variants={tagVariants}
        className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Projects</motion.h1>
      </motion.div>
      <motion.div 
      initial="offscreen"
      whileInView={"onscreen"}
      variants={descVariants}
      className="container grid lg:grid-cols-2 gap-8 py-8 ">
        {
          projects.map((project)=>(
            <div key={project.id} className="relative overflow-hidden rounded-xl group">
              <div>
                <img src={project.image} alt="project-image" width={480} height={380} className="w-full"/>
              </div>
              <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold ">{project.name}</h1>
                <p className="py-4">{project.description}</p>
              </div>
            </div >
          ))
        }
      </motion.div>
    </div>
  )
}

export default Projects
