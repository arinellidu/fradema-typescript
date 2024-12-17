import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Projetos Realizados', number: 5200 },
  { name: 'Valores salvos', number: 780000 },
  { name: 'Clientes atendidos', number: 7600 },
  { name: 'Colaboradores', number: 400 },
];

// ----------------------------------------------------------------------

export function CareerAbout({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 3, md: 5 },
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography
          variant="overline"
          sx={{
            mb: 1,
            display: 'block',
            color: 'success.main',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Sobre a Empresa
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          sx={{
            mb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid xs={12} md={6} lg={5}>
            <Typography variant="h2">Fazemos o melhor por nossos clientes.</Typography>
          </Grid>

          <Grid xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
            <Stack spacing={{ xs: 3, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
              <Typography>
                A Fradema Consultores Tributários está há 36 anos no mercado, possuindo vasta
                experiência e qualificação para pensar nas melhores soluções em consultoria
                tributária para o seu negócio. Com atuação desde 1988, a Fradema Consultores
                Tributários possui forte atuação em estratégias empresariais e procedimento
                administrativos nas esferas federal, estadual e municipal, com filiais em todo o
                território nacional. Nossos escritórios estão localizados no Distrito Federal,
                Bahia, Pernambuco, Espírito Santo, Minas Gerais, Rio de Janeiro, Santa Catarina, São
                Paulo, Paraná e Amazonas.
              </Typography>

              {/* <Typography></Typography> */}
            </Stack>
          </Grid>
        </Grid>

        <Section />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Section({ sx, ...other }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${CONFIG.assetsDir}/assets/images/career/about-team.webp)`,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          py: 10,
          ml: 'auto',
          textAlign: 'center',
          color: 'common.white',
          width: { lg: 0.5 },
          px: { xs: 2.5, md: 5 },
          backgroundImage: (theme) =>
            `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
              theme.vars.palette.common.black
            } 75%)`,
        }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Nossa empresa têm:
        </Typography>

        <Typography sx={{ mb: 5, opacity: 0.72 }}>Texto aqui...?</Typography>

        <Box gap={5} display="grid" gridTemplateColumns="repeat(2, 1fr)">
          {SUMMARY.map((value) => (
            <Stack
              key={value.name}
              spacing={1}
              alignItems="center"
              sx={{ color: 'grey.500', overflow: 'hidden', typography: 'body2' }}
            >
              <Box gap={0.5} display="flex" sx={{ color: 'success.main' }}>
                <AnimateCountUp variant="h2" to={value.number} toFixed={1} />
                <Box component="span" sx={{ typography: 'h3' }}>
                  +
                </Box>
              </Box>
              {value.name}
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
