'use client';

import Container from '@mui/material/Container';

import { filiaisNewsletter } from '../filiais-newsletter';
import { filiaisFilters } from '../filters/filiais-filters';
import { filiaisTourList } from '../list/filiais-tour-list';

// ----------------------------------------------------------------------

export function filiaisToursView({ tours }) {
  return (
    <>
      <Container>
        <filiaisFilters
          sx={{
            mt: { xs: 3, md: 5 },
            mb: { xs: 5, md: 10 },
          }}
        />

        <filiaisTourList tours={tours || []} />
      </Container>

      <filiaisNewsletter />
    </>
  );
}
