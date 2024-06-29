import type { Actions } from './$types';
import OpenAI from "openai";

export const actions = {
	callForAction: async ({ request }) => {
		const formData = await request.formData();
		let requestString = formData.get("actionText")

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
	},
} satisfies Actions;