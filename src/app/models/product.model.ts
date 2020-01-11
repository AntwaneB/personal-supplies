import {Category} from './category.model';

export class Product {

	id: number;
	name: string;
	category: Category;

	public constructor(other?: Product) {
		if (other) {
			this.id = other.id;
			this.name = other.name;
			this.category = other.category;
		}
	}


}
