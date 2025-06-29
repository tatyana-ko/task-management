interface Props {
  active?: boolean;
  payload?: Array<{ value: number }>;
}

export function DiagramTooltip({ active, payload }: Props) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="px-2 py-1 bg-violet-500 text-white rounded-2xl">
      {payload[0].value} Projects
    </div>
  );
}
