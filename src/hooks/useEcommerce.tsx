import { useEffect } from "react";
// SWR
import useSWR from "swr";
// Utils
import { fetcher, responseFormatter } from "utils";

const API_CATEGORIES = "http://localhost:4200/api/ecommerce/categories";
const API_PRODUCTS = 	"http://localhost:4200/api/ecommerce/products";

const API_OFFERS = "http://localhost:4200/api/ecommerce/offers";

export const useEcommerce = () => {
	// Fetching data
	// const categoriesData = useSWR(API_CATEGORIES, fetcher);
	const productsData = useSWR(API_PRODUCTS, fetcher);
	// const offersData = useSWR(API_OFFERS, fetcher);
	// Formate data
	// const categories = responseFormatter(categoriesData).data;
	// const offers = responseFormatter(offersData).data;
	const products = responseFormatter(productsData).data;


	return {
		// categories,
		products
		// offers
	};
};
