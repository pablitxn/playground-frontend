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
			const { data: products } = await fetchModule(`${URL}/products`, token);

			return products as IProduct[];
		} catch (err) {
			console.log(err);
		}
	},

	async getProductById(id) {
		try {
			const { data: product } = await fetchModule(
				`${URL}/get-product/${id}`,
				token
			);

			return product as IProduct;
		} catch (err) {
			console.log(err);
		}
	},

	async getCategories() {
		try {
			const { data: categories } = await fetchModule(
				`${URL}/categories`,
				token
			);

			return categories as ICategory[];
		} catch (err) {
			console.log(err);
		}
	},

	async getOffers() {
		try {
			const { data: offers } = await fetchModule(`${URL}/offers`, token);

			return offers as IOffer[];
		} catch (err) {
			console.log(err);
		}
	}
};

export default services;
