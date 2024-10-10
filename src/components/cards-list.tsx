'use client'

import AddToCart from "@/app/cards/[archetype]/add-to-cart";
import { ArchetypeCards } from "@/types";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface CardsList {
  cards: ArchetypeCards;
  archetype: string;
}

export default function CardsList({ cards, archetype }: CardsList) {
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
  )
}
