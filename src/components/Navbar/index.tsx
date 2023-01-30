import logo from '../../assets/images/logo-trade-mais.png';
import { IconButton } from '../IconButton/indes';


export function Navbar() {
  return (
    <nav className="flex justify-between text-lg font-medium font-audiowide text-[#E3E3E3] pb-2 pt-7">
      <a href=""><img className='w-32' src={logo} alt="" /></a>
      <ul className="grid grid-flow-col gap-4 place-content-center">
        <li className="p-2"><a href="">HOME</a></li>
        <li className="p-2"><a href="">SOBRE NOS</a></li>
        <li className="p-2"><a href="">COMO FUNCIONA</a></li>
        <li className="p-2"><a href="">CONTATOS</a></li>
      </ul>

      <button><IconButton /></button>
    </nav>
  );
}