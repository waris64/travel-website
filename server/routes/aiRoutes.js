import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ POST /api/ai/plan
router.post("/plan", async (req, res) => {
  try {
    const { destination, days, interests } = req.body;

    if (!destination || !days) {
      return res.status(400).json({ error: "Missing destination or days" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `
      You are an expert travel planner.
      Create a ${days}-day itinerary for ${destination}.
      Focus on ${interests?.join(", ") || "sightseeing and culture"}.
      Format strictly as JSON:
      [
        {"day": 1, "plan": "..."},
        {"day": 2, "plan": "..."}
      ]
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("✅ Gemini Response:", text);

    // 🧠 Try parsing JSON response safely
    let itinerary;
    try {
      itinerary = JSON.parse(text);
    } catch (e) {
      itinerary = [{ day: 1, plan: text }]; // fallback if Gemini returns non-JSON
    }

    res.json({ itinerary });
  } catch (error) {
    console.error("🔥 Backend Gemini Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Correct export
export default router;
