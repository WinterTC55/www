interface WorkItem {
  name: string;
  description: string;
  repo: string;
  specification?: string;
}

export function WorkItems({
  items,
  repoPrefix,
}: {
  items: WorkItem[];
  repoPrefix?: string;
}) {
  return (
    <div className="mt-8 space-y-6">
      {items.map((item) => (
        <article key={item.repo}>
          <h2 className="text-xl font-medium">{item.name}</h2>
          <p className="text-lg">{item.description}</p>
          <p className="flex gap-4">
            <a
              href={`https://github.com/${repoPrefix ?? ""}${item.repo}`}
              className="text-orange-500 hover:text-orange-700 hover:underline"
            >
              Repository
            </a>
            {item.specification && (
              <a
                href={item.specification}
                className="text-orange-500 hover:text-orange-700 hover:underline"
              >
                Specification
              </a>
            )}
          </p>
        </article>
      ))}
    </div>
  );
}
