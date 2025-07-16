interface Props {
  title: string;
}

export function FormHeader({ title }: Props) {
  return <h1 className="text-3xl font-bold mb-6">{title}</h1>;
}
