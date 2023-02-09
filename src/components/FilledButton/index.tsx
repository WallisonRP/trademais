interface Props {
  title: string;
}

export function FilledButton({ title }: Props) {
  return (
    <button className="uppercase py-3 md:px-9 px-5 font-semibold bg-[#FFBD08] text-black rounded-3xl font-audiowide">
      {title}
    </button>
  );
}
