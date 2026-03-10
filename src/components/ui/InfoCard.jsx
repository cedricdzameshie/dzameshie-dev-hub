export default function InfoCard({ title, description, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      ) : null}

      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}