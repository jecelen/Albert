import React from 'react';
import './style.css';
import inicio from './inicio.png'; // Supondo que sua imagem está no mesmo diretório
import logoAlbert from '../../assets/images/Albert.png'; // Supondo que sua imagem está no mesmo diretório

function PaginaInicial() {
  return (
    <div className="page">
      <div className="esq">
        <img src={inicio} alt="Imagem de Quiz" />
      </div>
      <div className="dir">
        <div className="divlogo">
          <img className="logo" src={logoAlbert} alt="Logo Albert" />
        </div>
        <div className="botoes">
          <div>
            <button type="button">Entrar</button>
          </div>
          <div>
            <p>Ainda não possui conta?</p>
          </div>
          <div>
            <button type="button">Registre-se</button>
          </div>
          <div>
            <p>Desafie sua mente com quizzes em Albert!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;