import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function CareerLandingHotCategories({ categories, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container marginBottom={'-100px'}>
        <Typography fontSize={'62px'} fontWeight={'900'} sx={{ textAlign: 'center' }}>
          Serviços
        </Typography>
        <Typography
          color={'#377dff'}
          marginTop={'-40px'}
          fontSize={'82px'}
          fontWeight={'900'}
          // component={'span'}
          // variant={'h1'}
          sx={{
            // boxShadow: '6',
            textAlign: 'center',
          }}
        >
          Prestados
        </Typography>

        <Box
          display="grid"
          gap={{ xs: 3, md: 5 }}
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ my: { xs: 5, md: 10 } }}
        >
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </Box>

        <Stack alignItems="center">
          {/* <Button
            color="inherit"
            size="large"
            variant="outlined"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button> */}
        </Stack>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function CategoryItem({ category }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        marginTop: '-60px',
        marginBottom: '40px',
        p: 0,
        minWidth: 1,
        borderRadius: 2,
        display: 'flex',
        cursor: 'pointer',
        aspectRatio: '1/1',
        textAlign: 'center',
        position: 'relative',
        alignItems: 'center',
        bgcolor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        // boxShadow: '0.75',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            color: 'common.white',
            bgcolor: '#377dff',
            transition: (theme) => theme.transitions.create('all'),
          },
        },
      }}
    >
      <Box
        className="icon"
        component="span"
        display="flex"
        sx={{ p: 2, mb: 1, borderRadius: '50%' }}
      >
        <SvgColor width={40} src={category.icon} />
      </Box>

      <Typography variant="h6" noWrap sx={{ px: 3, width: 1 }}>
        {category.name}
      </Typography>

      <Typography variant="body2" sx={{ mt: 0.5, color: 'text.disabled' }}>
        {category.totalJobs}
      </Typography>
    </Paper>
  );
}
