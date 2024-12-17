'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { inputBaseClasses } from '@mui/material/InputBase';

import { varAlpha } from 'src/theme/styles';
import { _tours, _filiaisPosts, _testimonials } from 'src/_mock';

import { filiaisNewsletter } from '../filiais-newsletter';
import { filiaisFilters } from '../filters/filiais-filters';
import { filiaisTestimonial } from '../filiais-testimonial';
import { filiaisLandingHero } from '../landing/filiais-landing-hero';
import { filiaisLandingPosts } from '../posts/filiais-landing-posts';
import { filiaisLandingSummary } from '../landing/filiais-landing-summary';
import { filiaisLandingIntroduce } from '../landing/filiais-landing-introduce';
import { filiaisLandingToursByCity } from '../landing/filiais-landing-tours-by-city';
import { filiaisLandingTourFeatured } from '../landing/filiais-landing-tour-featured';
import { filiaisLandingFavoriteDestinations } from '../landing/filiais-landing-favorite-destinations';

// ----------------------------------------------------------------------

const heroTours = _tours.slice(0, 5);
const cityTours = _tours.slice(0, 8);
const featuredTours = _tours.slice(0, 4);
const favoriteTours = _tours.slice(0, 4);
const posts = _filiaisPosts.slice(5, 8);
const carouselPosts = _filiaisPosts.slice(0, 4);

// ----------------------------------------------------------------------

export function filiaisLandingView() {
  return (
    <>
      <Box component="section" sx={{ position: 'relative' }}>
        <filiaisLandingHero tours={heroTours} />

        <Container
          sx={(theme) => ({
            pt: 3,
            [theme.breakpoints.up('md')]: {
              pt: 0,
              mb: 10,
              left: 0,
              right: 0,
              bottom: 0,
              mx: 'auto',
              position: 'absolute',
            },
          })}
        >
          <filiaisFilters
            sx={{
              bgcolor: (theme) => ({
                xs: 'background.neutral',
                md: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
              }),
              [`& .${inputBaseClasses.input}`]: {
                color: { md: 'common.white' },
              },
              display: 'none',
            }}
          />
        </Container>
      </Box>

      <filiaisLandingIntroduce />

      <filiaisLandingSummary />

      <filiaisLandingFavoriteDestinations tours={favoriteTours} />

      <filiaisLandingTourFeatured tours={featuredTours} />

      <filiaisLandingToursByCity tours={cityTours} />

      <filiaisLandingPosts posts={posts} carouselPosts={carouselPosts} />

      <filiaisTestimonial testimonials={_testimonials} />

      <filiaisNewsletter />
    </>
  );
}
