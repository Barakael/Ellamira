import type { Metadata } from "next";
import { VehicleBrowser } from "@/components/vehicles/VehicleBrowser";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Vehicles",
  description:
    "Toyota, Nissan, BMW, Mercedes-Benz, Mazda, FAW, HOWO, Mitsubishi, Hyundai, Shacman, Scania, Ford and TATA vehicles sourced to order by Ellamira Trading.",
};

export default function VehiclesPage() {
  return (
    <>
      <PageIntro
        label="Magari yanayouzika"
        title="Brands customers ask for most."
        lede="Filter by marque to browse representative examples — not yard stock. Tell us the specification and we confirm availability and a quotation."
      />
      <section className="bg-mist py-12 md:py-16">
        <Container>
          <VehicleBrowser />
        </Container>
      </section>
    </>
  );
}
