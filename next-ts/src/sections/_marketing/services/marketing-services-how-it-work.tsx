import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const TIMELINES = [
  {
    title: 'Planejamento',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    title: 'Pesquisa',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    title: 'Otimização',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    title: 'Resultados',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
];

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.65)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.65)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
            ],
          }),
          color: 'common.white',
          py: { xs: 10, md: 15 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography fontSize={'72px'} fontWeight={'900'} sx={{ textAlign: 'center' }}>
          FRADEMA
        </Typography>

        <Typography
          sx={{
            mt: 1,
            mx: 'auto',
            fontSize: '20px',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          Consultoria Tributária
        </Typography>

        <Timeline position="alternate">
          {TIMELINES.map((value, index) => (
            <TimelineItem key={value.title}>
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  FASE {index + 1}
                </Typography>

                <Typography variant="h5" component="h6" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ opacity: 0.72, maxWidth: { md: 360 }, ...(index % 2 && { ml: 'auto' }) }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
