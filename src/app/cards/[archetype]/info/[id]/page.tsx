import Image from "next/image";
import CardDescription from "../card-description";
import { Suspense } from "react";
import Link from "next/link";

export default function CardInfo({
  params,
}: {
  params: { archetype: string; id: string };
}) {
  return (
    <div className="flex gap-6 w-full h-full relative">
      <Image
        src={`https://images.ygoprodeck.com/images/cards_small/${params.id}.jpg`}
        alt="Card image"
        width={268}
        height={391}
        quality={100}
        className="self-start object-contain"
      />
      <Suspense
        fallback={
          <div role="status" className="space-y-8 animate-pulse w-full">
            <div className="w-full">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-1/2"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        }
      >
        <CardDescription id={params.id} />
      </Suspense>
      <Link
        href={`/cards/${params.archetype}`}
        className="underline text-white absolute bottom-0"
      >
        Go Back
      </Link>
    </div>
  );
}
