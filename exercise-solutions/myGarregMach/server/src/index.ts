
import express, { NextFunction, Request, Response } from 'express';
import { SERVER_PORT } from '../../config.json';
import { login } from './funcs/login';
import { notices } from './funcs/notices';
import { studentDetails } from './funcs/studentDetails';
import { staffDetails } from './funcs/staffDetails';
import { studentCards } from './funcs/studentCards';
import { enrolStudent } from './funcs/enrolStudent';

const errorHandler = require('http-errors-middleware');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log('Hello, TypeScript with Express :)))!');
  res.send('Hello, TypeScript with Express :)))!');
});

app.post('/login', async (req: Request, res: Response, next : NextFunction) => {
  const { gID, password } = req.body;
  
  try {
    const d = await login(gID, password);
    res.send(d);
  } catch (e) {
    next(e);
  }
});

app.get('/notices', async (req: Request, res: Response, next: NextFunction) => {

  try {
    const result = await notices();
    res.send(result);
  } catch (e) {
    next(e);
  }
});

app.get('/studentDetails', async (req: Request, res: Response, next: NextFunction) => {
  const { gID } = req.query;

  try {
    const result = await studentDetails(gID as string);
    res.send(result);
  } catch (e) {
    next(e);
  }
});

app.get('/staffDetails', async (req: Request, res: Response, next: NextFunction) => {
  const { gID } = req.query;

  try {
    const result = await staffDetails(gID as string);
    res.send(result);
  } catch (e) {
    next(e);
  }

});

app.get('/studentCards', async (req: Request, res: Response, next: NextFunction) => {

  try {
    const result = await studentCards();
    res.send(result);
  } catch (e) {
    next(e);
  }
});

app.post('/enrolStudent', async (req: Request, res: Response, next: NextFunction) => {
  const { gID, name, password, profileUrl, degree, house } = req.body;

  try {
    const result = await enrolStudent(gID, name, password, profileUrl, degree, house);
    res.send(result);
  } catch (e) {
    next(e);
  }

});

app.use(errorHandler( { debug : true }));

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port http://localhost:${SERVER_PORT}`);
});