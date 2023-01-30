interface Props {
  title: string;
}


export function FilledButton({title}: Props) {
  return (
    <button className='py-3 px-9 font-semibold flex bg-[#FFBD08] text-black rounded-3xl font-audiowide'>
      {title}
    </button>
  );
}