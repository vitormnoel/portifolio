import Image from "next/image";

function Container({ imagePath, title, tech, ...props }) {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="relative w-full">
        <Image src={imagePath} width={500} height={500} className="" alt={props.alt}/>
        <p className="absolute bottom-1 left-0 px-4 py-2 bg-white">{title}</p>
      </div>
    </div>
  );
}

export default Container;
