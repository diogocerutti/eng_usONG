import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";

export default function AttendanceRegister() {
  return (
    <React.Fragment>
      <Grid
        container
        lg={9}
        sx={{
          border: 1,
          marginTop: "70px",
          padding: "20px",
        }}
      >
        <Grid item lg={6} sx={12}>
          <Typography variant="h6" gutterBottom>
            Cadastro de Atendimento
          </Typography>
          <Grid item lg={8}>
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
          <Grid item sx={{ marginTop: "30px" }}>
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
          <Grid item lg={4} sx={{ marginTop: "10px" }}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Hora do atendimento"
              autoComplete="family-name"
              variant="standard"
              type="time"
              fullWidth
            />
          </Grid>
          <Grid item sx={{ marginTop: "30px" }}>
            <TextField variant="outlined" type="file" />
          </Grid>
          <Grid item sx={{ marginTop: "20px" }}>
            <Typography variant="caption" display="block" gutterBottom>
              * Campos Obrigatórios
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Grid
            item
            lg={8}
            sx={{
              display: "flex",
              alignItems: "baseline",
              marginBottom: "20px",
            }}
          >
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Animal"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
            <SearchIcon />
          </Grid>
          <Typography variant="h9" gutterBottom>
            Liberar Atendimento sem Animal Vinculado?
          </Typography>
          <Checkbox color="secondary" name="saveAddress" value="yes" />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Detalhes do atendimento"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            multiline
            rows={6}
          />
          <Grid item sx={{ marginTop: "20px" }} textAlign="center">
            <Button
              variant="contained"
              color="success"
              sx={{ marginRight: "20%" }}
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
