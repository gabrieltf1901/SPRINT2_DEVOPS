const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Exemplo de armazenamento em memória para testes iniciais
let pacientes_op = [
  { id: 1, nome: 'Paciente 1', data_nascimento: 17/10/80, contato: '99999-00001', plano_de_saude: 'Plano C', historico_medico: 'Histórico médico aqui' },
  { id: 2, nome: 'Paciente 2', data_nascimento: 20/7/77, contato: '99999-00002', plano_de_saude: 'Plano A', historico_medico: 'Histórico médico aqui' },
];

// Rotas CRUD para gerenciar jogadores
app.get('/pacientes_op', (req, res) => {
  res.json(pacientes_op);
});

app.get('/pacientes_op/:id', (req, res) => {
  const paciente = pacientes_op.find(j => j.id === parseInt(req.params.id));
  if (paciente) {
    res.json(paciente);
  } else {
    res.status(404).json({ message: 'paciente não encontrado' });
  }
});

app.post('/pacientes_op', (req, res) => {
  const novoJogador = { id: pacientes_op.length + 1, ...req.body };
  pacientes_op.push(novoPaciente);
  res.status(201).json(novoPaciente);
});

app.put('/pacientes_op/:id', (req, res) => {
  const index = pacientes_op.findIndex(j => j.id === parseInt(req.params.id));
  if (index !== -1) {
    pacientes_op[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(pacientes_op[index]);
  } else {
    res.status(404).json({ message: 'Paciente não encontrado' });
  }
});

app.delete('/pacientes_op/:id', (req, res) => {
  const index = pacientes_op.findIndex(j => j.id === parseInt(req.params.id));
  if (index !== -1) {
    const pacienteRemovido = pacientes_op.splice(index, 1);
    res.json(pacienteRemovido);
  } else {
    res.status(404).json({ message: 'Paciente não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
