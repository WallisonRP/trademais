// import shildPlus from '../../assets/icons/shield-plus.svg'
// import shildVerified from '../../assets/icons/shield-verified.svg';
// import clockIcon from '../../assets/icons/clock.svg';

interface Props {
  iconPath: string;
  title: string;
}

export function RectangleIcon({ iconPath, title }: Props) {
  return (
    <div className=" bg-[#E3E3E3] rounded-3xl grid place-items-center ml-[2vw] shadow-rectangle py-8 px-10">
      {/* <div className="w-24 h-24 rounded-full bg-[#BEA55F] grid place-items-center">
      </div> */}
      <img className="rounded-full w-24" src={iconPath} alt="" />

      <p className="text-base font-audiowide mt-4 text-black font-bold">
        {title}
      </p>
    </div>
  );
}
