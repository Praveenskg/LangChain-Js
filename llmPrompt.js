import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new ChatOpenAI({});

// Example 1 - Prompt Having No input Value
const noInputPrompt = new PromptTemplate({
  inputVariables: [],
  template: "Tell me a  trick of javascript",
});
const formattedNoInputPrompt = await noInputPrompt.format();
const response = await llm.invoke(formattedNoInputPrompt);
console.log(" No input response ", response.content);

// Example 1 - Prompt Having One input Value
// const OneInputPrompt = new PromptTemplate({
//   inputVariables: ["language"],
//   template: "Tell me a  trick of {language}",
// });
// const formattedOneInputPrompt = await OneInputPrompt.format({
//   language: "python",
// });
// const response = await llm.invoke(formattedOneInputPrompt);
// console.log("  One input response ", response.content);

// Example 3 - Prompt Having Multiple input Value
// const multipleInputPrompt = new PromptTemplate({
//   inputVariables: ["language", "topic"],
//   template: "Tell me a  trick of {language} from {topic}",
// });
// const formattedMultipleInputPrompt = await multipleInputPrompt.format({
//   language: "javascript",
//   topic: "function",
// });
// const response = await llm.invoke(formattedMultipleInputPrompt);
// console.log(" Multiple input response ", response.content);

// Example 4 - Prompt Template - no input variable manually
// const template = "Tell me a  trick of {language} from {topic}";
// const promptTemplate = PromptTemplate.fromTemplate(template);

// const formattedPromptTemplate = await promptTemplate.format({
//   language: "javascript",
//   topic: "array",
// });
// const response = await llm.invoke(formattedPromptTemplate);
// console.log("Formatted prompt Template. ", response.content);
