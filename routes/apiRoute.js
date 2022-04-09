import passport from 'passport';
import express from 'express';

const router = express.Router();

router.get('/user', (req, res) => {
    res.send(req.user)
});

export default router;