import { ArchetypeCards } from "@/types";
import CardsList from "./cards-list";

export default async function CardsListServer({ archetype }: { archetype: string }) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}`
  );
  const cards = (await res.json()) as ArchetypeCards | { error: string };

  if ("error" in cards) {
    return <p>Error: {cards.error}</p>;
  }

  return (
    <CardsList archetype={archetype} cards={cards}  />
  );
}
