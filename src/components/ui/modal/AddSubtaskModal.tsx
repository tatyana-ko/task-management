'use client';

import { taskStore } from '@/stores/task.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from './Modal';
import { useForm } from 'react-hook-form';
import { Field } from '../field/Field';
import { toast } from 'sonner';
import { AddSubtaskSchema } from '@/zod-schemas/task.schema';

interface Props {
  id: string;
  handleClose: () => void;
}

export function AddSubtaskModal({ id, handleClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddSubtaskSchema),
  });

  const onSubmit = (data: { title: string }) => {
    taskStore.addSubtask(id, data.title);
    toast.success('You have successfully updated the task!');
    handleClose();
  };

  return (
    <Modal title="Add subtask" handleClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          registration={register('title')}
          placeholder="add titles for buttons"
          type="text"
          error={errors.title?.message}
          label="Title of subtask:"
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
}
