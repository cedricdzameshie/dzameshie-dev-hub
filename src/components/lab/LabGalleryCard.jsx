export default function LabGalleryCard({ title, description, image, onClick }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-950/30">
      
      {/* Clickable image */}
      <div
        className="aspect-video cursor-pointer overflow-hidden border-b border-white/10 bg-slate-800"
        onClick={onClick}
      >
        <img
          src={image}
          alt={`${title} screenshot`}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </article>
  );
}