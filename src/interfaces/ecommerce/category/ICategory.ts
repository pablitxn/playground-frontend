import { IProduct } from 'interfaces/ecommerce'

export interface ICategory {
	_id: string
	name: string
	slug: string
	description: string
	parent: number
	count: number
	image: {
		src: string
	}
	products: IProduct[]
}
