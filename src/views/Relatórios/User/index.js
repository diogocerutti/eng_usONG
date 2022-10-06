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

export default function Users() {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      let userList = await api.getAll('/user')
      setUser(userList)
    }
    getUsers()
  }, [])

  return (
    <Stack maxWidth="lg">
      <Stack>
        <Typography variant="h6" fontWeight={'bold'}>
          Lista de usuários
        </Typography>
      </Stack>
      <Table sx={{ minWidth: 800, background: '#F0F0ED' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Nome
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Status
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              CPF
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              E-mail
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Data nasc.
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((i) => (
            <TableRow key={i.user_id}>
              <TableCell>{i.user_id}</TableCell>
              <TableCell align="right">{i.name}</TableCell>
              <TableCell align="right">{i.status}</TableCell>
              <TableCell align="right">{i.cpf}</TableCell>
              <TableCell align="right">{i.email}</TableCell>
              <TableCell align="right">{i.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  )
}
