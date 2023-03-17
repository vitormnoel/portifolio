import Image from "next/image";

function Container({ imagePath, title, tech, ...props }) {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="relative rounded-full w-full">
        <Image src={imagePath} width={500} height={500} className=" hover:hidden" alt={props.alt}/>
        <p className="absolute bottom-1 px-4 py-2 bg-white">{title}</p>
      </div>
    </div>
  );
}

export default Container;
