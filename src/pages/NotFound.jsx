import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-24">
      <div className="container-page text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-4xl md:text-6xl mb-6">Wrong turn</h1>
        <p className="text-muted mb-8 max-w-sm mx-auto">
          That page has driven off. Let's get you back on the road.
        </p>
        <Button to="/" icon={ArrowRight}>
          Back to home
        </Button>
      </div>
    </section>
  );
}
