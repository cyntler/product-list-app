import express from 'express';
import { connect } from 'mongoose';

const port = process.env.BACKEND_PORT || 3000;
const app = express();

try {
  await connect(process.env.BACKEND_MONGODB_URI);
} catch (err) {
  console.error(err);
  process.exit(1);
}

app.listen(port, () =>
  console.log(`backend service is listening on ${port}...`),
);
