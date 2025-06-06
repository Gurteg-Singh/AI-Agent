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
    const question = readlineSync.question('What is in your mind ?');
    prompt = `HI , The user has asked for this information : ${question} . Can u tell whether user is asking about weather of some place or not. 
    Create a JSON like this one :
    {
      llmtask : true,
      location : london
    } if user is asking about weather of a place set llmtask as false and in location mention the place whose weather user wants to know
     ... if user is not asking weather of a place simply return lltask:true in JSON nothing else..   
     Listen your output should start with curly braces of JSON and end with that ... no extra stuff u will provide .. just a JSON`

    let response = await main();
    response = response.trim();
    response = response.replace(/^```json\s*|```$/g,'').trim();
    const data = JSON.parse(response);


    if(data.llmtask === true){
        prompt = question;
    }else{
      const weatherinfo  = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${data.location}&aqi=no`);
      const result =  await weatherinfo.json();
      const input = JSON.stringify(result);

      prompt = `Hey here is weather info i fetched for you : ${input} . Now your task is to read this info and give a short summary of weather of that place.`
    }
    const ans = await main();
    return ans;
}

async function run(){
  let  i =0;
  while(i<3){
    const b = await chatting();
    console.log(b);
    i++;
  }
  console.log("Your session has expired");
}

run();
