export interface IProductCategory {
	id: number;
	name: string;
	slug: string;
	description: string;
	parent: number;
	count: number;
	image: {
		id: number;
		src: string;
	};
}
