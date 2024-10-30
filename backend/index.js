import express from 'express';
import cors from 'cors';

import usersRoutes from './routes/users.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

//Port to run the server
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
})

app.use("/", usersRoutes);