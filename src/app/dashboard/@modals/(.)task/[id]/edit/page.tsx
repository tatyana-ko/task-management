import { EditTaskModal } from '@/components/ui/modal/EditTaskModal';

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
