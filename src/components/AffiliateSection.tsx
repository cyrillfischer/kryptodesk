import PartnerTiles from "./PartnerTiles";

export function AffiliateSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Empfohlene Partner
      </h2>

      <PartnerTiles />
    </section>
  );
}
