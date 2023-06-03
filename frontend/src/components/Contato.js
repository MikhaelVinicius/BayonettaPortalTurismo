import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import "./Contato.css"

const Contato = () => {
  return (
    <div className="contato-fixo">
      <a href="mailto:email@example.com" className="link-contato">
        <AiOutlineMail className="icone" />
      </a>
    </div>
  );
};

export default Contato;
