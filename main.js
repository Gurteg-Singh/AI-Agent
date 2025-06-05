const { GoogleGenAI } = require("@google/genai");
require('dotenv').config();
const readlineSync = require('readline-sync');


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
let prompt ="";
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text;
}

// main();
async function chatting(){
    prompt = readlineSync.question('How can I help you today ?');

    const response = await main();
    return response;
}

async function run(){
  const b = await chatting();
  console.log(b);
}

run();
