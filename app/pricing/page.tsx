import PricingBands from "@/components/PricingBands";

export const metadata = {
  title: "Trade Show Booth Pricing Las Vegas | Rental & Custom Costs",
  description:
    "Transparent trade show booth pricing for Las Vegas. Rental booth costs from $3k-$8k, custom exhibits from $15k-$100k+. Get accurate pricing for LVCC, Mandalay Bay, Venetian Expo booths.",
  keywords: [
    "trade show booth pricing Las Vegas",
    "booth rental cost Las Vegas",
    "custom booth pricing",
    "exhibit cost Las Vegas",
  ],
};

export default function PricingPage() {
  return (
    <>
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-brand">Pricing</h1>
        <p className="mt-3 text-slate-700">
          These ranges reflect typical Las Vegas projects. Final quotes depend
          on materials, rigging, AV, labor, graphics, and timeline.
        </p>
      </section>
      <PricingBands />
    </>
  );
}
