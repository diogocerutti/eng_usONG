import { useEffect, useState } from 'react'
import { api } from '../../../helpers/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  IconButton,
  Typography
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

export default function Species() {
  const [species, setSpecies] = useState([])

  useEffect(() => {
    const getSpecies = async () => {
      let specieList = await api.getAll('/specie')
      setSpecies(specieList)
    }
    getSpecies()
  }, [])

  return (
    <Stack maxWidth="lg">
      <Stack>
        <Typography variant="h6" fontWeight={'bold'}>
          Lista de espécies
        </Typography>
      </Stack>
      <Table sx={{ minWidth: 650, background: '#F0F0ED' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '50%', fontWeight: 'bold' }}>ID</TableCell>
            <TableCell align="left" sx={{ width: '0px', fontWeight: 'bold' }}>
              Nome
            </TableCell>
            <TableCell align="right" sx={{ width: '50%', fontWeight: 'bold' }}>
              Opções
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {species.map((i) => (
            <TableRow key={i.specie_id}>
              <TableCell>{i.specie_id}</TableCell>
              <TableCell align="left">{i.name}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="info"
                  onClick={() => {
                    alert(i.description)
                  }}
                >
                  <InfoIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  )
}
