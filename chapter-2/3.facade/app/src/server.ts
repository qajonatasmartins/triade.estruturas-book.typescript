import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3334;

type AccessType = 'client' | 'admin';

interface StoredUser {
  name: string;
  email: string;
  password: string;
  accessType: AccessType;
}

const usersByEmail = new Map<string, StoredUser>();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/login', (_req, res) => {
  res.redirect(302, '/login.html');
});
app.get('/register', (_req, res) => {
  res.redirect(302, '/register.html');
});

app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/register', (req, res) => {
  const name = String(req.body?.name ?? '').trim();
  const email = String(req.body?.email ?? '').trim().toLowerCase();
  const password = String(req.body?.password ?? '');
  const accessType = req.body?.accessType as string | undefined;

  if (!name || !email || !password) {
    return res.status(400).json({ ok: false, message: 'Preencha nome, e-mail e senha.' });
  }

  if (accessType !== 'client' && accessType !== 'admin') {
    return res.status(400).json({ ok: false, message: 'Tipo de acesso deve ser client ou admin.' });
  }

  if (usersByEmail.has(email)) {
    return res.status(409).json({ ok: false, message: 'Este e-mail já está cadastrado.' });
  }

  usersByEmail.set(email, { name, email, password, accessType });
  return res.status(201).json({
    ok: true,
    message: `Cadastro concluído. Bem-vindo, ${name}!`,
  });
});

app.post('/api/login', (req, res) => {
  const email = String(req.body?.email ?? '').trim().toLowerCase();
  const password = String(req.body?.password ?? '');

  if (!email || !password) {
    return res.status(400).json({ ok: false, message: 'Informe e-mail e senha.' });
  }

  const user = usersByEmail.get(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ ok: false, message: 'E-mail ou senha inválidos.' });
  }

  const label = user.accessType === 'admin' ? 'administrador' : 'cliente';
  return res.json({
    ok: true,
    message: `Olá, ${user.name}! Acesso como ${label} liberado.`,
  });
});

app.listen(PORT, () => {
  console.log(`Facade demo em http://localhost:${PORT}`);
});
