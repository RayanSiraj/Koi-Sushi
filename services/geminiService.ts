import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Koi Sushi & Thai & Bar in Ponte Vedra/Jacksonville.
Your goal is to help users book reservations and answer basic questions about the restaurant.

RESTAURANT INFO:
- Location: 80 Executive Way, Ponte Vedra Beach, FL 32082 (Jacksonville area)
- Cuisine: Fresh Sushi, Traditional Thai, and full Craft Bar.
- Atmosphere: Modern, upscale yet welcoming.

RESERVATION RULES:
1. Max party size is 12 for standard booking. Larger groups must call (904) 285-8631.
2. We serve Lunch (11:30am-3pm) and Dinner (4:30pm-close).
3. If a user wants to book, ask for: Date, Time, Party Size, and Name.

When you have ALL the information (Date, Time, Party Size, Name), use the 'bookReservation' tool to finalize the request.
If asked about the menu, highlight our popular items like Dragon Roll or Pad Thai.
Keep your tone warm, professional, and helpful. Use short, elegant sentences.
`;

const bookReservationDeclaration: FunctionDeclaration = {
  name: "bookReservation",
  description: "Finalize a table reservation at KOI.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      name: { type: Type.STRING, description: "Full name for the reservation" },
      date: { type: Type.STRING, description: "Date of the reservation (e.g., '2024-05-20')" },
      time: { type: Type.STRING, description: "Time of the reservation (e.g., '7:00 PM')" },
      partySize: { type: Type.NUMBER, description: "Number of guests" },
      notes: { type: Type.STRING, description: "Any special requests or dietary notes" }
    },
    required: ["name", "date", "time", "partySize"]
  }
};

export const getGeminiResponse = async (history: ChatMessage[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
        tools: [{ functionDeclarations: [bookReservationDeclaration] }]
      },
    });

    return {
      text: response.text || "",
      functionCalls: response.functionCalls
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm having a bit of trouble connecting to my reservation system. Please feel free to give us a call for immediate assistance.",
      functionCalls: undefined
    };
  }
};