type ICategoryName = "discos" | "fotografia" | "informatica" | "musica";

export const getProductsAPI = (categoryName: ICategoryName) => {
	switch (categoryName) {
		case "discos":
			return "http://localhost:4200/api/ecommerce/category/5f5f7f649cd1ae43112fc5de";
		case "fotografia":
			return "http://localhost:4200/api/ecommerce/category/5f5f7f649cd1ae43112fc5de";
		case "informatica":
			return "http://localhost:4200/api/ecommerce/category/5f5f7f649cd1ae43112fc5de";
		case "musica":
			return "http://localhost:4200/api/ecommerce/category/5f5f7f649cd1ae43112fc5de";
	}
};
