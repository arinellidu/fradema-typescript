import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { CONFIG } from 'src/config-global';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const filiaisContactSchema = zod.object({
  fullName: zod.string().min(1, { message: 'Por favor, preencha seu nome completo!' }),
  subject: zod.string().min(1, { message: 'Por favor, digite o assunto!' }),
  cel: zod.string().min(11).max(11, {
    message: 'Por favor, digite seu celular para contato!',
  }),
  message: zod.string().min(1, { message: 'Por favor, digite sua mensagem!' }),
  email: zod
    .string()
    .min(1, { message: 'Precisamos de seu Email!' })
    .email({ message: 'Email deve ter um endereço válido!' }),
});

// ----------------------------------------------------------------------

export function filiaisContactForm({ sx, ...other }) {
  const defaultValues = {
    fullName: '',
    cel: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: zodResolver(filiaisContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log('DATA', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              loading="lazy"
              alt="Contato Consultor"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-filiais-contact.svg`}
              sx={{ width: 480, height: 480 }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h3">Agende com um consultor</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Respondemos em até 2 dias úteis.
              </Typography>
            </Stack>

            <Form methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="flex-start">
                <Field.Text name="fullName" label="Nome completo" />
                <Field.Text name="email" label="Email" />
                <Field.Text name="cel" label="Telefone" />
                <Field.Text name="subject" label="Assunto" />
                <Field.Text name="message" multiline rows={5} label="Mensagem" />

                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  loading={isSubmitting}
                  sx={{
                    alignSelf: { xs: 'center', md: 'unset' },
                  }}
                >
                  Enviar
                </LoadingButton>
              </Stack>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
