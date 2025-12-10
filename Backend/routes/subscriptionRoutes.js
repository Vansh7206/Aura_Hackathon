const express = require('express');
const router = express.Router();

router.post('/upgrade', (req, res) => {
    res.json({ message: "Subscription upgrade route working" });
});

router.get('/status', (req, res) => {
    res.json({ message: "Subscription status route working" });
});

module.exports = router;
