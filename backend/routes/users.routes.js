import express from 'express';
import { getUsers } from '../conbtrollers/user.controllers.js';

const router = express.Router();

router.get('/', getUsers )

export default router;