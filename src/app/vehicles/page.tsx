import type { Metadata } from "next";
import { VehicleBrowser } from "@/components/vehicles/VehicleBrowser";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Vehicles",
  description:
    "Passenger cars, SUVs, pickups, trucks, buses and specialized vehicles sourced to order by Ellamira Trading.",
};

export default function VehiclesPage() {
  return (
    <>
      <PageIntro
        label="Our business"
        title="A showroom of vehicles we source."
        lede="These are representative examples, not yard stock. Tell us the specification and we confirm availability and a quotation."
      />
      <section className="bg-mist py-12 md:py-16">
        <Container>
          <VehicleBrowser />
        </Container>
      </section>
    </>
  );
}
