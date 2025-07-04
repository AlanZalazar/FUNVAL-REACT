import { Card } from "./Card";
import { team } from "../data/team";

export function CardsContainer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-16">
      {team.map((persona, i) => (
        <div
          key={i}
          className={`
            ${i % 2 === 1 ? "mt-[35%] md:mt-0" : ""}
            ${i % 3 === 1 ? "md:mt-[20%]" : ""}
          `}
        >
          <Card {...persona} />
        </div>
      ))}
    </div>
  );
}
