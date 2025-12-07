import { GoogleGenAI, Type } from "@google/genai";

// Initialize the client directly using the environment variable.
// Assume process.env.API_KEY is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeProjectBrief = async (brief: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analyze this project brief for a software agency.
      Brief: "${brief}"
      
      Return a raw JSON object (no markdown) with:
      - suggestedServices: string[] (max 3 items)
      - estimatedTimeline: string (e.g. "4-6 weeks")
      - technicalStack: string[] (max 4 items)
      - summary: string (concise strategic overview, max 20 words)
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestedServices: { type: Type.ARRAY, items: { type: Type.STRING } },
            estimatedTimeline: { type: Type.STRING },
            technicalStack: { type: Type.ARRAY, items: { type: Type.STRING } },
            summary: { type: Type.STRING }
          }
        }
      }
    });

    return response.text || "";
  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    throw error;
  }
};