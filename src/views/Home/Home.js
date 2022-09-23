import { useEffect, useState } from 'react'
import { api } from '../../helpers/api'
import './Home.css'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Grid, TextField, Modal, Autocomplete } from '@mui/material'

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

  const username = localStorage.getItem('username')

  return (
    <div className="main">
      <h1 className="main-title">Bem-vindo (a) {username}</h1>
      <Grid
        item
        display="flex"
        justifyContent="space-between"
        alignItems={'baseline'}
      >
        <h2 className="main-subtitle">Animais cadastrados:</h2>
        <Grid item>
          <Button
            onClick={handleOpen}
            sx={{
              color: 'black',
              borderColor: 'black',
              background: '#E0DBDB',
              fontWeight: 'bold'
            }}
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
            item
            lg={6}
            sx={{
              border: 1,
              marginTop: '70px',
              padding: '20px',
              background: '#E7EFE6'
            }}
            spacing={2}
          >
            <Grid item lg={12}>
              <Autocomplete
                disablePortal
                id="animal"
                options={animals.map((i) => i.nickname)}
                renderInput={(params) => (
                  <TextField {...params} label="Animal" />
                )}
              ></Autocomplete>
            </Grid>
            <Grid item lg={12}>
              <Autocomplete
                disablePortal
                id="raça"
                options={['algo', 'algo', 'algo']}
                renderInput={(params) => <TextField {...params} label="Raça" />}
              ></Autocomplete>
            </Grid>

            <Grid item lg={12}>
              <Autocomplete
                disablePortal
                id="espécie"
                options={['algo', 'algo', 'algo']}
                renderInput={(params) => (
                  <TextField {...params} label="Espécie" />
                )}
              ></Autocomplete>
            </Grid>

            <Grid item lg={12}>
              <TextField
                required
                name="outgoing"
                label="Gastos"
                fullWidth
                variant="standard"
                type="number"
              />
            </Grid>

            <Grid
              item
              lg={12}
              xs={12}
              display="flex"
              justifyContent="space-evenly"
            >
              <Button variant="contained" color="success">
                Filtrar
              </Button>
              <Button variant="contained" color="warning" onClick={handleClose}>
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
