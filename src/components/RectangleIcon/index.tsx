// import shildPlus from '../../assets/icons/shield-plus.svg'
// import shildVerified from '../../assets/icons/shield-verified.svg';
// import clockIcon from '../../assets/icons/clock.svg';

interface Props {
  iconPath: string;
  title: string;
}

export function RectangleIcon({ iconPath, title }: Props) {
  return (
    <div className=" bg-[#E3E3E3] rounded-3xl grid place-items-center ml-[2vw] shadow-rectangle xl:py-8 xl:px-10 py-6 px-8">
      {/* <div className="w-24 h-24 rounded-full bg-[#BEA55F] grid place-items-center">
      </div> */}
      <img className="rounded-full xl:w-24 w-16" src={iconPath} alt="" />
      
      <p className="xl:text-base text-sm font-audiowide mt-4 text-black font-bold">
        {title}
      </p>
    </div>
  );
}
