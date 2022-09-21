import {
  Button,
  Typography,
  TextField,
  Checkbox,
  Container,
  Stack,
  Grid
} from '@mui/material'

export default function UserRegister() {
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
          <Typography variant="h4" gutterBottom>
            Cadastro de Usuário
          </Typography>
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
            label="Nome do usuário"
            fullWidth
            variant="standard"
            type="text"
          />

          <TextField
            required
            name="login"
            label="Login do usuário"
            fullWidth
            variant="standard"
            type="text"
          />

          <TextField
            required
            name="cpf"
            label="CPF"
            variant="standard"
            type="text"
          />

          <TextField
            required
            name="email"
            label="E-mail"
            variant="standard"
            type="email"
            fullWidth
          />

          <TextField
            required
            name="date"
            label="Data de nascimento"
            InputLabelProps={{ shrink: true }}
            variant="standard"
            type="date"
          />
          <Grid
            item
            lg={12}
            justifyContent={{
              xs: 'space-evenly',
              sm: 'space-evenly',
              md: 'space-evenly',
              lg: 'space-between'
            }}
            alignItems={'baseline'}
            display="flex"
          >
            <Grid item>
              <Typography variant="h9" gutterBottom>
                Acesso Liberado? *
              </Typography>
            </Grid>
            <Grid item>
              <Checkbox color="secondary" name="acess" value="yes" />
            </Grid>
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
