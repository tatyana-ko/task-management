'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '@/components/ui/modal/Modal';
import { useRouter } from 'next/navigation';
import type { TTaskFormData } from '@/types/task.types';
import { taskStore } from '@/stores/task.store';
import { toast } from 'sonner';
import { observer } from 'mobx-react-lite';
import { Field } from '@/components/ui/field/Field';
import { EditTaskSchema } from '@/app/zod-schemas/ZodSchema';

interface Props {
  id: string;
}

export const EditTaskModal = observer(({ id }: Props) => {
  const router = useRouter();
  const task = taskStore.getTaskById(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditTaskSchema),
    defaultValues: { title: task?.title },
  });

  const onSubmit = (data: TTaskFormData) => {
    console.log(data);
    taskStore.updateTask(id, data);

    toast.success('You have successfully updated the task!');
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal title={`Edit task (id: ${id})`} handleClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          registration={register('title')}
          placeholder="add form to page"
          type="text"
          error={errors.title?.message}
          label="Title:"
        />

        <Field
          registration={register('due.date', { valueAsDate: true })}
          type="date"
          error={errors.due?.date?.message}
          label="Date:"
        />
         <Field
          registration={register('due.startTime')}
          type="time"
          error={errors.due?.startTime?.message}
          label="Start time:"
        />
         <Field
          registration={register('due.endTime')}
          type="time"
          error={errors.due?.endTime?.message}
          label="End time:"
        />
        <button
          type="submit"
          className="mt-5 px-3 py-1.5 text-white bg-primary rounded-2xl cursor-pointer shadow"
        >
          Save changes
        </button>
      </form>
    </Modal>
  );
});
