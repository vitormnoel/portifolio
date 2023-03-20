import Image from "next/image";

function Container({ imagePath, title, tech, ...props }) {
  return (
    <div className="overflow-hidden p-2 flex flex-col items-center">
      <Image
        src={imagePath}
        width={350}
        height={350}
        className=""
        alt={props.alt}
      />

      <div className="">
        <h3 className="pt-2 text-center text-base font-medium">{title}</h3>
        <div className="capitalize flex gap-2 justify-center my-2 text-sm">
          {tech.map((item) => (
            <p className="px-4 text-slate-600 bg-stone-100 rounded" key={item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
