export function Card({ nombre, puesto, imagen }) {
  return (
    <div className="relative">
      <img
        src={`/images/${imagen}`}
        alt={nombre}
        className="w-full rounded-xl"
      />
      <p className="absolute -left-10 top-10 rotate-[-90deg] text-sm text-white tracking-wider uppercase">
        {puesto}
      </p>
      <h2 className="mt-2 font-semibold text-white text-lg">{nombre}</h2>
    </div>
  );
}
