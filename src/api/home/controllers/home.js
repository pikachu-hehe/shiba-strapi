"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
	async find(ctx) {
		ctx.query = {

			populate: {
				Hero: {
					populate: '*'
				},
				Topics: {
					populate: ["categories"],
				},
				Slider: {
					populate: {
						Slide: {
							populate: "*", // Populate everything inside Slide
						},
					},
				},
			},
		};

		const { data, meta } = await super.find(ctx);
		return { data, meta };
	},
}));
