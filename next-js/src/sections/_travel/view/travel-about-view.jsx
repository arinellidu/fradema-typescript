'use client';

import { _brands, _members, _filiaisPosts, _testimonials } from 'src/_mock';

import { filiaisTeam } from '../filiais-team';
import { filiaisAbout } from '../about/filiais-about';
import { filiaisNewsletter } from '../filiais-newsletter';
import { filiaisOurClients } from '../filiais-our-clients';
import { filiaisTestimonial } from '../filiais-testimonial';
import { filiaisLatestPosts } from '../posts/filiais-latest-posts';
import { filiaisAboutOurVision } from '../about/filiais-about-our-mission';

// ----------------------------------------------------------------------

const latestPosts = _filiaisPosts.slice(0, 4);

// ----------------------------------------------------------------------

export function filiaisAboutView() {
  return (
    <>
      <filiaisAbout />

      <filiaisAboutOurVision />

      <filiaisTeam members={_members} />

      <filiaisTestimonial testimonials={_testimonials} />

      <filiaisOurClients brands={_brands} />

      <filiaisLatestPosts posts={latestPosts} />

      <filiaisNewsletter />
    </>
  );
}
