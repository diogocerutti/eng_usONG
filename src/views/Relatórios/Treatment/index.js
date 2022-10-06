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

export default function Treatments() {
  const [treatment, setTreatment] = useState([])

  useEffect(() => {
    const getTreatments = async () => {
      let treatmentList = await api.getAll('/treatment')
      setTreatment(treatmentList)
    }
    getTreatments()
  }, [])

  return (
    <Stack maxWidth="lg">
      <Stack>
        <Typography fontWeight={'bold'} variant="h6">
          Lista de atendimentos
        </Typography>
      </Stack>
      <Table sx={{ minWidth: 900, background: '#F0F0ED' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Usuário
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Animal
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Data
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Hora
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Custo
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
              Tipo
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Opções
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {treatment.map((i) => (
            <TableRow key={i.treatment_id}>
              <TableCell>{i.treatment_id}</TableCell>
              <TableCell align="left">{i.user_id}</TableCell>
              <TableCell align="left">{i.animal_id}</TableCell>
              <TableCell align="left">{i.date}</TableCell>
              <TableCell align="left">{i.time}</TableCell>
              <TableCell align="left">{i.cost}</TableCell>
              <TableCell align="left">{i.type_id}</TableCell>
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
