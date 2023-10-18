const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");

router.get("/characters", characterController.getCharacters);
router.get("/character/:characterId", characterController.getCharacterById);

module.exports = router;
