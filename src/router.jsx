import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Projects from "./pages/Projects.jsx";
import App from "./App.tsx"


const router=createBrowserRouter([
    {path:"/",element:<App/>,children:[
        {index:true,element:<Home/>},
        {path:"about",element:<About />},
        {path:"contact",element:<Contact />},
        {path:"gallery",element:<Gallery />},
        {path:"projects",element:<Projects />}
    ]}
]);


export default router;