'use strict';

/**
 * topic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::topic.topic', ({ strapi }) => ({
	async find(ctx) {
		ctx.query = {
			...ctx.query,
			populate: {
				Hero_Section: { populate: '*' },
				Topics: {
					populate: ["categories"],
				},

			},
		};

		const { data, meta } = await super.find(ctx);
		return { data, meta };
	},
}));
