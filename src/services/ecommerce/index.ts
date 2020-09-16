// Types
import { IProduct, ICategory, IOffer } from "interfaces/ecommerce";
// Utils
import { fetchModule } from "services/utils";
// Constants
import { API_PLAYGROUND_BACKEND as URL } from "utils/constants";
import { API_KEY_HEROKU as token } from "utils/constants";

const services = {
	async getProducts() {
		try {
			const data = await fetchModule(`${URL}/products`, token);
			const products = await data.json();

			return products as IProduct[];
		} catch (err) {
			console.log(err);
		}
	},

	async getCategories() {
		try {
			const data = await fetchModule(`${URL}/categories`, token);
			const categories = await data.json();

			return categories as ICategory[];
		} catch (err) {
			console.log(err);
		}
	},

	async getOffers() {
		try {
			const data = await fetchModule(`${URL}/offers`, token);
			const offers = await data.json();

			return offers as IOffer[];
		} catch (err) {
			console.log(err);
		}
	}
};

export default services;
