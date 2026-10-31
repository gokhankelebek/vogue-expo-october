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
      <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-500 sm:gap-x-10">
        <span className="w-full text-center font-semibold text-brand sm:w-auto">Las Vegas Locals · Building At</span>
        {venues.map((venue) => (
          <span key={venue}>{venue}</span>
        ))}
      </div>
    </div>
  );
}
