

interface SocialIconProps {
  icon: any;
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
      className={`bg-[#FFBD08] grid place-items-center py-2 px-2 rounded-full`}
    >
      <a href={link}>
        {icon}
      </a>
    </li>
  );
}
