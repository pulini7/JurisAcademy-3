import { GoogleGenAI } from "@google/genai";

// Initialize the client. The key is expected to be in process.env.API_KEY
// Use process.env.API_KEY directly as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLegalAdvice = async (prompt: string): Promise<string> => {
  try {
    const systemInstruction = `
      Você é o JURIS_CORE v3.0, uma IA jurídica altamente avançada. 
      Sua persona é técnica, direta e ligeiramente robótica, como um terminal cyberpunk.
      Responda a perguntas jurídicas de forma precisa, citando 'protocolos' (leis) quando aplicável.
      Use termos como 'Analisando kernel jurídico', 'Processando jurisprudência', 'Output gerado'.
      Mantenha as respostas concisas e formatadas para leitura em terminal.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        // maxOutputTokens removed to prevent blocking response due to thinking tokens, 
        // as per guidelines for Gemini 3 models when thinking budget is not set.
      }
    });

    return response.text || "FALHA NO PROCESSAMENTO DE DADOS. TENTE NOVAMENTE.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ERRO CRÍTICO NO SISTEMA: CONEXÃO COM O MAINFRAME INTERROMPIDA.";
  }
};