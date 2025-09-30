const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Supabase config
const supabaseUrl = 'https://dbxrbtwmymzdhtgezcbu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRieHJidHdteW16ZGh0Z2V6Y2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NDI4MjcsImV4cCI6MjA3NDExODgyN30._-xFj6AtSH6cfN0CpbNCJNZCkqV68PPyWn6LuoTYu3A';
const supabase = createClient(supabaseUrl, supabaseKey);

// Propostas disponíveis para seleção
const availableProposals = {
  volare: {
    name: 'Volare',
    investment: 2500,
    investmentType: 'mensal',
    implementationFee: 4000,
    implementationType: 'único'
  },
  // Adicione outras propostas aqui se quiser
};

// Endpoint para editar proposta existente
app.patch('/proposals/:id', (req, res) => {
  const { id } = req.params;
  const { name, investment, investmentType, implementationFee, implementationType } = req.body;
  if (!availableProposals[id]) {
    return res.status(404).json({ error: 'Proposta não encontrada' });
  }
  if (name !== undefined) availableProposals[id].name = name;
  if (investment !== undefined) availableProposals[id].investment = investment;
  if (investmentType !== undefined) availableProposals[id].investmentType = investmentType;
  if (implementationFee !== undefined) availableProposals[id].implementationFee = implementationFee;
  if (implementationType !== undefined) availableProposals[id].implementationType = implementationType;
  res.json(availableProposals[id]);
});

// In-memory token mapping (dev only)
const tokenToId = new Map();

// Endpoint para listar propostas disponíveis
app.get('/proposals', (req, res) => {
  res.json(availableProposals);
});

// Salva proposta no Supabase e retorna URL única
app.post('/generate', async (req, res) => {
  const { companyName, value } = req.body;
  const { data, error } = await supabase
    .from('propostas')
    .insert([{
      company_name: companyName,
      investment: value.investment,
      investment_type: value.investmentType,
      implementation_fee: value.implementationFee,
      implementation_type: value.implementationType,
      created_at: new Date().toISOString()
    }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  const id = data[0].id;
  // Generate random, URL-safe token and map to numeric id
  const token = crypto.randomBytes(9).toString('base64url');
  tokenToId.set(token, id);
  // Return relative URL so it works with HTTP or HTTPS and any host
  res.json({ url: `/proposal/${token}` });
});

// Busca proposta pelo id no Supabase
app.get('/proposal/:id', async (req, res) => {
  const { id } = req.params;
  // Accept either the numeric id or a random token generated above
  const resolvedId = tokenToId.get(id) || id;
  const { data, error } = await supabase
    .from('propostas')
    .select('*')
    .eq('id', resolvedId)
    .single();

  if (error || !data) return res.status(404).json({ error: 'Proposta não encontrada' });
  res.json(data);
});

// PDF endpoint permanece igual
app.get('/proposal/:id/pdf', (req, res) => {
  // ...existing code...
  let chunks = [];
  doc.on('data', chunk => chunks.push(chunk));
  doc.on('end', () => {
    const result = Buffer.concat(chunks);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(result);
  });

  doc.fontSize(20).text('Proposta Comercial', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Empresa: ${data.companyName}`);
  doc.text(`Valor: ${data.value}`);
  doc.moveDown();
  doc.text('Obrigado pela confiança!', { align: 'center' });

  doc.end();
});

app.listen(5000, () => console.log('Backend rodando na porta 5000'));
