import dotenv from "dotenv";
dotenv.config();
import {
  ChatPromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const chat = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
  temperature: 0,
});

// Example 1 - Message Prompt Template as tuples
const sys_template =
  "You are a helpful assistant that translates {input_language} to {output_language}";

const human_template = "{text}";

const chatPrompt = ChatPromptTemplate.fromMessages([
  ["system", sys_template],
  ["human", human_template],
]);

const formattedChatPrompt = await chatPrompt.formatMessages({
  input_language: "English",
  output_language: "French",
  text: "I am learning Langchain js",
});

console.log("Chat Prompt", formattedChatPrompt);

const response = await chat.invoke(formattedChatPrompt);
console.log("Response -", response.content);

// Example 2 - Using Message Classes
// const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
//   "You are a helpful assistant that translates {input_language} to {output_language}"
// );
// const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{text}");
// const chatPrompt = ChatPromptTemplate.fromMessages([
//   systemMessagePrompt,
//   humanMessagePrompt,
// ]);

// const formattedChatPrompt = await chatPrompt.formatMessages({
//   input_language: "English",
//   output_language: "French",
//   text: "I love Programming",
// });

// const response = await chat.invoke(formattedChatPrompt);
// console.log("Response -", response.content);

// Example 3 - Using PromptTemplate
// const systemPrompt = new PromptTemplate({
//   template:
//     "You are a helpful assistant that translates {input_language} to {output_language}",
//   inputVariables: ["input_language", "output_language"],
// });

// const humanPrompt = new PromptTemplate({
//   template: "{text}",
//   inputVariables: ["text"],
// });

// const systemMessagePrompt = new SystemMessagePromptTemplate({
//   prompt: systemPrompt,
// });
// const humanMessagePrompt = new HumanMessagePromptTemplate({
//   prompt: humanPrompt,
// });
// const chatPrompt = ChatPromptTemplate.fromMessages([
//   systemMessagePrompt,
//   humanMessagePrompt,
// ]);

// const formattedChatPrompt = await chatPrompt.formatMessages({
//   input_language: "English",
//   output_language: "French",
//   text: "I love Programming",
// });
// const response = await chat.invoke(formattedChatPrompt);
// console.log("Response -", response.content);
