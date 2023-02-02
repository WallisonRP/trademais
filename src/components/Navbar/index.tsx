import logo from "../../../public/logo-trade-mais.png";
import { IconButton } from "../IconButton/indes";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between text-lg font-medium font-audiowide text-[#E3E3E3] pb-2 pt-7 w-[88%] mx-auto">
      <a href="">
        <img className="w-20" src={logo} alt="" />
      </a>
      <div className="md:static absolute bg-white md:bg-transparent md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-7">
          <li>
            <a className="hover:bg-gray-500 p-2 rounded-xl" href="">
              HOME
            </a>
          </li>
          <li>
            <a className="hover:bg-gray-500 p-2 rounded-xl" href="">
              SOBRE NOS
            </a>
          </li>
          <li>
            <a className="hover:bg-gray-500 p-2 rounded-xl" href="">
              COMO FUNCIONA
            </a>
          </li>
          <li>
            <a className="hover:bg-gray-500 p-2 rounded-xl" href="">
              CONTATOS
            </a>
          </li>
        </ul>
      </div>

      <button>
        <IconButton />
      </button>
    </nav>
  );
}
