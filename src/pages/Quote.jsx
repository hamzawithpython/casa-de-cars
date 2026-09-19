import PageHero from "../components/layout/PageHero";
import QuoteBuilder from "../components/quote/QuoteBuilder";

export default function Quote() {
  return (
    <>
      <PageHero
        eyebrow="Instant Quote"
        title="Price it yourself, in 30 seconds"
        description="Pick your vehicle size, choose your services, add the finishing touches — your estimate updates live. Then send it to us on WhatsApp in one tap to lock in your slot."
      />
      <section className="pb-24 md:pb-32">
        <div className="container-page">
          <QuoteBuilder />
          <p className="text-center text-sm text-muted mt-10">
            Also accessorizing your car?{" "}
            <Link to="/accessories" className="text-amber hover:text-amber-light">
              See our mats, tints, badges & more
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
