import {
  Button,
  Typography,
  TextField,
  Container,
  Stack,
  Grid,
  Autocomplete
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
          <Grid item display="flex" justifyContent={'space-between'}>
            <Typography variant="h4" gutterBottom>
              Cadastro de Animal
            </Typography>

            <i
              class="fa-solid fa-dog"
              style={{ alignSelf: 'center', fontSize: '30px' }}
            ></i>
          </Grid>
          <Typography variant="h9" display="block" gutterBottom>
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
            name="nickname"
            label="Apelido"
            fullWidth
            variant="standard"
            type="text"
          />

          <Grid item lg={12} justifyContent={'space-between'} display="flex">
            <Grid
              item
              justifyContent={'space-between'}
              display="flex"
              alignItems={'baseline'}
              width="45%"
            >
              <Autocomplete
                disablePortal
                id="breed"
                options={['Golden', 'Husky', 'Poodle', 'Teste']}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Raça" name="breed" required />
                )}
              ></Autocomplete>
            </Grid>
            <Grid
              item
              justifyContent={'space-between'}
              display="flex"
              alignItems={'baseline'}
              width="45%"
            >
              <Autocomplete
                disablePortal
                id="specie"
                options={['Canis', 'Leopardus', 'Rubus', 'Algo']}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Espécie"
                    name="specie"
                    required
                  />
                )}
              ></Autocomplete>
            </Grid>
          </Grid>

          <Grid
            item
            justifyContent={'space-between'}
            alignItems={'baseline'}
            display="flex"
          >
            <Grid item width="43%">
              <TextField
                required
                name="outgoing"
                label="Gastos"
                variant="standard"
                type="number"
                fullWidth
                placeholder="R$"
              />
            </Grid>
            <Grid item width="45%">
              <TextField
                name="image"
                variant="outlined"
                type="file"
                placeholder="aaaa"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} lg={12} width="100%" alignSelf="center">
            <TextField
              required
              name="description"
              label="Descrição"
              fullWidth
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>

          <Grid
            item
            lg={12}
            justifyContent={{
              xs: 'space-evenly',
              sm: 'space-evenly',
              md: 'space-evenly',
              lg: 'space-evenly'
            }}
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
