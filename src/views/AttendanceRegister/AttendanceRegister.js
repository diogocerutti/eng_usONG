import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function AttendanceRegister() {

  return (
    <React.Fragment>
      <Grid sx={{border: 1, marginTop: '70px', padding: '20px' }}>
        <Grid item xs={12} sm={6} lg={12}>
          <Typography variant="h6" gutterBottom>
            Cadastro de Atendimento
          </Typography>
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} lg={5.5}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Descrição"
              fullWidth
              autoComplete="given-name"
              variant="standards"
            />
          </Grid>          
            <Grid item xs={12} sm={6} lg={5.5}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Detalhes do atendimento"
                fullWidth  
                autoComplete="family-name"
                variant="outlined"
                multiline
                rows={10}
              />
            </Grid>
          </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Data do atendimento"
            InputLabelProps={{ shrink: true }}
            autoComplete="shipping address-line1"
            variant="standard"
            type="date"
          />
        </Grid>        
        <Grid item xs={12}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Hora do atendimento"                
                autoComplete="family-name"
                variant="standard"
                type="time"
            />
        </Grid>
        <Grid item xs={12} sm={6} lg={6.5} sx={{ marginTop: '20px' }}>
          <TextField            
            variant="outlined"
            type="file"
          />
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