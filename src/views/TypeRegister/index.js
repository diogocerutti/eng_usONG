import {
  Button,
  Typography,
  TextField,
  Container,
  Stack,
  Grid
} from '@mui/material'

export default function TypeRegister() {
  return (
    <Container maxWidth={'lg'}>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'baseline'}
        direction={{ xs: 'column', sm: 'row', lg: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4, lg: 0 }}
      >
        <Stack
          width={{ xs: '100%', sm: '100%', md: '100%', lg: '50%' }}
          alignSelf={{ lg: 'center' }}
        >
          <Grid item display="flex" justifyContent={'space-between'}>
            <Typography variant="h4" gutterBottom>
              Cadastro de tipo de atendimento
            </Typography>
            <i
              class="fa-solid fa-notes-medical"
              style={{ alignSelf: 'center', fontSize: '30px' }}
            ></i>
          </Grid>
          <Typography variant="h6" display="block" gutterBottom>
            * Campos Obrigatórios
          </Typography>
        </Stack>
        <Stack
          component="form"
          autoComplete="off"
          width={{ xs: '100%', sm: '100%', md: '100%', lg: '50%' }}
          alignSelf={{ lg: 'center' }}
          spacing={2}
        >
          <TextField
            required
            name="name"
            label="Nome do tipo de atendimento"
            fullWidth
            variant="standard"
            type="text"
          />

          <Grid
            item
            lg={12}
            justifyContent={'space-evenly'}
            alignItems={'baseline'}
            display="flex"
          >
            <Grid item>
              <Button variant="contained" color="success">
                Salvar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="error">
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
