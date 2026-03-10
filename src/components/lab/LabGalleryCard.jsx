export default function LabGalleryCard({ title, description }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-lg">
      <div className="flex aspect-video items-center justify-center border-b border-white/10 bg-slate-800 text-sm text-slate-400">
        Visual Placeholder
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </article>
  );
}