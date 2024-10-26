import { Link,useLocation } from "react-router-dom"
import { motion } from "framer-motion";
const links=[
    {path:"/",name:"home"},
    {path:"/about",name:"about"},
    {path:"/gallery",name:"gallery"},
    {path:"/projects",name:"projects"},
    {path:"/contact",name:"contact"},

]
const Nav = ({containerStyles,linkStyles,underlineStyles}) => {
    const location=useLocation();
    const path=location.pathname;
  return (
    <nav className={`${containerStyles}`}>
      {
        links.map((link,index)=>{
            return(
                <Link 
                className={`uppercase ${linkStyles}`} 
                to={`${link.path}`} 
                key={index}
                >
                    {link.path==path&&(
                        <motion.span 
                        initial={{y:'-100%'}}
                        animate={{y:0}}
                        transition={{type:'tween'}}
                        layoutId="underline"
                        className={`${underlineStyles}`}
                        />
                    )}{link.name}
                </Link>
            )
        })
      }
    </nav>
  )
}

export default Nav
