import { Container, Stack, Typography } from '@mui/material'

export default function About() {
  return (
    <Container maxWidth={'lg'}>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'baseline'}
        direction={{ xs: 'column', sm: 'row', lg: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4, lg: 0 }}
      >
        <Stack
          width={{ xs: '100%', sm: '100%', md: '100%', lg: '100%' }}
          alignSelf={{ lg: 'center' }}
          spacing={6}
        >
          <Typography variant="h4" fontWeight={'bold'}>
            Sobre o projeto
          </Typography>
          <Typography variant="h5">
            Projeto de gerenciamento interno de uma ONG de animais
          </Typography>
          <Typography variant="h5">
            Alunos: Diogo Cerutti, Emmanuel Barboza, Letícia Benedet e Stéfanny
            da Rosa
          </Typography>
          <Typography variant="h5">2022</Typography>
        </Stack>
      </Stack>
    </Container>
  )
}
