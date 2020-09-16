const env = process.env.NEXT_PUBLIC_ENV === "dev" ?? "prod";

// App
let API_KEY_HEROKU = "";
let GOOGLE_SITE_VERIFICATION = "";
let DEFAULT_LANGUAGE = "es-ES";

// Covid Map
let API_COVID_ALL = "";
let API_COVID_BRIEF = "";
let API_KEY_GOOGLE_MAPS = "";

// Ecommerce
let API_PLAYGROUND_BACKEND = "";

if (env === "prod") {
	API_KEY_HEROKU = process.env.NEXT_PUBLIC_API_KEY_HEROKU;
	GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
	DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE;
	API_COVID_ALL = process.env.NEXT_PUBLIC_API_COVID_ALL;
	API_COVID_BRIEF = process.env.NEXT_PUBLIC_API_COVID_BRIEF;
	API_KEY_GOOGLE_MAPS = process.env.NEXT_PUBLIC_API_KEY_GOOGLE_MAPS;
	API_PLAYGROUND_BACKEND = process.env.NEXT_PUBLIC_API_PLAYGROUND_BACKEND;
	DEFAULT_LANGUAGE = "es-ES";
} else {
	API_KEY_HEROKU = process.env.API_KEY_HEROKU;
	GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
	DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE;
	API_COVID_ALL = process.env.API_COVID_ALL;
	API_COVID_BRIEF = process.env.API_COVID_BRIEF;
	API_KEY_GOOGLE_MAPS = process.env.API_KEY_GOOGLE_MAPS;
	API_PLAYGROUND_BACKEND = process.env.API_PLAYGROUND_BACKEND;
	DEFAULT_LANGUAGE = "es-ES";
}

export {
	API_KEY_HEROKU,
	GOOGLE_SITE_VERIFICATION,
	DEFAULT_LANGUAGE,
	API_COVID_ALL,
	API_COVID_BRIEF,
	API_KEY_GOOGLE_MAPS,
	API_PLAYGROUND_BACKEND
};
