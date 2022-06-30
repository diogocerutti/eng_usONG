import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

export default function UserRegister() {
  return (
    <React.Fragment>
      <Grid
        container
        lg={8}
        sx={{ border: 1, marginTop: "70px", padding: "20px" }}
      >
        <Grid item lg={6}>
          <Typography variant="h6" gutterBottom>
            Cadastro de Usuário
          </Typography>
          <Grid item xs={12} lg={8}>
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
          <Grid item xs={12} sx={{ marginTop: "20px" }}>
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
          <Grid item xs={12} lg={12} sx={{ marginTop: "20px" }}>
            <TextField variant="outlined" type="file" />
          </Grid>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography variant="caption" display="block" gutterBottom>
              * Campos Obrigatórios
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg={6}>
          <Grid item xs={12} lg={8}>
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

          <Grid item xs={12} lg={8}>
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
          <Grid item xs={12} lg={8} sx={{ marginTop: "20px" }}>
            <Typography variant="h9" gutterBottom>
              Acesso Liberado? *
            </Typography>
            <Checkbox color="secondary" name="saveAddress" value="yes" />
          </Grid>
          <Grid
            item
            xs={12}
            lg={12}
            sx={{ marginTop: "20px" }}
            textAlign="center"
          >
            <Button variant="contained" color="warning">
              Redefinir Senha
            </Button>
          </Grid>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography variant="caption" display="block" gutterBottom>
              OBS: A primeira senha do usuário será o seu CPF. Após fazer login
              pela primeira vez, é necessário efetuar a troca da mesma. Ao
              redefinir uma senha ela volta a ser o CPF do usuário.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={12}
            sx={{ marginTop: "20px" }}
            textAlign="center"
          >
            <Button
              variant="contained"
              color="success"
              sx={{ marginRight: "30%" }}
            >
              Salvar
            </Button>
            <Button variant="contained" color="error">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
