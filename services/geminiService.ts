import { GoogleGenAI, Type } from "@google/genai";
import { Task } from '../types';

export async function fetchMotivationalQuote(): Promise<string> {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Generate a short, powerful, one-sentence motivational quote for productivity. Do not include author attribution.',
        config: {
          temperature: 0.9,
          topP: 1,
          topK: 1,
          maxOutputTokens: 60,
        }
    });
    
    const text = response.text;
    if (text) {
      const quote = text.trim().replace(/^"|"$/g, ''); // Remove surrounding quotes if any
      if (quote) {
        return quote;
      }
    }
    
    console.warn("Motivational quote response from API was empty.");
    // Fallback to default quote if API returns no text
    return "The secret of getting ahead is getting started. - Mark Twain";

  } catch (error) {
    console.error("Error fetching motivational quote:", error);
    return "The secret of getting ahead is getting started. - Mark Twain";
  }
}


export async function fetchTaskSuggestions(category: string, tasks: Task[]): Promise<string[]> {
    try {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const taskList = tasks.map(t => `- ${t.text} (${t.completed ? 'completed' : 'not completed'})`).join('\n');
        const prompt = `As a friendly and encouraging AI productivity assistant, analyze my current task list for "${category}" and provide 3-4 short, actionable suggestions to help me get started and stay focused.

My tasks:
${taskList}

Keep the tone positive and the tips practical.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        suggestions: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                                description: "A single, actionable suggestion for the user."
                            },
                            description: "A list of 3 to 4 suggestions."
                        }
                    }
                }
            }
        });
        
        const text = response.text;
        if (text) {
            const result = JSON.parse(text);
            return result.suggestions || [];
        }
        return [];

    } catch (error) {
        console.error("Error fetching task suggestions:", error);
        return ["Sorry, I couldn't come up with suggestions right now. Try focusing on the smallest task first!"];
    }
}