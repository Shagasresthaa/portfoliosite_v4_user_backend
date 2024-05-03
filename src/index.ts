import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from the User Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
