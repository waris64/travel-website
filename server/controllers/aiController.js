import { generateTripPlan } from "../utils/geminiClient.js";

export const generateAIPlan = async (req, res) => {
  try {
    const { destination, days, interests } = req.body;
    console.log("Incoming Request:", { destination, days, interests });

    const itinerary = await generateTripPlan(destination, days, interests);

    console.log("Gemini Response:", itinerary);

    res.json(itinerary);
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "Failed to generate trip plan." });
  }
};
