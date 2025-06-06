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
    const question = readlineSync.question('How can I help you today ?');
    prompt = `HI , The user has asked for this information : ${question} . Can u tell whether user is asking about weather of some place or not. 
    Create a JSON like this one :
    {
      llmtask : true,
      location : london
    } if user is asking about weather of a place set llmtask as true and in location mention the place whose weather user wants to know
     ... if user is not asking weather of a place simply return lltask:false in JSON nothing else..   
     Listen your output should start with curly braces of JSON and end with that ... no extra stuff u will provide .. just a JSON`
    const response = await main();
    return response;
}

async function run(){
  const b = await chatting();
  console.log(b);
}

run();
