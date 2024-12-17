'use client';

import { _brands, _members, _testimonials } from 'src/_mock';

import { MarketingAbout } from '../about/marketing-about';
import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingTestimonial } from '../marketing-testimonial';
import { MarketingAboutStory } from '../about/marketing-about-story';
import { MarketingLandingFaqs } from '../landing/marketing-landing-faqs';
import { MarketingAboutOurClients } from '../marketing-about-our-clients';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';
import { MarketingAboutCoreValues } from '../about/marketing-about-core-values';

// ----------------------------------------------------------------------

export function MarketingAboutView() {
  return (
    <>
      <MarketingAbout />

      <MarketingAboutCoreValues />

      <MarketingAboutStory />

      <MarketingAboutOurClients brands={_brands.slice(0, 8)} />

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLandingFaqs />

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
