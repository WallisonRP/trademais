interface SocialIconProps {
  icon: string;
  link: string;
  paddingX: number;
  paddingY: number;
  iconSize: number;
}

export function SocialIcon({
  icon,
  link,
  paddingX,
  paddingY,
  iconSize,
}: SocialIconProps) {
  return (
    <li
      className={`bg-[#FFBD08] grid place-items-center py-4 px-${paddingX} rounded-full mr-5`}
    >
      <a href={link}>
        <img className={`md:w-${iconSize}`} src={icon} alt="" />
      </a>
    </li>
  );
}
