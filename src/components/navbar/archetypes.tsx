import ArchetypesLinks from "./archetypes-links";

export default async function ArchetypesNavbar() {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/archetypes.php");
  const archetypes = (await res.json()) as Array<{ archetype_name: string }>;

  return <ArchetypesLinks archetypes={archetypes} />;
}
