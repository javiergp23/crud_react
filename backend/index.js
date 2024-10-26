import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORt = 3333;
app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
})