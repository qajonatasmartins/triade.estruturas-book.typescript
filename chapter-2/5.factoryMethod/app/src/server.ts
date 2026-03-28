import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/vehicles', (_req, res) => {
  res.redirect(302, '/vehicles.html');
});
app.get('/login', (_req, res) => {
  res.redirect(302, '/login.html');
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/vehicle/:type', (req, res) => {
  const raw = req.params.type.toLowerCase();
  if (raw === 'carro') {
    return res.json({
      tipo: 'carro',
      rodas: 4,
      rotulo: 'Carro — transporte familiar',
    });
  }
  if (raw === 'moto') {
    return res.json({
      tipo: 'moto',
      rodas: 2,
      rotulo: 'Moto — mobilidade urbana',
    });
  }
  return res.status(404).json({ error: 'Tipo de veículo desconhecido. Use carro ou moto.' });
});

app.post('/api/login', (req, res) => {
  const role = req.body?.role as string | undefined;
  const username = String(req.body?.username ?? '');
  const password = String(req.body?.password ?? '');

  if (role === 'client') {
    if (username === 'user' && password === 'user123') {
      return res.json({ ok: true, message: 'Bem-vindo, cliente!' });
    }
    return res.status(401).json({ ok: false, message: 'Credenciais de cliente inválidas.' });
  }

  if (role === 'admin') {
    if (username === 'admin' && password === 'admin123') {
      return res.json({ ok: true, message: 'Painel administrativo liberado.' });
    }
    return res.status(401).json({ ok: false, message: 'Credenciais de administrador inválidas.' });
  }

  return res.status(400).json({ ok: false, message: 'Informe role: client ou admin.' });
});

app.listen(PORT, () => {
  console.log(`Factory Method demo em http://localhost:${PORT}`);
});
