"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
	async find(ctx) {
		// Modify ctx.query to define your custom population
		ctx.query.populate = {
			cover: {
				populate: '*',
			},
			Featured_Posts: {
				populate: {
					articles: {
						populate: "*",
					},
				},
			},

		};

		// Call the default core controller (which respects our modified ctx.query)
		const { data, meta } = await super.find(ctx);
		return { data, meta };
	},

	async findOne(ctx) {
		const { id } = ctx.params; // numeric id from the route /articles/:id

		// Manually define a non-cyclical population
		const article = await strapi.db.query("api::article.article").findOne({
			where: { id },

			populate: {
				cover: true,
				Featured_Posts: {

					populate: {
						articles: {
							// Omit or limit population here to avoid cycles
							populate: ["cover", "author", "category"],
						},
					},
				},

			},
		});

		if (!article) {
			return ctx.notFound("Article not found");
		}

		// Return data in the shape that Strapi typically expects
		return { data: article, meta: {} };
	},
}));
