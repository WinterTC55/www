type WorkItemStatus = "standard" | "technical-report" | "proposal" | "registry";

interface WorkItem {
  name: string;
  description: string;
  repo: string;
  specification?: string;
  publication?: string;
  status?: WorkItemStatus;
}

const statusOrder: Record<WorkItemStatus, number> = {
  standard: 0,
  "technical-report": 1,
  proposal: 2,
  registry: 3,
};

const statusLabels: Record<WorkItemStatus, string> = {
  standard: "Standard",
  "technical-report": "Technical Report",
  proposal: "Proposal",
  registry: "Registry",
};

const publicationPaths: Partial<Record<WorkItemStatus, string>> = {
  standard: "standards",
  "technical-report": "technical-reports",
};

function publicationUrl(status: WorkItemStatus, id: string): string {
  const path = publicationPaths[status];
  return `https://ecma-international.org/publications-and-standards/${path}/${id}/`;
}

export function WorkItems({
  items,
  repoPrefix,
}: {
  items: WorkItem[];
  repoPrefix?: string;
}) {
  const sorted = [...items].sort(
    (a, b) =>
      (statusOrder[a.status ?? "proposal"] ?? 99) -
      (statusOrder[b.status ?? "proposal"] ?? 99)
  );

  return (
    <div className="mt-8 space-y-6">
      {sorted.map((item) => (
        <article key={item.repo}>
          <h2 className="text-xl font-medium">
            {item.name}
            {item.status && (
              <>
                <span className="mx-2 text-sm font-normal text-neutral-300">|</span>
                <span className="text-sm font-normal text-neutral-500">
                  {statusLabels[item.status]}
                </span>
              </>
            )}
          </h2>
          <p className="text-lg">{item.description}</p>
          <p className="flex gap-4">
            <a
              href={`https://github.com/${repoPrefix ?? ""}${item.repo}`}
              className="text-orange-500 hover:text-orange-700 hover:underline"
            >
              Repository
            </a>
            {item.publication && item.status && (
              <a
                href={publicationUrl(item.status, item.publication)}
                className="text-orange-500 hover:text-orange-700 hover:underline"
              >
                {statusLabels[item.status]}
              </a>
            )}
            {item.specification && (
              <a
                href={item.specification}
                className="text-orange-500 hover:text-orange-700 hover:underline"
              >
                {item.publication ? "Draft" : "Specification"}
              </a>
            )}
          </p>
        </article>
      ))}
    </div>
  );
}
