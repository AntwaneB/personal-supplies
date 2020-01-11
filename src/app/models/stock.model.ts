import {Category} from './category.model';
import {ProductStock} from './product-stock.model';

export class Stock<T extends ProductStock> {

	id: number;

	products: T[];

	private readonly _categories: Category[];
	public get categories(): Category[] {
		return this._categories;
	}

	public constructor(
		private productType: new (other: T) => T,
		other: Stock<T>
	) {
		this.products = [];
		this._categories = [];

		if (other) {
			this.id = other.id;

			let addedCategories: Map<number, Category> = new Map();
			other.products.forEach(product => {
				product = new this.productType(product);

				this.products.push(product);

				if (product.product.category) {
					if (!addedCategories.has(product.product.category.id)) {
						this._categories.push(new Category(product.product.category));

						addedCategories.set(product.product.category.id, new Category(product.product.category));
					}

					product.product.category = addedCategories.get(product.product.category.id);
					//addedCategories.get(product.product.category.id).addProduct(product.product);
				}
			});
		}

	}

}
