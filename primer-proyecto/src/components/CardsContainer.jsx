import { Card } from "./Card";
import { team } from "../data/team";

export function CardsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16">
      {team.map((persona, i) => (
        <div key={i} className={`${i % 2 === 1 ? "mt-20" : ""}`}>
          <Card {...persona} />
        </div>
      ))}
    </div>
  );
}
