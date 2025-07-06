import { EditTaskModal } from './EditTaskModal';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ModalPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <EditTaskModal id={id} />
    </div>
  );
}
