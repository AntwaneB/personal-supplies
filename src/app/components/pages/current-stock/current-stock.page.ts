import {Component, OnInit} from '@angular/core';
import {CurrentProductStock} from '../../../models/current-product-stock.model';
import {Stock} from '../../../models/stock.model';
import {StockStatus} from '../../../models/stock-status.enum';
import {CurrentStockService} from '../../../services/current-stock.service';

@Component({
	selector: 'app-current-stock',
	templateUrl: 'current-stock.page.html',
	styleUrls: ['current-stock.page.scss']
})
export class CurrentStockPage implements OnInit {

	public EditMode = EditMode;
	public StockStatus = StockStatus;

	public _editMode: EditMode = EditMode.ADD;
	public set editMode(value: EditMode) {
		this._editMode = value;
	}
	public get editMode(): EditMode {
		return this._editMode;
	}

	public stock: Stock<CurrentProductStock>;
	private _products: CurrentProductStock[];
	public get products(): CurrentProductStock[] {
		return this._products;
	}

	public constructor(private currentStockService: CurrentStockService) {
	}

	public ngOnInit(): void {
		this.currentStockService.get().subscribe(stock => {
			console.log(stock);
			this.stock = new Stock<CurrentProductStock>(CurrentProductStock, stock);
			this._products = this.stock.products;

			this.sort('product.name', true);
		});
	}

	public editQuantity(product: CurrentProductStock, changeAmount: number) {
		let before = product.currentStock;

		product.currentStock += changeAmount;
		if (product.currentStock < 0) {
			product.currentStock = 0;
		}

		if (before != product.currentStock) {
			this.currentStockService.store(this.stock).subscribe(stock => {
				return;
			});
		}
	}

	private sort(property: string, asc: boolean) {
		let sortTypeValue: number = asc ? -1 : 1;

		this._products = this._products.sort((a, b) => {
			return this.getDeepValue(property.split('.'), a) < this.getDeepValue(property.split('.'), b) ? sortTypeValue : -sortTypeValue;
		});
	}

	public filter(value: string) {
		value = value.toLowerCase();

		this._products = this.stock.products.filter(product => product.product.name.toLowerCase().includes(value));
	}

	private getDeepValue = (property: string[], object: any) => {
		if (property.length == 1) {
			return (typeof object[property[0]] == 'string' ? object[property[0]].toLowerCase() : object[property[0]]);
		} else {
			return this.getDeepValue(property, object[property.shift()]);
		}
	};

}

enum EditMode {
	ADD,
	REMOVE
}
