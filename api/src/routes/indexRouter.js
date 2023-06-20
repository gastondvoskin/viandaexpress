const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {
    try {
        console.log('SIIIII')
    } catch (error) {
        console.log("NOOOO")
    }
});

module.exports = router;
