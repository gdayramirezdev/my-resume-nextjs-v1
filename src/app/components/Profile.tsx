import Image from "next/image";

type ProfileProps = {
  image: string;
  name: string;
  role: string;
  address: string;
}

export function Profile(props: ProfileProps) {
  const { image, name, role, address} = props;
  return (
    <>
      <Image
        id="avatar"
        className="rounded-lg"
        src={image}
        width={100}
        height={100}
        alt={name}
      />
      <div className="flex flex-col space-y-2" id="contact">
        <h1 className="text-lg">{name}</h1>
        <h2 className="text-sm">{role}</h2>
        <span className="text-sm">
          {address}
        </span>
      </div>
    </>
  );
}
