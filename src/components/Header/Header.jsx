import { RiMenuLine } from "react-icons/ri";
import Menu from "../Menu/Menu";
const Header = () => {
  return <header className=" pt-[2.313rem] text-colorText">
    <div className="flex items-center justify-between text-xl font-bold">
      <h1 >E-Commerce</h1>
      <button><RiMenuLine /></button>
    </div>
    <Menu/>
  </header>
}

export default Header