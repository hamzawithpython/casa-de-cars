import { processSteps } from "../../data/homeContent";
import Reveal from "../ui/Reveal";

export default function HowItWorks() {
  return (
    <section className="bg-panel py-24 md:py-32 border-y border-line">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl leading-tight text-balance">
            From booked to gleaming
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="pt-6 border-t border-line2">
                <p className="font-display text-4xl md:text-5xl text-amber mb-4">
                  {step.number}
                </p>
                <h3 className="text-lg tracking-wide mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
