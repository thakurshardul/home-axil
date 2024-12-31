import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import Template from "./Template.jsx"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <Header/>
          <Template>
            <Outlet/>
          </Template>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
