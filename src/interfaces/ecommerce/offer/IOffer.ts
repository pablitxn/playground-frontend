import { IProduct } from 'interfaces/ecommerce'

export interface IOffer {
	_id: string;
	name: string
	description: string
	products: IProduct[]
}
