import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { Carousel, CarouselArrowFloatButtons, useCarousel } from 'src/components/carousel';
import { next } from 'stylis';

// ----------------------------------------------------------------------

export function filiaisContactInfo({ locations, sx, ...other }) {
  const carousel = useCarousel({
    loop: true,
    startIndex: 1,
    thumbs: {
      loop: true,
      slidesToShow: 'auto',
    },
  });

  return (
    <>
      <Box component="section" sx={sx} {...other}>
        <Container
          sx={{
            pt: { xs: 3, md: 5 },
            pb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">
            13 filiais no Brasil <br />2 Internacionais
          </Typography>

          <Typography sx={{ color: 'text.secondary', mt: 3 }}>{`Entre em contato`}</Typography>
        </Container>

        <Box
          sx={{
            py: { xs: 10, md: 15 },
            bgcolor: 'background.neutral',
          }}
        >
          <Container
            sx={{
              gap: 4,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            <CarouselArrowFloatButtons
              {...carousel.arrows}
              options={carousel.options}
              slotProps={{
                prevBtn: { sx: { left: 16 } },
                nextBtn: { sx: { right: 16 } },
              }}
              sx={{
                borderRadius: '50%',
                color: 'text.primary',
                bgcolor: 'transparent',
                display: { xs: 'none', md: 'flex' },
              }}
            />
            <Carousel carousel={carousel}>
              {locations.map((location) => (
                <OfficeCard key={location.id} location={location} />
              ))}
            </Carousel>
          </Container>
        </Box>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

function OfficeCard({ location, sx, ...other }) {
  const transition = (theme) =>
    theme.transitions.create(['opacity', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'background.default',
        '& img': { transition },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
          '& img': { transform: 'scale(1.06)' },
        },

        ...sx,
      }}
      {...other}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <Box
          component="img"
          src={location.photoUrl}
          alt={location.country}
          sx={{ aspectRatio: '4/3', objectFit: 'cover' }}
        />
      </Box>

      <Stack spacing={2} sx={{ p: 3, typography: 'body2' }}>
        <Typography component="h6" variant="h5" sx={{ mb: 0.5 }}>
          {location.country}
        </Typography>

        <Box gap={1.5} display="flex">
          <Iconify width={22} icon="carbon:location" />
          <div>
            <Box
              component="span"
              gap={1}
              display="flex"
              alignItems="center"
              sx={{ mb: 0.5, typography: 'subtitle2' }}
            >
              Endereço
              <Link sx={{ display: 'inline-flex' }}>
                <Iconify width={16} icon="carbon:launch" />
              </Link>
            </Box>
            {location.address}
          </div>
        </Box>

        <Box gap={1.5} display="flex">
          <Iconify width={22} icon="solar:smartphone-outline" />
          <div>
            <Box component="span" sx={{ mb: 0.5, display: 'block', typography: 'subtitle2' }}>
              Telefone
            </Box>
            {location.phoneNumber}
          </div>
        </Box>

        <Box gap={1.5} display="flex">
          <Iconify width={22} icon="carbon:email" />
          <div>
            <Box component="span" sx={{ mb: 0.5, display: 'block', typography: 'subtitle2' }}>
              Email
            </Box>
            {location.email}
          </div>
        </Box>
      </Stack>
    </Paper>
  );
}
