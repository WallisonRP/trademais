import whatsappIcon from '../../assets/icons/whatsapp-icon.svg';


export function IconButton() {
  return (
    <button className='py-2 px-4 flex bg-[#FFBD08] text-black rounded-3xl'>
      <span className='pr-3'>Whatsapp</span>
      <img src={whatsappIcon} alt="" />
    </button>
  );
}