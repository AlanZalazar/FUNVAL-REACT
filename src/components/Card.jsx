export function Card({ nombre, puesto, imagen }) {
  return (
    <div className="relative">
      <img src={`/images/${imagen}`} alt={nombre} className="w-full" />
      <p className="absolute top-1 right-0 transform -translate-y-0 translate-x-full rotate-90 origin-left whitespace-nowrap uppercase tracking-wider -m-2 font-serif text-[8px] md:text-[14px] lg:text-[18px] md:top-0 lg:-m-3">
        {puesto}
      </p>
      <h2 className=" font-semibold text-[14px] md:text-[20px] lg:text-[26px]">
        {nombre}
      </h2>
    </div>
  );
}
