import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateTripPlan = async (tripData) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Generate a structured trip itinerary as JSON for the following trip:
      From: ${tripData.from}
      To: ${tripData.to}
      Start Date: ${tripData.startDate}
      End Date: ${tripData.endDate}
      Duration: ${tripData.days} days.
      Format: 
      {
        "itinerary": [
          {"day": 1, "title": "", "description": "", "hotel": "", "meals": []}
        ]
      }
    `;

    const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
    const text = result.response.text();

    console.log("Gemini Raw:", text);

    // Try to safely extract JSON
    const match = text.match(/\{[\s\S]*\}/);
    const json = match ? JSON.parse(match[0]) : null;

    return json?.itinerary || [];
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error(error?.message || "Failed to generate itinerary");
  }
};
