import express from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/user.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => res.send('Hello!'));
app.use('/user', UserRouter);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})