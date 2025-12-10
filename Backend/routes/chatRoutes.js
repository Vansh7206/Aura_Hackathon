const express = require('express');
const router = express.Router();

router.post('/message', (req, res) => {
    res.json({ message: "Chat message route working" });
});

router.get('/history', (req, res) => {
    res.json({ message: "Chat history route working" });
});

module.exports = router;
