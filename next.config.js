/** @type {import("next").NextConfig} */

const config = {
	output: "export",
	trailingSlash: true,
	basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
	assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
	images: {
		unoptimized: true,
	},
};

export default config;
