import { db } from '../bd.js';

export const getUsers = (_, res) => {
    const q = 'SELECT * FROM users';
    db.query(q, (err, results) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(results);
    })
}