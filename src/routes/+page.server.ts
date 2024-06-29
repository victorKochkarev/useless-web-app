import type { Actions } from './$types';
import OpenAI from "openai";

export const actions = {
	callForAction: async ({ request }) => {
		const formData = await request.formData();
		const requestString = formData.get("actionText")
		console.log(`REQUEST: ${requestString}`)

		const openai = new OpenAI();

		const prefix = "make an excuse why I should not";
		const completion = await openai.chat.completions.create({
			messages: [{ role: "system", content: prefix + " " + requestString}],
			model: "gpt-3.5-turbo",
		});

		if(completion.choices.length == 0) {
			return;
		}
		console.log(completion.choices[0].message.content)

		return { success: true }
	},
} satisfies Actions;