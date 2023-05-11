import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comentarios.css';

function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  useEffect(() => {
    fetchComentarios();
  }, []);

  const fetchComentarios = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/comentarios');
      setComentarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postComentario = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/comentarios', {
        nome: nome,
        email: email,
        comentario: comentario
      });
      if (response.status === 201) {
        fetchComentarios();
        setNome('');
        setEmail('');
        setComentario('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Comentários</h1>
      <div>
        <input
          type="nome"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Comentário"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
        <button onClick={postComentario}>Postar Comentário</button>
      </div>
      <div className='poster'>
        {comentarios.map((comentario) => (
          <div key={comentario.id}>
            <p>{comentario.nome}</p>
            <p>{comentario.email}</p>
            <p>{comentario.comentario}</p>
            <p>{comentario.data_publicacao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comentarios;
