import PageHero from "../components/layout/PageHero";
import ContactInfoGrid from "../components/contact/ContactInfoGrid";
import ContactForm from "../components/contact/ContactForm";
import Reveal from "../components/ui/Reveal";
import { images } from "../data/images";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Location"
        title="Book your appointment"
        description="Request a slot below and we will confirm personally — or reach us instantly on WhatsApp."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <ContactInfoGrid />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          <Reveal className="rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src={images.manLeaningCarNight}
              alt="A freshly detailed car at night outside Casa De Cars"
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl leading-tight mb-3 text-balance">
              Request an appointment
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              Tell us about your car and pick a preferred time. We confirm
              every slot personally — usually within the hour during working
              time.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
