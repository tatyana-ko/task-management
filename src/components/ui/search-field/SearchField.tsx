import { Search } from 'lucide-react';

interface Props {}

export function SearchField({}: Props) {
  return (
    <label className="relative w-[400px] bg-accent-bg rounded-2xl shadow-sm">
      <input type="search" placeholder="Search Something..." className="w-full px-10 py-2" />
      <Search className="absolute left-[10px] top-[8px]" style={{ color: 'var(--light-text-color)' }} />
    </label>
  );
}
