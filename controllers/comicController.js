const { callMarvelAPI } = require("../middleware/apiMiddleware");

const getComics = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const limit = req.query.limit || 20;
  const skip = req.query.skip || 0;
  const title = req.query.title || "";
  const url = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}&limit=${limit}&skip=${skip}&title=${title}`;

  try {
    const data = await callMarvelAPI(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComicsByCharacterId = async (req, res) => {
  const characterId = req.params.characterId;
  const url = `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`;

  try {
    const data = await callMarvelAPI(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComicById = async (req, res) => {
  const comicId = req.params.comicId;
  const url = `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.API_KEY}`;

  try {
    const data = await callMarvelAPI(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComics,
  getComicsByCharacterId,
  getComicById,
};
