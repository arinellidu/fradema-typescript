import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { filiaisTourItem } from './filiais-tour-item';

// ----------------------------------------------------------------------

export function filiaisTourList({ tours, sx, ...other }) {
  return (
    <>
      <Box
        component="section"
        columnGap={3}
        display="grid"
        rowGap={{ xs: 4, md: 5 }}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        sx={sx}
        {...other}
      >
        {tours.map((tour) => (
          <filiaisTourItem key={tour.id} tour={tour} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}