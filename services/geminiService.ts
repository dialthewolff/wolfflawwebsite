import { GoogleGenAI } from "@google/genai";

// Initialize the client only if the key is present to avoid immediate errors on load
// However, for this architecture, we check inside the function.
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLegalInsight = async (topic: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "API Configuration Error: Please set your API Key to generate content.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a sophisticated, 150-word legal insight summary about the following topic: "${topic}". 
      The tone should be professional, corporate, and authoritative, suitable for a high-end law firm website. 
      Do not include markdown formatting like bolding or headers, just the text paragraphs.`,
    });
    return response.text || "No content generated.";
  } catch (error) {
    console.error("Error generating insight:", error);
    return "Unable to generate content at this time. Please try again later.";
  }
};

export const draftResponse = async (message: string): Promise<string> => {
    const ai = getAiClient();
    if (!ai) return "";
  
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a legal intake assistant. Analyze this client message: "${message}". 
        Draft a very brief (2 sentences) internal note for the attorney summarizing the legal domain (e.g., Real Estate, IP) and the urgency level.`,
      });
      return response.text || "";
    } catch (error) {
      return "";
    }
  };