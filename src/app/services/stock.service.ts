import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Stock} from '../models/stock.model';
import {CurrentProductStock} from '../models/current-product-stock.model';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class StockService {

	constructor(private storage: Storage) {
	}

	public get(): Observable<Stock<CurrentProductStock>> {
		return from(this.storage.get('current-stock'));
	}

	public store(entity: Stock<CurrentProductStock>): Observable<Stock<CurrentProductStock>> {
		return from(this.storage.set('current-stock', entity));
	}

}

/*
{
	id: 1,
	products: [
		{
			product: {
				id: 1,
				name: 'Philadelphia Light',
				category: {
					id: 1,
					name: 'Food'
				}
			},
			targetStock: 2,
			currentStock: 1
		},
		{
			product: {
				id: 2,
				name: 'Muesli Cereals',
				category: {
					id: 1,
					name: 'Food'
				}
			},
			targetStock: 1,
			currentStock: 0
		},
		{
			product: {
				id: 3,
				name: 'Nutella',
				category: {
					id: 1,
					name: 'Food'
				}
			},
			targetStock: 3,
			currentStock: 2
		},
		{
			product: {
				id: 4,
				name: 'Spaghetti',
				category: {
					id: 1,
					name: 'Food'
				}
			},
			targetStock: 2,
			currentStock: 2
		},
		{
			product: {
				id: 5,
				name: 'Shampoo',
				category: {
					id: 2,
					name: 'Bathroom'
				}
			},
			targetStock: 2,
			currentStock: 0
		},
		{
			product: {
				id: 6,
				name: 'Toothpaste',
				category: {
					id: 2,
					name: 'Bathroom'
				}
			},
			targetStock: 2,
			currentStock: 1
		},
		{
			product: {
				id: 7,
				name: 'Band-aids',
				category: {
					id: 2,
					name: 'Bathroom'
				}
			},
			targetStock: 3,
			currentStock: 3
		},
		{
			product: {
				id: 8,
				name: 'Coca Cola',
				category: {
					id: 1,
					name: 'Food'
				}
			},
			targetStock: 12,
			currentStock: 2
		},
		{
			product: {
				id: 9,
				name: 'Chicken Breast',
				category: {
					id: 1,
					name: 'Food'
				}
			},
			targetStock: 4,
			currentStock: 1
		},
		{
			product: {
				id: 10,
				name: 'Indian Soup',
				category: {
					id: 1,
					name: 'Food'
				}
			},
			targetStock: 2,
			currentStock: 0
		}
	]
} as Stock<CurrentProductStock>
 */
