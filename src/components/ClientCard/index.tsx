interface ClientCardProps {
  name: string;
  profilePictureUrl: string;
  content: string;
}

export function ClientCard({
  name,
  profilePictureUrl,
  content,
}: ClientCardProps) {
  return (
    <div className="py-3 px-3 bg-[#FAFAFA] text-black rounded-3xl grid place-items-center w-60 h-72">
      <div>
      <img
        className="rounded-full w-[100px] h-[100px]"
        src={profilePictureUrl}
        alt=""
      />
      </div>

      <p className="max-w-[250px] text-center">{content}</p>
      <span className="font-bold text-lg">{name}</span>
    </div>
  );
}
