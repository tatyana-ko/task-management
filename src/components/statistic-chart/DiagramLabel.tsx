import type { LabelProps } from 'recharts';
export function DiagramLabel({ x = 350, y = 0 }: LabelProps) {
  return (
    <g>
      <foreignObject
        x={x}
        y={y}
        textAnchor="middle"
        fill="black"
        fontSize={14}
        width={100}
        height={22}
        className="text-center text-white font-medium bg-violet-500 rounded-2xl"
      >
        <div>38 Projects</div>
      </foreignObject>
    </g>
  );
}
