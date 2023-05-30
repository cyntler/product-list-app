import express from 'express';
import { connect, disconnect } from 'mongoose';

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

const server = app.listen(port, () =>
  console.log(`backend service is listening on ${port}...`),
);

server.on('close', () => {
  disconnect();
});
