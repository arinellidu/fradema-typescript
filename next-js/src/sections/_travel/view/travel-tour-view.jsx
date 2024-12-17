'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { CONFIG } from 'src/config-global';
import { _socials, _reviews } from 'src/_mock';

import { SvgColor } from 'src/components/svg-color';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { filiaisNewsletter } from '../filiais-newsletter';
import { ReviewNewForm } from '../../review/review-new-form';
import { filiaisReviewList } from '../review/filiais-review-list';
import { filiaisReviewToolbar } from '../review/filiais-review-toolbar';
import { filiaisTourListSimilar } from '../list/filiais-tour-list-similar';
import { filiaisReviewTourGuide } from '../review/filiais-review-tour-guide';
import { filiaisTourDetailsHeader } from '../details/filiais-tour-details-header';
import { filiaisTourDetailsSummary } from '../details/filiais-tour-details-summary';
import { filiaisTourDetailsGallery } from '../details/filiais-tour-details-gallery';
import { filiaisTourDetailsReserveForm } from '../details/filiais-tour-details-reserve-form';

// ----------------------------------------------------------------------

export function filiaisTourView({ tour, relatedTours }) {
  const [sort, setSort] = useState('latest');

  const openReviewForm = useBoolean();

  const handleChangeSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const renderSocials = (
    <Box gap={1.5} display="flex" sx={{ mt: 5 }}>
      <Box component="span" sx={{ lineHeight: '30px', typography: 'subtitle2' }}>
        Share:
      </Box>
      <Box gap={1} display="flex" alignItems="center" flexWrap="wrap">
        {_socials.map((social) => (
          <Button
            key={social.value}
            size="small"
            variant="outlined"
            startIcon={
              (social.value === 'twitter' && (
                <SvgColor
                  width={20}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                />
              )) || (
                <Box
                  component="img"
                  loading="lazy"
                  alt={social.label}
                  src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
                  sx={{ width: 20, height: 20 }}
                />
              )
            }
          >
            {social.label}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const renderReview = (
    <>
      <Container>
        <Grid container disableEqualOverflow spacing={8}>
          <Grid xs={12} md={5} lg={4}>
            <filiaisReviewTourGuide tourGuide={tour?.tourGuide} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <filiaisReviewToolbar
              sort={sort}
              totalReviews={_reviews.length}
              onChangeSort={handleChangeSort}
              onOpenReview={openReviewForm.onToggle}
            />

            <filiaisReviewList reviews={_reviews} />
          </Grid>
        </Grid>
      </Container>

      <ReviewNewForm open={openReviewForm.value} onClose={openReviewForm.onFalse} />
    </>
  );

  return (
    <>
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Tours', href: paths.filiais.tours },
            { name: tour?.slug },
          ]}
          sx={{
            mt: 3,
            mb: { xs: 3, md: 5 },
          }}
        />

        <filiaisTourDetailsGallery images={tour?.gallery || []} />

        <Grid container disableEqualOverflow spacing={{ xs: 5, md: 8 }} direction="row-reverse">
          <Grid xs={12} md={5} lg={4}>
            <filiaisTourDetailsReserveForm
              price={tour?.price || 0}
              priceSale={tour?.priceSale || 0}
            />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <filiaisTourDetailsHeader
              slug={tour?.slug || ''}
              tourGuide={tour?.tourGuide}
              favorited={tour?.favorited || false}
              ratingNumber={tour?.ratingNumber || 0}
              totalReviews={tour?.totalReviews || 0}
            />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <filiaisTourDetailsSummary
              tourGuide={tour?.tourGuide}
              program={tour?.program || []}
              location={tour?.location || ''}
              duration={tour?.duration || ''}
              services={tour?.services || []}
              languages={tour?.languages || []}
              highlights={tour?.highlights || []}
              description={tour?.description || ''}
              available={tour?.available || { start: '', end: '' }}
            />

            {renderSocials}
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />

      {renderReview}

      {!!relatedTours?.length && <filiaisTourListSimilar tours={relatedTours} />}

      <filiaisNewsletter />
    </>
  );
}
