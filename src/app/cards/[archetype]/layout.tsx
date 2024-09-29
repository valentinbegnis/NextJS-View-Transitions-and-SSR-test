export default function ArchetypeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { archetype: string };
}>) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-4xl font-bold">
        {decodeURIComponent(params.archetype)}
      </h1>
      {children}
    </div>
  );
}
