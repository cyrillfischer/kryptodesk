import PartnerTiles from "./PartnerTiles";

export function AffiliateSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold text-center mb-6">
        Empfohlene Partner
      </h2>

      <PartnerTiles />
    </section>
  );
}
