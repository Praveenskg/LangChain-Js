import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from "dotenv";
dotenv.config();

async function chat(input) {
  const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    apiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
  });

  const response = await model.invoke([new HumanMessage({ content: input })]);
  return response;
}

const question = "What is the capital of France";

chat(question)
  .then((response) => console.log(response.content))
  .catch((error) => console.error(error));
