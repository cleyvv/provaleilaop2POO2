
import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';
import lanceRoutes from './routes/lanceRoutes';
import leilaoRoutes from './routes/leilaoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', usuarioRoutes);
app.use('/api', lanceRoutes);
app.use('/api', leilaoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});