import { useEffect, useState } from 'react'
import { api } from '../../helpers/api'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'

export default function Home() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const getAnimals = async () => {
      let animalList = await api.getAll('/animal')
      setAnimals(animalList)
    }
    getAnimals()
  }, [])

  return (
    <div className="main">
      <h1 className="main-title">Bem-vindo (a)</h1>
      <Grid container>
        <h2 className="main-subtitle">Animais cadastrados:</h2>
        <Grid item>
          <Button
            onClick={handleOpen}
            sx={{ color: 'black', borderColor: 'black', background: '#E0DBDB' }}
            variant="outlined"
          >
            Filtros de Busca <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: { backgroundColor: 'transparent' } }}
      >
        <Grid container justifyContent={'center'}>
          <Grid
            container
            lg={9}
            sx={{
              border: 1,
              marginTop: '70px',
              padding: '20px',
              background: '#E7EFE6'
            }}
          >
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
              <Grid item sx={{ marginTop: '30px' }}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Data Inicial do Atendimento"
                  InputLabelProps={{ shrink: true }}
                  autoComplete="shipping address-line1"
                  variant="standard"
                  type="date"
                />
              </Grid>
              <Grid item sx={{ marginTop: '30px' }}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Data Final do Atendimento"
                  InputLabelProps={{ shrink: true }}
                  autoComplete="shipping address-line1"
                  variant="standard"
                  type="date"
                />
              </Grid>
            </Grid>
            <Grid item lg={6} sx={12}>
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
                  label="Espécie"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
                <SearchIcon />
              </Grid>
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
                  label="Raça"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
                <SearchIcon />
              </Grid>
              <Button
                variant="contained"
                color="success"
                sx={{ marginRight: '20%' }}
              >
                Filtrar
              </Button>
              <Button
                variant="contained"
                color="warning"
                sx={{ marginRight: '20%' }}
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
      <ul className="cards">
        {animals.map((i) => (
          <li key={i.animal_id} className="cards_item">
            <div className="card">
              <div className="card_image">
                <img alt="Imagem" src="https://placedog.net/1000/563?id=51" />
              </div>
              <div className="card_content">
                <h2 className="card_title">{i.nickname}</h2>
                <p className="card_text">{i.description}</p>
                <p className="card_text">Custos: {i.outgoing}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
