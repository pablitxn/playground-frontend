export interface IProductImage {
	id: number;
	src: string;
	alt: string;
}

export interface IProduct {
	id: number;
	name: string;
	slug: string;
	date_created: string;
	description: string;
	price: string;
	regular_price: string;
	sale_price: string;
	on_sale: boolean;
	related_ids: number[];
	images: IProductImage[];
}
