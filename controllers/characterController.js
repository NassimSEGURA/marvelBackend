const { callMarvelAPI } = require("../middleware/apiMiddleware");

const getCharacters = async (req, res) => {
  const name = req.query.name || "";
  const skip = req.query.skip || 0;
  const limit = req.query.limit || 100;

  const url = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`;

  try {
    const data = await callMarvelAPI(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCharacterById = async (req, res) => {
  const characterId = req.params.characterId;
  const url = `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY}`;

  try {
    const data = await callMarvelAPI(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCharacters,
  getCharacterById,
};
