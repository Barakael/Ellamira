import { getFeaturedVehicles } from "@/content/vehicles";
import { Chapter } from "@/components/ui/Chapter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FeaturedVehicles() {
  const featured = getFeaturedVehicles();

  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Chapter
            label="Showroom"
            title="Vehicles we source."
            lede="Representative examples. Each one is sourced to order, and availability is confirmed when you enquire."
          />
          <ButtonLink href="/vehicles" variant="ghost">
            View the showroom
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featured.map((vehicle, index) => (
            <Reveal key={vehicle.slug} delay={index * 0.06}>
              <VehicleCard vehicle={vehicle} large={index === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
