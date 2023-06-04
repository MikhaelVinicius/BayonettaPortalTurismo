import React from 'react';
import logo from "../logos/locus.png";
import logo1 from "../logos/locusPE.png";
import logo2 from "../logos/upe.png";

const Parceiros = () => {
  return (
    <div

      style={{
        background: 'rgba(0, 0, 0, 0.1)', 
        backgroundImage: 'url("caminho_da_imagem_de_fundo.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily:'Segoe UI',
      }}
    >
      <h2 style={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)', }}>
        Nossos parceiros:
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '600px' }}>
        <div style={{ width: '150px', height: '150px' }}>
          <a href="http://www.upe.br/garanhuns/upe-campus-garanhuns-tem-projeto-aprovado-no-edital-facepe-de-ambientes-de-inovacao/">
            <img src={logo} alt="Locus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </a>
        </div>
        <div style={{ width: '150px', height: '150px' }}>
          <a href="https://www.secti.pe.gov.br/programa-locus-da-inovacao-locus/">
          <img src={logo1} alt="LocusPE" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </a>
        </div>
        <div style={{ width: '150px', height: '150px' }}>
          <a href="http://www.upe.br/garanhuns/graduacao/cursos-presenciais/bacharelado-em-engenharia-de-software/engenharia-de-software-ementario-do-perfil-2019/">
          <img src={logo2} alt="UPE" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Parceiros;
