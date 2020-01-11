import {Product} from './product.model';

export class ProductStock {

	product: Product;
	targetStock: number;

	constructor(other?: ProductStock) {
		if (other) {
			this.product = new Product(other.product);
			this.targetStock = other.targetStock;
		}
	}

}
