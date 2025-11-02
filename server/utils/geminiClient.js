import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


export const generateTripPlan = async (destination, days, interests = []) => {
  const prompt = `
    You are an expert travel planner. Create a ${days}-day itinerary for ${destination}.
    Focus on ${interests.join(", ") || "sightseeing and culture"}.
    Format strictly in JSON:
    [
      { "day": 1, "plan": "..." },
      { "day": 2, "plan": "..." }
    ]
  `;

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return JSON.parse(text);
};
