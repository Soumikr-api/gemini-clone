import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyD33IsfcbNw3Pa_zLwM2dMXtK4BREGqUlY";

async function runChat(prompt) {

  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });

  const model = "gemini-2.5-flash";

  const response = await ai.models.generateContentStream({
    model: model,
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  let resultText = "";

  for await (const chunk of response) {
    resultText += chunk.text;
  }

  return resultText;
}

export default runChat;