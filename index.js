import express from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/user.js";
import checkPermissions from "./middleware/checkPermissions.js";
import { BadRequestException, Exception, ForbiddenException, InternalErrorException } from "./errors.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => res.send('Hello!'));
app.use('/user', UserRouter);

app.get('/error', (req, res) => {
  console.log(req.body.aamir.khan);
})

app.use((err, req, res, next) => {
  console.error(err);
  if(err instanceof Exception) {
     return res.status(err.status).json({ error: err.message });
  }
  else {
      return res.status(500).json({ error: 'Something went wrong!' });
  }
 
});

app.get('/view-reports', checkPermissions(['view']), (req, res) => {
    res.json({ message: 'Access granted to view reports.' });
});

app.get('/edit-reports', checkPermissions(['edit', 'view']), (req, res) => {
    res.json({ message: 'Access granted to edit reports.' });
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})