import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { Image } from 'src/components/image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function MarketingTestimonial({ testimonials, sx, ...other }) {
  const carousel = useCarousel();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Container sx={{ position: 'relative' }}>
        <Box sx={{ px: 2, m: 'auto', maxWidth: 720 }}>
          <Stack spacing={2} sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Informações
            </Typography>

            <Typography variant="h2">
              13 filiais em todo Brasil e 2 filiais Internacionais
            </Typography>
          </Stack>

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

          <Carousel carousel={carousel} sx={{ my: { xs: 5, md: 10 } }}>
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>

          <CarouselDotButtons
            scrollSnaps={carousel.dots.scrollSnaps}
            selectedIndex={carousel.dots.selectedIndex}
            onClickDot={carousel.dots.onClickDot}
            sx={{
              width: 1,
              color: 'primary.main',
              justifyContent: 'center',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <>
      <Box
        display="flex"
        gap={{ xs: 5, md: 10 }}
        flexDirection={{ xs: 'column', md: 'row' }}
        sx={sx}
        {...other}
      >
        <Typography
          sx={{
            lineHeight: 1.75,
            fontSize: { md: 20 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Texto referente à Filial
        </Typography>

        <Box
          display="flex"
          flexShrink={0}
          alignItems="center"
          flexDirection="column"
          sx={{ textAlign: 'center' }}
        >
          <img
            style={{ width: '220px', height: '160px' }}
            src={`${CONFIG.assetsDir}/assets/images/home/pc-fradema.jpg`}
          />

          <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
            Fradema - RJ
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            CEL/Horário
          </Typography>
        </Box>
      </Box>
    </>
  );
}
