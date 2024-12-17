'use client';

import { _testimonials, _marketingPosts } from 'src/_mock';

import {
  _jobs,
  _brands,
  _careerPosts,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories,
} from 'src/_mock';

import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { filiaisContactForm } from 'src/sections/_filiais/contact/filiais-contact-form';
import { MarketingServicesInclude } from '../services/marketing-services-include';
import { MarketingServicesBenefits } from '../services/marketing-services-benefits';
import { MarketingServicesHowItWork } from '../services/marketing-services-how-it-work';
import { CareerAbout } from 'src/sections/_career/about/career-about';
import { CareerLandingHotCategories } from 'src/sections/_career/landing/career-landing-hot-categories';
// ----------------------------------------------------------------------

// const latestPosts = _marketingPosts.slice(0, 4);

// ----------------------------------------------------------------------

export function MarketingServicesView() {
  const pageProgress = useScrollProgress();
  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />
      <MarketingServicesHowItWork />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <CareerAbout />

      <filiaisContactForm />
    </>
  );
}
