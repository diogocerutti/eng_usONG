import {
  Button,
  Grid,
  Typography,
  TextField,
  Container,
  Stack,
  Select,
  MenuItem
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function AttendanceRegister() {
  return (
    <Container
      maxWidth={'lg'}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Stack component="form" autoComplete="off" width="50%" spacing={3}>
        <Grid item lg={12} xs={12}>
          <Typography variant="h6" gutterBottom>
            Cadastro de Atendimento
          </Typography>
        </Grid>
        <Grid item lg={12} justifyContent={'space-between'} display="flex">
          <Grid
            item
            justifyContent={'space-between'}
            display="flex"
            alignItems={'baseline'}
            width="45%"
          >
            <TextField
              required
              name="user"
              label="Usuário"
              fullWidth
              variant="standard"
            />
            <SearchIcon />
          </Grid>
          <Grid
            item
            justifyContent={'space-between'}
            display="flex"
            alignItems={'baseline'}
            width="45%"
          >
            <TextField
              required
              name="animal"
              label="Animal"
              fullWidth
              variant="standard"
            />
            <SearchIcon />
          </Grid>
        </Grid>

        <Grid
          item
          lg={12}
          justifyContent={'space-between'}
          alignItems={'baseline'}
          display="flex"
        >
          <Grid item>
            <Select
              name="typeDropdown"
              label="Tipo de atendimento"
              sx={{ minWidth: 237 }}
            >
              <MenuItem key="option0" value="option0">
                Algo
              </MenuItem>
            </Select>
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

        <Grid item xs={12} lg={12} width="75%" alignSelf="center">
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
