interface ICardDescription {
  data: {
    name: string;
    type: string;
    desc: string;
    atk: number;
    def: number;
    level: number;
    attribute: string;
  }[];
}

export default async function CardDescription({ id }: { id: string }) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
  );
  const info = (await res.json()) as ICardDescription | { error: string };

  if ("error" in info) {
    return <p>Error: {info.error}</p>;
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">{info.data[0].name}</h3>
      <p>{info.data[0].desc}</p>
    </div>
  );
}
