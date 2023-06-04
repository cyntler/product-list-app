import express, { json } from 'express';
import { connect, disconnect } from 'mongoose';
import cors from 'cors';

import { productRouter } from './routers/productRouter';
import { errorHandler } from './utils/errorHandler';

const port = process.env.BACKEND_PORT || 3000;
const app = express();

try {
  await connect(
    `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/db`,
  );
} catch (err) {
  console.error(err);
  process.exit(1);
}

app.use(json());
app.use(cors());
app.use('/v1/products', productRouter);
app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Back-end service is listening on ${port}...`),
);

server.on('close', () => {
  disconnect();
});

// vite-node hot reload handling
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeFullReload', () => {
    server.close();
  });
}
