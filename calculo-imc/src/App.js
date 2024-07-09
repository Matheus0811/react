import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const handleCalcIMC = () => {
    if (!altura || !peso) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));

    // Classificação do IMC
    if (imcCalculado < 18.5) {
      setClassificacao('Magreza');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={handleCalcIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
