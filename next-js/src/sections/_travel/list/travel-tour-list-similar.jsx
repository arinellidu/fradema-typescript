import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { filiaisTourItem } from './filiais-tour-item';

// ----------------------------------------------------------------------

export function filiaisTourListSimilar({ tours, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box display="flex" alignItems="center" sx={{ mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            You might like
          </Typography>

          <Button
            component={RouterLink}
            href={paths.filiais.tours}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box>

        <Box
          display="grid"
          gap={{ xs: 4, md: 3 }}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {tours.map((tour) => (
            <filiaisTourItem key={tour.id} tour={tour} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}