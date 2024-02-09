export function Items({ children }: { children: string }) {
  return (
    <div
      className={`border-2 px-2 rounded-2xl shadow-sm shadow-stone-800 border-stone-700 
      bg-stone-900 text-orange-600`}
    >
      {children}
    </div>
  );
}
