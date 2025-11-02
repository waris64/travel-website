// ✅ src/services/geminiService.jsx

export const generateTripPlan = async (destination,days,interests=[]) => {
  try {
    const res = await fetch("http://localhost:5000/api/ai/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({destination,days,interests}),
    });

    if (!res.ok) throw new Error("Failed to fetch plan from backend");

    const data = await res.json();
    console.log("Trip Plan (from backend):", data);
    return data.itinerary || [];
  } catch (error) {
    console.error("Frontend API Error:", error);
    throw error;
  }
};
