"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
	async find(ctx) {
		ctx.query = {
			...ctx.query,
			populate: {
				SEO_TAGS: {
					populate: '*'
				},
				Hero: {
					populate: '*'
				},
				Topics: {
					populate: ["categories"],
				},
				Slider: {
					populate: {
						articles: {
							// Omit or limit population here to avoid cycles
							populate: ["category"],
						},
					},

				},
			},
		};

		const { data, meta } = await super.find(ctx);
		return { data, meta };
	},
}));
