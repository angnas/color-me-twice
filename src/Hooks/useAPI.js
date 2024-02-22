// const axios = require("axios");
import axios from "axios";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const apiUrl = process.env.REACT_APP_OPENAI_CHAT_API;

console.log(apiKey);
let previousMessages = [];
export async function askQuestion(question) {
	const conversation = [
		{ role: "system", content: "You are a helpful assistant." },
		{
			role: "user",
			content: "Tell me a poem about color contrasts that is 200 characters long, end with a random hashtag and note that you are the author",
		},
	];
	try {
		const response = await axios.post(
			apiUrl,
			{
				messages: conversation,
				temperature: 0.7,
				max_tokens: 150,
				model: "gpt-3.5-turbo-0613",
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${apiKey}`,
				},
			}
		);
		const assistantReply = response.data.choices[0].message.content;
		return `${assistantReply}`;
	} catch (error) {
		return null;
	}
}
const userQuestion = "Tell me a quote from an artist.";
askQuestion(previousMessages, userQuestion).then((assistantReply) => {
	previousMessages.push({ role: "assistant", content: assistantReply });
});
