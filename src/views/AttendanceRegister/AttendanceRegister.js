import {
  Button,
  Grid,
  Typography,
  TextField,
  Container,
  Stack,
  Autocomplete
} from '@mui/material'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'

export default function AttendanceRegister() {
  return (
    <Container
      maxWidth={'lg'}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Stack component="form" autoComplete="off" width="50%" spacing={3}>
        <Grid
          item
          lg={12}
          xs={12}
          display="flex"
          justifyContent={'space-between'}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Cadastro de Atendimento
            </Typography>
          </Grid>
          <Grid item alignSelf={'center'}>
            <HeadsetMicIcon fontSize="large" />
          </Grid>
        </Grid>

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
              id="user"
              options={['algo', 'algo', 'algo']}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Usuário" name="user" required />
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
              id="animal"
              options={['algo', 'algo', 'algo']}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Animal" name="animal" required />
              )}
            ></Autocomplete>
          </Grid>
        </Grid>

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
              id="type"
              options={['algo', 'algo', 'algo']}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tipo de atendimento"
                  name="type"
                  required
                />
              )}
            ></Autocomplete>
          </Grid>
          <Grid item sx={{ minWidth: 237, width: '45%' }}>
            <TextField
              required
              name="cost"
              label="Custo"
              variant="standard"
              type="number"
              placeholder="R$"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid
          item
          lg={12}
          justifyContent={'space-between'}
          alignItems={'baseline'}
          display="flex"
        >
          <Grid item sx={{ width: '43%' }}>
            <TextField
              required
              name="date"
              label="Data do atendimento"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              type="date"
              fullWidth
            />
          </Grid>
          <Grid item sx={{ width: '45%' }}>
            <TextField
              name="time"
              label="Hora do atendimento"
              variant="standard"
              type="time"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12} lg={12} width="100%" alignSelf="center">
          <TextField
            required
            name="details"
            label="Detalhes do atendimento"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
          />
        </Grid>

        <Grid
          item
          lg={12}
          justifyContent={'space-evenly'}
          alignItems={'baseline'}
          display="flex"
        >
          <Grid item>
            <Button
              variant="contained"
              color="success"
              sx={{ marginRight: '20%' }}
            >
              Salvar
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error">
              Cancelar
            </Button>
          </Grid>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography variant="caption" display="block" gutterBottom>
            * Campos Obrigatórios
          </Typography>
        </Grid>
      </Stack>
    </Container>
  )
}
