import {ThemeToggle} from "./ThemeToggle.tsx"
import Logo from "./Logo.jsx"
import Nav from "./Nav.jsx"
import MobileNavigation from "./MobileNavigation.jsx"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Header = () => {
  const [header,setHeader]=useState(false);
  const pathname=useLocation().pathname;
  useEffect(()=>{
    const scrollYPos=window.addEventListener("scroll",()=>{
        window.scrollY> 50? setHeader(true): setHeader(false);
    })
    return ()=>window.removeEventListener("scroll",scrollYPos);
  });
    return (
    <header
    className={`${
        header
        ?"py-4 bg-tertiary shadow-lg dark:bg-accent"
        :"py-6 dark:bg-transparent"} sticky top-0 z-30 transition-all `}
    >
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <Logo/>
                <div className="flex items-center gap-x-6">
                    <Nav containerStyles="hidden xl:flex gap-x-8 items-center"
                    linkStyles="relative hover:text-primary transition-all"
                    underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"/>
                    <ThemeToggle/>
                    <div className="xl:hidden">
                        <MobileNavigation/>
                    </div>
                </div>
            </div>
        </div>

      
    </header>
  )
}

// export default Header
// import { ThemeToggle } from "./ThemeToggle.tsx";
// import Logo from "./Logo.jsx";
// import Nav from "./Nav.jsx";
// import MobileNavigation from "./MobileNavigation.jsx";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const Header = () => {
//   const [header, setHeader] = useState(false);
//   const pathname = useLocation().pathname;

//   useEffect(() => {
//     const handleScroll = () => {
//       window.scrollY > 50 ? setHeader(true) : setHeader(false);
//     };

//     window.addEventListener("scroll", handleScroll);
    
//     // Cleanup event listener on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Add empty dependency array to run only once on mount

//   return (
//     <header
//       className={`${
//         header
//           ? "py-4 bg-tertiary shadow-lg dark:bg-accent"
//           : "py-6 dark:bg-transparent"
//       } sticky top-0 z-30 transition-all ${pathname==="/"?"bg-[#fff]":""}`}
//     >
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between">
//           <Logo />
//           <div className="flex items-center gap-x-6">
//             <Nav
//               containerStyles="hidden xl:flex gap-x-8 items-center"
//               linkStyles="relative hover:text-primary transition-all"
//               underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
//             />
//             <ThemeToggle />
//             <div className="xl:hidden">
//               <MobileNavigation />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

 export default Header;

