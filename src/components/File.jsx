export default function File({ name }) {
  return (
    <div className="text-lg flex items-center gap-1 p-1">
      <span className="material-symbols-outlined text-slate-400">draft</span>
      {name}
    </div>
  );
}
