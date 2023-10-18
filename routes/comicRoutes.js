// routes/comicRoutes.js
const express = require("express");
const router = express.Router();
const comicController = require("../controllers/comicController");

router.get("/comics", comicController.getComics);
router.get("/comics/:characterId", comicController.getComicsByCharacterId);
router.get("/comic/:comicId", comicController.getComicById);

module.exports = router;
