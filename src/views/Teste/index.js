import { useEffect, useState } from 'react'
import { api } from '../../helpers/api'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid, Typography } from '@mui/material'

export default function Teste() {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const getBreeds = async () => {
      let breedList = await api.getAll('/breed/')
      setBreeds(breedList)
    }
    getBreeds()
  }, [])

  return (
    <Grid>
      <Typography>aaaaaa</Typography>
    </Grid>
  )
}
