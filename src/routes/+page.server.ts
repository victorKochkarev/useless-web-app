import type { Actions } from './$types';

export const actions = {
	callForAction: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData)
	},
} satisfies Actions;