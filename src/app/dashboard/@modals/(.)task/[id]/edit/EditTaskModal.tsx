'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '@/components/ui/modal/Modal';
import { EditTaskSchema } from './zod-schema/ZodSchema';
import { useRouter } from 'next/navigation';
import type { TTaskFormData } from '@/types/task.types';

interface Props {
  id: string;
}

export function EditTaskModal({ id }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(EditTaskSchema) });

  const onSubmit = (data: TTaskFormData) => {
    console.log(data);
    router.back();
  };

  return (
    <Modal title={`Edit task (id: ${id})`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        <label className="flex flex-col gap-1">
          <span>Title: </span>
          <input
            type="text"
            {...register('title')}
            placeholder="add form to page"
            className="text-sm py-2 border-b"
          />
          <span className="text-sm text-red-500">{errors.title?.message}</span>
        </label>

        <label className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span>New date:</span>
            <input type="date" {...register('due', { valueAsDate: true })} />
          </div>
          <span className="text-sm text-red-500">{errors.due?.message}</span>
        </label>

        <button
          type="submit"
          className="block px-3 py-1.5 text-white bg-primary rounded-2xl cursor-pointer shadow"
        >
          Save changes
        </button>
      </form>
    </Modal>
  );
}
