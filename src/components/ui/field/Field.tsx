import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { clsx } from 'clsx';

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

export function Field({ label, error, registration, ...props }: IFieldProps) {
  return (
    <>
      <label>
        <span className="text-sm block mb-2 text-light-text-color font-semibold">{label}</span>
        <input
          className={clsx(
            'w-full px-3 py-2 bg-transparent border-b border-b-light-text-color',
            error ? 'border-error' : 'border-transparent',
          )}
          {...registration}
          {...props}
        />
      </label>
      {error && <span className="block mt-1 text-error">{error}</span>}
    </>
  );
}
