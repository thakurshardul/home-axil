import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} width={160} height={55} alt={"logo"}/>
    </Link>
  )
}

export default Logo
