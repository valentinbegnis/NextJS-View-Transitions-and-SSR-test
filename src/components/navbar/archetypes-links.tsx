"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

export default function ArchetypesLinks({
  archetypes,
}: {
  archetypes: Array<{ archetype_name: string }>;
}) {
  const params = useParams();
  const { archetype } = params;

  const [page, setPage] = useState(1);

  const perPage = 30;
  const offset = (page - 1) * perPage;
  const limit = offset + perPage;
  const totalPages = Math.ceil(archetypes.length / perPage);

  const bottomPages = useMemo(() => {
    const maxPagesToShow = 5;
    const half = Math.floor(maxPagesToShow / 2);

    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, page + half);

    // Asegurarse de que el rango siempre incluya 5 páginas si es posible
    if (end - start < maxPagesToShow - 1) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxPagesToShow - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxPagesToShow + 1);
      }
    }

    // Si la página actual es cercana a la 1, forzar el 1 a estar visible
    if (start <= 1) {
      start = 1;
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [page, totalPages]);

  if (Array.isArray(archetype)) return null;

  return (
    <aside className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium underline">Archetypes</h2>
      <nav>
        <ul className="w-max">
          {archetypes.slice(offset, limit).map(({ archetype_name }) => (
            <li key={archetype_name}>
              <Link
                href={`/cards/${archetype_name}`}
                className={`hover:underline ${
                  decodeURIComponent(archetype) === archetype_name
                    ? "text-blue-500 underline"
                    : ""
                }`}
              >
                {archetype_name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2 items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage((prevValue) => prevValue - 1)}
          className="flex items-center justify-center rounded-md w-5 h-5 bg-slate-600 hover:bg-slate-700 disabled:text-gray-500 disabled:bg-slate-800"
        >
          {"<"}
        </button>
        {Math.abs(bottomPages[2] - 2) > 1 && <span>...</span>}
        {bottomPages.map((currentPage) => (
          <button
            key={currentPage}
            className={`flex p-1 items-center hover:underline disabled:text-gray-500 ${
              page === currentPage ? "underline" : ""
            }`}
            onClick={() => setPage(currentPage)}
            disabled={page === currentPage}
          >
            {currentPage}
          </button>
        ))}
        {Math.abs(bottomPages[2] + 2) < totalPages && <span>...</span>}
        <button
          disabled={page * perPage >= archetypes.length}
          onClick={() => setPage((prevValue) => prevValue + 1)}
          className="flex items-center justify-center rounded-md w-5 h-5 bg-slate-600 hover:bg-slate-700 disabled:text-gray-500 disabled:bg-slate-800"
        >
          {">"}
        </button>
      </div>
    </aside>
  );
}
