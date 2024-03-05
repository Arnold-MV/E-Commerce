import { RiCloseCircleFill } from "react-icons/ri";
const Menu = () => {
  return (
    <nav className="flex absolute top-0 right-0 flex-col w-64 gap-[118px] px-4 bgCard py-9 border border-colorIconIdle rounded-l-xl">
      <button className="ml-auto text-2xl">
        <RiCloseCircleFill />
      </button>
      <ul className="flex flex-col gap-10 mx-auto">
        <li><a href="">Contacto</a></li>
        <li><a href="">Sobre nosotros</a></li>
        <li><a href="">Mas información</a></li>
        <li><a href="">Pedidos Custom </a></li>
      </ul>
    </nav>
  )
}

export default Menu