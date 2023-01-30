// import shildPlus from '../../assets/icons/shield-plus.svg'
// import shildVerified from '../../assets/icons/shield-verified.svg';
// import clockIcon from '../../assets/icons/clock.svg';

interface Props {
  iconPath: string;
  title: string;
}

export function RectangleIcon({iconPath, title}: Props) {
  return (
    <div className="py-10 w-60 bg-[#E3E3E3] rounded-3xl grid place-items-center ml-16 shadow-rectangle">
      <div className="w-24 h-24 rounded-full bg-[#BEA55F] grid place-items-center">
      <img className="w-12" src={iconPath} alt="" />
      </div>
      
      <p className="text-xl font-audiowide mt-6 text-black font-bold -tracking-tighter">{title}</p>
    </div>
  );
}