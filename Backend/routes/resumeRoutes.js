const express = require('express');
const router = express.Router();

router.post('/upload', (req, res) => {
    res.json({ message: "Resume upload route working" });
});

router.get('/history', (req, res) => {
    res.json({ message: "Resume history route working" });
});

module.exports = router;
