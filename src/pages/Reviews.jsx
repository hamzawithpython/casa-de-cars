import { MessageCircle } from "lucide-react";
import InstagramIcon from "../components/ui/InstagramIcon";
import PageHero from "../components/layout/PageHero";
import ReviewCard from "../components/reviews/ReviewCard";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { featuredReview, communityReviews } from "../data/reviews";
import { waLink, business } from "../data/business";

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Word from the driver's seat"
        description="We are a young studio, and our community on Instagram is where our customers speak first. Here is what they are saying."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <Reveal className="rounded-2xl overflow-hidden border border-line bg-panel grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src={featuredReview.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-2xl md:text-3xl font-display uppercase leading-snug mb-6 text-balance">
                “{featuredReview.quote}”
              </p>
              <p className="text-cream/90 font-medium">{featuredReview.author}</p>
              <p className="text-sm text-muted mt-1">{featuredReview.context}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl leading-tight mb-4 text-balance">
              Trusted by the community
            </h2>
            <p className="text-muted leading-relaxed">
              From daily drivers to content creators — customers who brought
              their cars in and shared the results with their own followers.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityReviews.map((review, i) => (
              <ReviewCard key={review.name} review={review} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page text-center max-w-xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl leading-tight mb-3 text-balance">
              Experience it yourself
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              The best review is the one you write after your own detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={waLink(
                  "Assalam-o-Alaikum Casa De Cars! I saw your reviews and would like to book."
                )}
                icon={MessageCircle}
              >
                Book on WhatsApp
              </Button>
              <Button
                variant="secondary"
                href={business.instagramUrl}
                icon={InstagramIcon}
              >
                Follow {business.instagramHandle}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
