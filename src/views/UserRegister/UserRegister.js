import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

export default function UserRegister() {
  return (
    <React.Fragment>
      <Grid sx={{border: 1, marginTop: '70px', padding: '20px' }}>
        <Grid item xs={12} sm={6} lg={12}>
          <Typography variant="h6" gutterBottom>
            Cadastro de Usuário
          </Typography>
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} lg={5.5}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nome do usuário"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={5.5}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Login do usuário"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Data de nascimento"
            InputLabelProps={{ shrink: true }}
            autoComplete="shipping address-line1"
            variant="standard"
            type="date"
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={6.5}>
            <TextField
              required
              id="address2"
              name="address2"
              label="CPF"
              size="medium"
              autoComplete="shipping address-line2"
              variant="standard"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={5.5}>
            <TextField
              required
              id="state"
              name="state"
              label="E-mail"
              variant="standard"
              type="email"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} lg={6.5} sx={{ marginTop: '20px' }}>
            <TextField            
              variant="outlined"
              type="file"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={5} sx={{ marginTop: '20px' }}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Acesso Liberado"
            />
          </Grid>        
        </Grid>
        <Grid container textAlign="center">
          <Grid item xs={4} sm={4} lg={4} sx={{ marginTop: '20px' }}>
            <Button variant="contained" color="success">
              Salvar
            </Button>
          </Grid>
          <Grid item xs={4} sm={4} lg={4} sx={{ marginTop: '20px' }}>
            <Button variant="contained" color="warning">
              Redefinir Senha 
            </Button>
          </Grid>
          <Grid item xs={4} sm={4} lg={4} sx={{ marginTop: '20px' }}>
            <Button variant="contained" color="error">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}