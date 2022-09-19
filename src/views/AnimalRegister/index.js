import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Grid, Typography, TextField, Button, Checkbox } from '@mui/material'
import { api } from '../../helpers/api'

export default function AnimalRegister() {
  const [animal, setAnimal] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const json = await api.addAnimal('/animal', animal)

    if (json.errors) {
      json.errors.map((i) => alert(i.message))
    } else {
      window.location.href = '/'
    }
  }
  return (
    <Grid
      container
      item
      lg={9}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: 1,
        padding: '20px'
      }}
    >
      <Grid item lg={6} xs={12}>
        <Typography variant="h6" gutterBottom>
          Cadastro de Animal
        </Typography>
        <Grid item lg={8}>
          <TextField
            required
            id="nickname"
            name="nickName"
            label="Apelido"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          />
        </Grid>
        <Grid item sx={{ marginTop: '30px' }}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Data do atendimento"
            InputLabelProps={{ shrink: true }}
            autoComplete="shipping address-line1"
            variant="standard"
            type="date"
          />
        </Grid>
        <Grid item lg={4} sx={{ marginTop: '10px' }}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Hora do atendimento"
            autoComplete="family-name"
            variant="standard"
            type="time"
            fullWidth
          />
        </Grid>
        <Grid item sx={{ marginTop: '30px' }}>
          <TextField variant="outlined" type="file" />
        </Grid>
        <Grid item sx={{ marginTop: '20px' }}>
          <Typography variant="caption" display="block" gutterBottom>
            * Campos Obrigatórios
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Grid
          item
          lg={8}
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: '20px'
          }}
        >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Animal"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
          <SearchIcon />
        </Grid>
        <Typography variant="h9" gutterBottom>
          Liberar Atendimento sem Animal Vinculado?
        </Typography>
        <Checkbox color="secondary" name="saveAddress" value="yes" />
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Detalhes do atendimento"
          fullWidth
          autoComplete="family-name"
          variant="outlined"
          multiline
          rows={6}
        />
        <Grid item sx={{ marginTop: '20px' }} textAlign="center">
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: '20%' }}
          >
            Salvar
          </Button>
          <Button variant="contained" color="error">
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
