const OpenAI = require("openai");
const Query = require("../models/queryModel");
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const processQuery = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Query is required" });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
    });

    const aiResponse = response.choices[0].message.content;

    // Store in MongoDB
    await Query.create({ query, response: aiResponse });

    res.json({ response: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI search failed" });
  }
};

module.exports = { processQuery };
