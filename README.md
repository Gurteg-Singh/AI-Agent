📘 Project Overview
As I was learning about Generative AI, I discovered the underlying mechanics of tokenization and how Large Language Models (LLMs) like GPT or Gemini work. One key insight was that LLMs don't truly understand or compute—they predict responses based on patterns in the data they were trained on. As a result, they cannot perform real-time data access, live calculations, or similar tasks on their own.
To overcome these limitations, modern AI systems often integrate external tools/APIs to extend the capabilities of LLMs. When an LLM is paired with such tools to perform specific tasks beyond language generation, the result is known as an AI Agent.


🛠️ What I Built
Inspired by this concept, I decided to build a basic AI Agent from scratch. Here's what I implemented:
LLM Integration: I used Google Gemini 2.0 Flash via API to handle natural language tasks.
Task Classification Logic: I wrote logic to interpret the user's input, detect if it's a weather-related query, and respond accordingly.
Tool Usage: If the user asks about the weather in a specific location, my agent fetches real-time weather data using WeatherAPI.
Dynamic Prompting: The agent passes the fetched data back to the LLM, which summarizes it into a human-friendly response.


👇 Example Flow
User: "What's the weather like in London?"
LLM classifies the query → recognizes it's a weather question.
Agent fetches current weather data for London.
LLM receives the weather JSON and returns a natural language summary.


💡 Key Learnings
Understood the limitations of LLMs and how to work around them.
Learned how to design a task-routing pipeline between user input, LLM decision-making, and external API calls.
Gained hands-on experience with prompt engineering, API integration, and Node.js.


🚫 What This Is Not
This is a minimal proof-of-concept, not a production-ready agent. Real-world AI agents (like those in AutoGPT, LangChain, etc.) are much more complex with multi-step planning, memory, and dynamic tool chaining. However, this project helped me grasp the core idea and build confidence in developing intelligent systems.