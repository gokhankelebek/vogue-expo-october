const venues = [
  "LVCC",
  "Mandalay Bay",
  "Venetian Expo",
  "Caesars Forum",
  "World Market Center",
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-slate-200 py-5">
      <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm uppercase tracking-[0.2em] text-slate-500">
        <span className="text-brand-accent">Las Vegas Locals · Building At</span>
        {venues.map((venue) => (
          <span key={venue}>{venue}</span>
        ))}
      </div>
    </div>
  );
}
