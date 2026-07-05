"use client";

type SearchBarProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:outline-none"
    />
  );
}