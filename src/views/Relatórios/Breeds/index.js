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

export default function Breeds() {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const getBreeds = async () => {
      let breedList = await api.getAll('/breed')
      setBreeds(breedList)
    }
    getBreeds()
  }, [])

  return (
    <Stack maxWidth="lg">
      <Stack>
        <Typography fontWeight={'bold'} variant="h6">
          Lista de raças
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
          {breeds.map((i) => (
            <TableRow key={i.breed_id}>
              <TableCell>{i.breed_id}</TableCell>
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
