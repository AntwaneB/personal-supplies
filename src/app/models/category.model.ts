import {Product} from './product.model';

export class Category {

	id: number;
	name: string;
	products: Product[];

	public constructor(other?: Category) {
		if (other) {
			this.id = other.id;
			this.name = other.name;
		}

		this.products = [];
	}

	public addProduct(product: Product) {
		this.products.push(product);
	}

}
