import * as React from "react";
import "./Home.css";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <div className="main">
      <h1 className="main-title">Bem-vindo (a)</h1>
      <Grid container sx={{ alignItems: "baseline" }}>
        <h2 className="main-subtitle">Últimos atendimentos cadastrados:</h2>

        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            border: 1,
            borderRadius: "10px",
            background: "#E0DBDB",
            height: "30px",
          }}
          placeholder="Filtros de Busca"
          inputProps={{ "aria-label": "Filtros de Busca" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Grid>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img alt="Ilustração" src="https://placedog.net/1000/563?id=51" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Buldogue</h2>
              <p className="card_text">Descrição: Resgate Vira-Lata</p>
              <p className="card_text">Local: Bairro XXX</p>
              <p className="card_text">Status: em andamento</p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img alt="Ilustração" src="https://placedog.net/samples/5.jpg" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Husky</h2>
              <p className="card_text">
                Descrição: Coleta do Veterinário - Caso 25
              </p>
              <p className="card_text">Local: Bairro XXX</p>
              <p className="card_text">Status: Finalizado a 20 minutos</p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img alt="Ilustração" src="https://placedog.net/samples/3.jpg" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Golden</h2>
              <p className="card_text">Descrição: </p>
              <p className="card_text">Local: </p>
              <p className="card_text">Status: </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img alt="Ilustração" src="https://placedog.net/samples/16.jpg" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Lilica</h2>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img
                alt="Ilustração"
                src="https://picsum.photos/id/237/536/354"
              />
            </div>
            <div className="card_content">
              <h2 className="card_title">Tóbi</h2>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img alt="Ilustração" src="https://placedog.net/samples/53.jpg" />
            </div>
            <div className="card_content">
              <h2 className="card_title">Avistado</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
