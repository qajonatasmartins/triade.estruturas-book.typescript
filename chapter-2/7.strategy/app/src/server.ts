import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/signup', (_req, res) => {
  res.redirect(302, '/signup.html');
});

app.use(express.static(path.join(__dirname, '../public')));

type Genero = 'masculino' | 'feminino' | 'nao_binario';

app.post('/api/signup', (req, res) => {
  const nome = String(req.body?.nome ?? '').trim();
  const email = String(req.body?.email ?? '').trim();
  const genero = req.body?.genero as string | undefined;

  if (!nome || !email) {
    return res.status(400).json({ ok: false, message: 'Informe nome e e-mail.' });
  }

  const raw = String(genero ?? '').toLowerCase();
  const allowed: Genero[] = ['masculino', 'feminino', 'nao_binario'];
  if (!allowed.includes(raw as Genero)) {
    return res.status(400).json({
      ok: false,
      message: 'Informe genero: masculino, feminino ou nao_binario.',
    });
  }

  const g = raw as Genero;
  const labels: Record<Genero, string> = {
    masculino: 'masculino',
    feminino: 'feminino',
    nao_binario: 'não binário',
  };

  return res.json({
    ok: true,
    message: `Cadastro recebido: perfil ${labels[g]} (${nome}).`,
  });
});

app.listen(PORT, () => {
  console.log(`Strategy demo em http://localhost:${PORT}`);
});
