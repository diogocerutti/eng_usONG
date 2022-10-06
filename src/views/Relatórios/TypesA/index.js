import { useEffect, useState } from 'react'
import { api } from '../../../helpers/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Typography
} from '@mui/material'

export default function Types() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    const getTypes = async () => {
      let typesList = await api.getAll('/treatment_type')
      setTypes(typesList)
    }
    getTypes()
  }, [])

  return (
    <Stack maxWidth="lg">
      <Stack>
        <Typography variant="h6" fontWeight={'bold'}>
          Lista de tipos de atendimento
        </Typography>
      </Stack>
      <Table sx={{ minWidth: 500, background: '#F0F0ED' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '50%', fontWeight: 'bold' }}>ID</TableCell>
            <TableCell align="right" sx={{ width: '0px', fontWeight: 'bold' }}>
              Nome
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {types.map((i) => (
            <TableRow key={i.type_id}>
              <TableCell>{i.type_id}</TableCell>
              <TableCell align="right">{i.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  )
}
