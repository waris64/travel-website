// utils/mockItineraryGenerator.js

export const generateMockItinerary = (tripData) => {
  if (!tripData || !tripData.days) return [];

  const { from, to, days } = tripData;

  const sampleActivities = [
    "Explore iconic landmarks",
    "Visit a local market",
    "Try traditional street food",
    "Relax at a scenic viewpoint",
    "Take a sunset walk by the beach",
    "Experience local nightlife",
    "Visit a museum or art gallery",
    "Take a photography tour",
    "Go hiking nearby",
    "Enjoy a spa and wellness day",
  ];

  const hotels = [
    "Grand Horizon Hotel",
    "Skyline Suites",
    "The Heritage Inn",
    "Ocean View Resort",
    "Mountain Lodge Retreat",
  ];

  const itinerary = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    title: sampleActivities[Math.floor(Math.random() * sampleActivities.length)],
    description: `A full day exploring ${to} — ${sampleActivities[
      Math.floor(Math.random() * sampleActivities.length)
    ].toLowerCase()}. Perfect for travelers who love adventure and local culture.`,
    meals: ["Breakfast", "Lunch", "Dinner"].slice(
      0,
      Math.floor(Math.random() * 3) + 1
    ),
    hotel: hotels[Math.floor(Math.random() * hotels.length)],
  }));

  return itinerary;
};
