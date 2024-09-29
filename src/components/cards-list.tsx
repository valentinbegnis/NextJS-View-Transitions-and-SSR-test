import Image from "next/image";
import AddToCart from "@/app/cards/[archetype]/add-to-cart";
import { Link } from "next-view-transitions";

interface ArchetypeCards {
  data: {
    id: number;
    name: string;
    card_images: {
      image_url_small: string;
    }[];
  }[];
}

export default async function CardsList({ archetype }: { archetype: string }) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}`
  );
  const cards = (await res.json()) as ArchetypeCards | { error: string };

  if ("error" in cards) {
    return <p>Error: {cards.error}</p>;
  }

  return (
    <ul className="grid grid-cols-5 gap-6 w-full">
      {cards.data.map((card) => (
        <li key={card.id} className="flex flex-col gap-2 w-[268px]">
          <Link href={`/cards/${archetype}/info/${card.id}`}>
            <Image
              src={card.card_images[0].image_url_small}
              alt={card.name}
              width={268}
              height={391}
              quality={100}
              className="transition-transform hover:-translate-y-1"
            />
          </Link>
          <AddToCart />
        </li>
      ))}
    </ul>
  );
}
