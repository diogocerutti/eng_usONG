import { useEffect, useState } from 'react'
import { api } from '../../helpers/api'
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'

export default function Teste() {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const getBreeds = async () => {
      let breedList = await api.getAll('/breed')
      setBreeds(breedList)
    }
    getBreeds()
  }, [])

  return (
    <Grid sx={{ border: 1, width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>BREEDS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {breeds.map((i) => (
              <TableRow
                key={i.breed_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{i.breed_id}</TableCell>
                <TableCell component="th" scope="row">
                  {i.name}
                </TableCell>
                <TableCell align="right">{i.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}
